import { memo } from "react";
import { CardArtwork } from "./CardArtwork";
import { HolographicLayer } from "./HolographicLayer";
import { SERIES } from "@/data/cards";
import { getRarity } from "@/data/rarities";
import type { AwardedCard, CardDefinition } from "@/types/lore";

interface LoreCardProps {
  card: CardDefinition | AwardedCard;
  revealed?: boolean;
  priority?: boolean;
  compact?: boolean;
}

/** Multi-layer card face: frame, rarity border, artwork, foil, info, edge glow. */
export const LoreCard = memo(function LoreCard({
  card,
  revealed = true,
  priority = false,
  compact = false,
}: LoreCardProps) {
  const rarity = getRarity(card.rarity);
  const series = SERIES[card.series];
  const duplicate = "duplicate" in card ? card.duplicate : false;

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-[3px]"
      style={{
        background: "oklch(0.11 0.02 267)",
        boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${rarity.colorVar} 55%, transparent), inset 0 0 34px color-mix(in oklab, ${rarity.colorVar} 14%, transparent)`,
      }}
    >
      {/* outer metallic frame */}
      <div
        className="absolute inset-0 rounded-[3px] p-[3px]"
        style={{
          background:
            "linear-gradient(150deg, oklch(0.42 0.02 262), oklch(0.18 0.02 265) 30%, oklch(0.32 0.02 262) 55%, oklch(0.14 0.02 265))",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-[oklch(0.1_0.018_267)]">
          {/* artwork stack */}
          <div className={compact ? "absolute inset-0" : "absolute inset-x-0 top-0 bottom-[30%]"}>
            <CardArtwork src={card.artwork} name={card.name} priority={priority} />
          </div>

          {/* header */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2 py-1.5">
            <span className="font-display text-[0.5rem] tracking-[0.42em] text-foreground/90">LORE</span>
            <span className="text-[0.46rem] tracking-[0.22em] text-foreground/70">
              #{String(card.number).padStart(3, "0")}
            </span>
          </div>

          {!compact ? (
            <div
              className="absolute inset-x-0 bottom-0 h-[30%] border-t px-3 pt-2"
              style={{
                borderColor: `color-mix(in oklab, ${rarity.colorVar} 40%, transparent)`,
                background:
                  "linear-gradient(to bottom, oklch(0.14 0.022 267 / 0.96), oklch(0.1 0.018 267))",
              }}
            >
              <h3 className="font-display text-[clamp(0.7rem,1vw,0.95rem)] font-semibold leading-tight tracking-tight text-foreground">
                {card.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-[0.55rem] leading-snug text-muted-foreground">
                {card.description}
              </p>
              <div className="absolute inset-x-3 bottom-2 flex items-center justify-between">
                <span
                  className="flex items-center gap-1 text-[0.5rem] font-bold uppercase tracking-[0.25em]"
                  style={{ color: rarity.colorVar }}
                >
                  <span aria-hidden>{rarity.glyph}</span>
                  {rarity.label}
                </span>
                <span className="text-[0.44rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {duplicate ? "Duplicate" : card.limited ? `#${card.limited.edition}/${card.limited.total}` : series.label.replace("LORE // ", "")}
                </span>
              </div>
            </div>
          ) : null}

          <HolographicLayer speed={rarity.holoSpeed} intensity={rarity.intensity} active={revealed} />
        </div>
      </div>

      {/* edge glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[3px] transition-opacity duration-700"
        style={{
          opacity: revealed ? 0.55 + rarity.intensity * 0.45 : 0,
          boxShadow: `0 0 0 1px color-mix(in oklab, ${rarity.colorVar} 65%, transparent), 0 0 26px color-mix(in oklab, ${rarity.colorVar} 32%, transparent)`,
        }}
        aria-hidden
      />
    </div>
  );
});
