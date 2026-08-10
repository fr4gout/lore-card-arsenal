import { memo } from "react";

interface PackVisualProps {
  /** Phase 2-4: focus, energy build, tension shake. */
  opening: boolean;
  /** Phase 5-7: wrapper split, flash, exit. */
  breaking: boolean;
  seriesLabel: string;
}

/** Premium 3D-style pack: metallic wrapper, holo strip, cyan edge illumination. */
export const PackVisual = memo(function PackVisual({ opening, breaking, seriesLabel }: PackVisualProps) {
  return (
    <div
      className="relative"
      style={{
        width: "clamp(150px, 15vw, 220px)",
        aspectRatio: "2 / 3",
        transform: breaking ? "scale(1.02)" : opening ? "scale(1.08)" : "scale(1)",
        opacity: breaking ? 0 : 1,
        transition: "transform 420ms cubic-bezier(0.16,1,0.3,1), opacity 320ms ease 420ms",
      }}
    >
      {/* energy field */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-full"
        style={{
          opacity: opening ? 1 : 0,
          transition: "opacity 520ms ease 420ms",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 26%, transparent), transparent 70%)",
          filter: "blur(24px)",
        }}
        aria-hidden
      />

      <div
        className={`lore-3d relative h-full w-full ${opening || breaking ? "" : "lore-anim-float"}`}
        style={
          opening
            ? { animation: "lore-shake 0.42s linear 1s infinite" }
            : undefined
        }
      >
        {/* wrapper halves */}
        {(["top", "bottom"] as const).map((half) => (
          <div
            key={half}
            className="absolute inset-x-0 overflow-hidden"
            style={{
              top: half === "top" ? 0 : "50%",
              height: "50%",
              transform: breaking
                ? half === "top"
                  ? "translate3d(0,-22%,0) rotate(-3deg)"
                  : "translate3d(0,22%,0) rotate(3deg)"
                : "none",
              transition: "transform 460ms cubic-bezier(0.16,1,0.3,1)",
              borderTopLeftRadius: half === "top" ? 4 : 0,
              borderTopRightRadius: half === "top" ? 4 : 0,
              borderBottomLeftRadius: half === "bottom" ? 4 : 0,
              borderBottomRightRadius: half === "bottom" ? 4 : 0,
              background:
                "linear-gradient(145deg, oklch(0.24 0.03 265) 0%, oklch(0.12 0.02 267) 42%, oklch(0.2 0.028 264) 68%, oklch(0.1 0.018 267) 100%)",
              boxShadow:
                "inset 0 0 0 1px color-mix(in oklab, var(--accent) 26%, transparent), inset 0 0 40px oklch(0.06 0.01 267 / 0.9)",
            }}
          >
            {half === "top" ? (
              <>
                <div className="absolute inset-x-0 top-[18%] text-center">
                  <div className="font-display text-[clamp(0.85rem,1.3vw,1.2rem)] tracking-[0.5em] text-foreground">
                    LORE
                  </div>
                  <div className="mt-1 text-[0.45rem] uppercase tracking-[0.35em] text-muted-foreground">
                    {seriesLabel}
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 h-3"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--accent) 60%, transparent), color-mix(in oklab, var(--rarity-epic) 55%, transparent), color-mix(in oklab, var(--accent-bright) 60%, transparent))",
                    opacity: 0.7,
                  }}
                />
              </>
            ) : (
              <div className="absolute inset-x-6 bottom-[16%] space-y-1.5" aria-hidden>
                <div className="h-px bg-[color-mix(in_oklab,var(--accent)_30%,transparent)]" />
                <div className="h-px w-2/3 bg-[color-mix(in_oklab,var(--accent)_18%,transparent)]" />
                <div className="h-px w-1/3 bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]" />
              </div>
            )}
            <div className="lore-grain absolute inset-0 opacity-[0.14] mix-blend-overlay" aria-hidden />
          </div>
        ))}

        {/* light sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]" aria-hidden>
          <div
            className="lore-anim-sweep absolute -inset-y-1/2 left-0 w-1/4 opacity-30"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
          />
        </div>

        {/* edge illumination */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[4px]"
          style={{
            boxShadow:
              "0 0 0 1px color-mix(in oklab, var(--accent) 40%, transparent), 0 0 32px color-mix(in oklab, var(--accent) 22%, transparent)",
          }}
          aria-hidden
        />
      </div>

      {/* cinematic flash */}
      {breaking ? (
        <div
          className="lore-anim-flash pointer-events-none absolute -inset-16 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--accent-bright) 70%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
      ) : null}
    </div>
  );
});
