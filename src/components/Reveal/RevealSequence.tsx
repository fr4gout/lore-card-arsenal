import { useEffect } from "react";
import { CardReveal } from "./CardReveal";
import { ProgressDots } from "@/components/UI/ProgressDots";
import type { AwardedCard, PackPhase } from "@/types/lore";

interface RevealSequenceProps {
  cards: AwardedCard[];
  index: number;
  phase: PackPhase;
  onNext: () => void;
  onSkip: () => void;
}

/** Owns card-to-card progression, preloading and the stage controls. */
export function RevealSequence({ cards, index, phase, onNext, onSkip }: RevealSequenceProps) {
  const card = cards[index];
  const upcoming = cards[index + 1];
  const inspecting = phase === "CARD_INSPECT";

  // Preload only the next artwork; the rest stays lazy.
  useEffect(() => {
    if (!upcoming) return;
    const img = new Image();
    img.src = upcoming.artwork;
  }, [upcoming]);

  if (!card) return null;

  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-4">
      <CardReveal card={card} phase={phase} />

      <div className="flex flex-col items-center gap-3">
        <ProgressDots total={cards.length} index={index} />
        <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">
          Card {String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={inspecting ? onNext : onSkip}
          className="border px-6 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-foreground transition-colors duration-200 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
        >
          {inspecting ? (index + 1 === cards.length ? "Finish" : "Next Card") : "Skip"}
        </button>
      </div>
    </div>
  );
}
