import { CARD_TIMINGS } from "@/config/animation";
import { Config } from "@/config/lore";
import { LoreCard } from "@/components/Card/LoreCard";
import { getRarity } from "@/data/rarities";
import type { AwardedCard } from "@/types/lore";

interface PackSummaryProps {
  cards: AwardedCard[];
  onContinue: () => void;
  onViewCollection: () => void;
}

export function PackSummary({ cards, onContinue, onViewCollection }: PackSummaryProps) {
  const xp = cards.reduce((total, card) => total + card.collectionXp, 0);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <header className="text-center">
        <h2 className="font-display text-[clamp(1rem,1.6vw,1.4rem)] tracking-[0.42em] text-foreground">
          PACK OPENED
        </h2>
        <p className="mt-1 text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">
          {cards.length} Cards Acquired{Config.ShowCollectionXp ? ` · ${xp} Collection XP` : ""}
        </p>
      </header>

      <ul className="flex flex-wrap items-start justify-center gap-3">
        {cards.map((card, i) => {
          const rarity = getRarity(card.rarity);
          return (
            <li
              key={card.instanceId}
              className="lore-anim-rise flex w-[clamp(78px,7.5vw,108px)] flex-col items-center gap-1.5"
              style={{ animationDelay: `${i * CARD_TIMINGS.summaryStagger}ms` }}
            >
              <div className="relative w-full" style={{ aspectRatio: "2 / 3" }}>
                <LoreCard card={card} compact />
                {card.duplicate ? (
                  <span className="absolute left-1 top-1 border border-border bg-[var(--surface-strong)] px-1 py-px text-[0.38rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Dupe
                  </span>
                ) : null}
                {card.limited ? (
                  <span className="absolute bottom-1 right-1 border border-border bg-[var(--surface-strong)] px-1 py-px text-[0.38rem] uppercase tracking-[0.18em] text-foreground">
                    Ltd
                  </span>
                ) : null}
              </div>
              <p className="w-full truncate text-center text-[0.5rem] uppercase tracking-[0.16em] text-foreground/90">
                {card.name}
              </p>
              <p
                className="text-[0.44rem] font-bold uppercase tracking-[0.2em]"
                style={{ color: rarity.colorVar }}
              >
                <span aria-hidden>{rarity.glyph} </span>
                {rarity.label} · #{String(card.number).padStart(3, "0")}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onContinue}
          className="border px-7 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: "var(--accent)", background: "var(--accent)" }}
        >
          Continue
        </button>
        <button
          type="button"
          onClick={onViewCollection}
          className="border px-7 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-foreground transition-colors duration-200 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
        >
          View Collection
        </button>
      </div>
    </div>
  );
}
