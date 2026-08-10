import { RarityParticles } from "./RarityParticles";

interface RarityEffectProps {
  color: string;
  intensity: number;
  particles: number;
  mythic?: boolean;
}

/**
 * Environment reaction. Everything stays concentrated around the card — no
 * fullscreen flashes, no backdrop-wide blur.
 */
export function RarityEffect({ color, intensity, particles, mythic = false }: RarityEffectProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-700"
        style={{
          opacity: intensity * 0.55,
          background: `radial-gradient(closest-side, color-mix(in oklab, ${color} 40%, transparent), transparent 72%)`,
          filter: "blur(28px)",
        }}
      />
      <div
        className="absolute inset-x-[12%] bottom-[6%] h-10 rounded-[50%] transition-opacity duration-700"
        style={{
          opacity: intensity * 0.6,
          background: `radial-gradient(closest-side, color-mix(in oklab, ${color} 55%, transparent), transparent 70%)`,
          filter: "blur(14px)",
        }}
      />
      {mythic ? (
        <div
          className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full lore-anim-pulse"
          style={{
            background:
              "conic-gradient(from 0deg, color-mix(in oklab, var(--rarity-mythic) 35%, transparent), transparent 30%, color-mix(in oklab, var(--accent) 35%, transparent) 60%, transparent 85%)",
            filter: "blur(42px)",
            opacity: intensity * 0.5,
          }}
        />
      ) : null}
      <RarityParticles count={particles} color={color} />
    </div>
  );
}
