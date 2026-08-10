interface HolographicLayerProps {
  speed: number;
  intensity: number;
  active: boolean;
}

/**
 * Dynamic foil. Three stacked gradients driven by the tilt custom properties
 * (--mx / --my / --tilt) so the sheen tracks the cursor and the card angle.
 */
export function HolographicLayer({ speed, intensity, active }: HolographicLayerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 mix-blend-color-dodge transition-opacity duration-500"
        style={{
          opacity: active ? 0.28 + intensity * 0.34 : 0,
          backgroundImage:
            "linear-gradient(115deg, transparent 18%, color-mix(in oklab, var(--accent-bright) 70%, transparent) 34%, transparent 44%, color-mix(in oklab, var(--rarity-epic) 60%, transparent) 58%, transparent 70%, color-mix(in oklab, var(--rarity-mythic) 55%, transparent) 82%, transparent 92%)",
          backgroundSize: "260% 260%",
          backgroundPosition: "calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          opacity: active ? 0.5 : 0,
          backgroundImage:
            "repeating-linear-gradient(103deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0) 3px, rgba(255,255,255,0.1) 6px)",
          backgroundPosition: "calc(var(--mx, 0.5) * 60%) 0",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: active ? 0.45 * (0.35 + Number(intensity)) : 0,
          background:
            "radial-gradient(38% 30% at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%), rgba(255,255,255,0.55), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {active ? (
        <div
          className="lore-anim-sweep absolute -inset-y-1/2 left-0 w-1/3 opacity-40"
          style={{
            animationDuration: `${5.5 / speed}s`,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            mixBlendMode: "screen",
          }}
        />
      ) : null}
    </div>
  );
}
