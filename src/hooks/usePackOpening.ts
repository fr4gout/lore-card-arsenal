import { useCallback, useEffect, useRef, useState } from "react";
import { CARD_TIMINGS, PACK_TIMINGS } from "@/config/animation";
import { getRarity } from "@/data/rarities";
import { useNuiCallback } from "./useNuiCallback";
import { useReducedMotion } from "./useReducedMotion";
import type { SoundId } from "@/config/audio";
import type { AwardedCard, PackPhase, RarityId } from "@/types/lore";
import type { OpenPackResponse } from "@/lib/nui/rewards";

const TRANSITIONS: Record<PackPhase, PackPhase[]> = {
  IDLE: ["OPENING", "CLOSING"],
  OPENING: ["PACK_BREAK", "IDLE"],
  PACK_BREAK: ["CARD_ENTER"],
  CARD_ENTER: ["RARITY_BUILDUP"],
  RARITY_BUILDUP: ["CARD_FLIP"],
  CARD_FLIP: ["CARD_REVEALED"],
  CARD_REVEALED: ["CARD_INSPECT"],
  CARD_INSPECT: ["NEXT_CARD", "SUMMARY", "CLOSING"],
  NEXT_CARD: ["CARD_ENTER", "SUMMARY"],
  SUMMARY: ["CLOSING", "IDLE"],
  CLOSING: ["IDLE"],
};

const revealSound = (rarity: RarityId): SoundId => {
  switch (rarity) {
    case "mythic":
      return "mythic-reveal";
    case "legendary":
      return "legendary-reveal";
    case "epic":
      return "epic-reveal";
    case "rare":
      return "rare-reveal";
    default:
      return "card-reveal";
  }
};

interface Options {
  packId: string;
  size: number;
  play: (id: SoundId) => void;
}

export function usePackOpening({ packId, size, play }: Options) {
  const [phase, setPhase] = useState<PackPhase>("IDLE");
  const [cards, setCards] = useState<AwardedCard[]>([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduced = useReducedMotion();
  const { call, pending } = useNuiCallback<OpenPackResponse>("openPack");

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const go = useCallback((next: PackPhase) => {
    setPhase((current) => (TRANSITIONS[current].includes(next) ? next : current));
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  /** Runs the per-card choreography: enter -> foreshadow -> flip -> revealed. */
  const runCard = useCallback(
    (card: AwardedCard) => {
      const rarity = getRarity(card.rarity);
      const scale = reduced ? 0.35 : 1;
      go("CARD_ENTER");
      play("card-enter");
      after(CARD_TIMINGS.enter * scale, () => {
        go("RARITY_BUILDUP");
        after(rarity.buildupDuration * scale, () => {
          go("CARD_FLIP");
          play("card-flip");
          after(CARD_TIMINGS.flip * scale, () => {
            go("CARD_REVEALED");
            play(revealSound(card.rarity));
            after(rarity.revealDuration * scale, () => go("CARD_INSPECT"));
          });
        });
      });
    },
    [after, go, play, reduced],
  );

  const start = useCallback(async () => {
    if (phase !== "IDLE" || pending) return;
    setError(null);
    play("pack-click");
    go("OPENING");

    const response = await call({ packId, size });
    if (!response || !response.ok) {
      setError(response?.ok === false ? response.error : "REQUEST_FAILED");
      setPhase("IDLE");
      return;
    }

    const awarded = response.result.cards;
    setCards(awarded);
    setIndex(0);

    const scale = reduced ? 0.35 : 1;
    const openAt =
      (PACK_TIMINGS.input + PACK_TIMINGS.focus + PACK_TIMINGS.energy + PACK_TIMINGS.tension) * scale;

    after(PACK_TIMINGS.input * scale, () => play("pack-open"));
    after(openAt, () => {
      setPhase("PACK_BREAK");
      after((PACK_TIMINGS.split + PACK_TIMINGS.flash + PACK_TIMINGS.transition) * scale, () => {
        const first = awarded[0];
        if (first) runCard(first);
      });
    });
  }, [after, call, go, packId, pending, phase, play, reduced, runCard, size]);

  const next = useCallback(() => {
    if (phase !== "CARD_INSPECT") return;
    clearTimers();
    const upcoming = index + 1;
    if (upcoming >= cards.length) {
      setPhase("SUMMARY");
      play("summary");
      return;
    }
    setPhase("NEXT_CARD");
    setIndex(upcoming);
    after(160, () => {
      const card = cards[upcoming];
      if (card) runCard(card);
    });
  }, [after, cards, clearTimers, index, phase, play, runCard]);

  const reset = useCallback(() => {
    clearTimers();
    setCards([]);
    setIndex(0);
    setPhase("IDLE");
  }, [clearTimers]);

  const skip = useCallback(() => {
    if (phase === "CARD_ENTER" || phase === "RARITY_BUILDUP" || phase === "CARD_FLIP" || phase === "CARD_REVEALED") {
      clearTimers();
      setPhase("CARD_INSPECT");
    }
  }, [clearTimers, phase]);

  const current = cards[index] ?? null;
  const busy = phase !== "IDLE" && phase !== "CARD_INSPECT" && phase !== "SUMMARY";

  return { phase, cards, index, current, error, busy, pending, start, next, skip, reset };
}
