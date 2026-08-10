import { useMemo } from "react";
import { getRarity } from "@/data/rarities";
import type { AwardedCard, PackPhase } from "@/types/lore";

export interface RevealState {
  showBack: boolean;
  flipped: boolean;
  revealed: boolean;
  inspecting: boolean;
  /** 0-1 foreshadowing strength before the flip. */
  foreshadow: number;
  intensity: number;
  glyph: string;
  color: string;
  holoSpeed: number;
  particles: number;
}

/** Derives per-card reveal presentation from the machine phase. */
export function useCardReveal(card: AwardedCard | null, phase: PackPhase): RevealState {
  return useMemo(() => {
    const rarity = card ? getRarity(card.rarity) : null;
    const flipped = phase === "CARD_FLIP" || phase === "CARD_REVEALED" || phase === "CARD_INSPECT";
    const buildup = phase === "RARITY_BUILDUP";
    const revealed = phase === "CARD_REVEALED" || phase === "CARD_INSPECT";

    return {
      showBack: phase === "CARD_ENTER" || buildup,
      flipped,
      revealed,
      inspecting: phase === "CARD_INSPECT",
      foreshadow: buildup ? (rarity?.intensity ?? 0) : 0,
      intensity: revealed ? (rarity?.intensity ?? 0) : buildup ? (rarity?.intensity ?? 0) * 0.5 : 0,
      glyph: rarity?.glyph ?? "◦",
      color: rarity?.colorVar ?? "var(--rarity-common)",
      holoSpeed: rarity?.holoSpeed ?? 1,
      particles: revealed ? (rarity?.particles ?? 0) : 0,
    };
  }, [card, phase]);
}
