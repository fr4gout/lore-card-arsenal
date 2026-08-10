import { CARD_TIMINGS, EASING } from "@/config/animation";
import { CardBack } from "@/components/Card/CardBack";
import { CardTilt } from "@/components/Card/CardTilt";
import { LoreCard } from "@/components/Card/LoreCard";
import { RarityEffect } from "@/components/Rarity/RarityEffect";
import { SERIES } from "@/data/cards";
import { useCardReveal } from "@/hooks/useCardReveal";
import type { AwardedCard, PackPhase } from "@/types/lore";

interface CardRevealProps {
  card: AwardedCard;
  phase: PackPhase;
}

/** One card's full reveal: enter, foreshadow, flip, rarity effect, inspect. */
export function CardReveal({ card, phase }: CardRevealProps) {
  const state = useCardReveal(card, phase);
  const mythic = card.rarity === "mythic";
  const entering = phase === "CARD_ENTER";

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <RarityEffect
        color={state.color}
        intensity={state.intensity + state.foreshadow * 0.6}
        particles={state.particles}
        mythic={mythic}
      />

      <div
        className="lore-perspective relative"
        style={{
          height: "min(46vh, 420px)",
          aspectRatio: "2 / 3",
          opacity: entering ? 0 : 1,
          transform: entering
            ? "translate3d(0, 26px, 0) scale(0.94)"
            : mythic && state.revealed
              ? "translate3d(0, -10px, 0) scale(1.02)"
              : "none",
          transition: `opacity ${CARD_TIMINGS.enter}ms ${EASING.cinematic}, transform 900ms ${EASING.cinematic}`,
        }}
      >
        <CardTilt enabled={state.inspecting} className="h-full w-full" elevated={state.revealed}>
          <div
            className="lore-3d relative h-full w-full"
            style={{
              transform: `rotateY(${state.flipped ? 0 : 180}deg)`,
              transition: `transform ${CARD_TIMINGS.flip}ms ${EASING.cinematic}`,
            }}
          >
            <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
              <LoreCard card={card} revealed={state.revealed} priority />
            </div>
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <CardBack seriesLabel={SERIES[card.series].label} />
              {/* rarity foreshadowing — hints, never the answer */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-[6px] transition-opacity duration-700"
                style={{
                  opacity: state.foreshadow,
                  boxShadow: `0 0 0 1px color-mix(in oklab, ${state.color} 60%, transparent), 0 0 40px color-mix(in oklab, ${state.color} 45%, transparent)`,
                }}
                aria-hidden
              />
            </div>
          </div>
        </CardTilt>
      </div>

      {/* inspection metadata */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-center transition-opacity duration-500"
        style={{ opacity: state.inspecting ? 1 : 0 }}
      >
        <p className="text-[0.55rem] uppercase tracking-[0.34em] text-muted-foreground">
          {SERIES[card.series].label} · #{String(card.number).padStart(3, "0")}
          {card.limited ? ` · Limited ${card.limited.edition}/${card.limited.total}` : ""}
          {card.duplicate ? " · Duplicate" : ""}
        </p>
      </div>
    </div>
  );
}
