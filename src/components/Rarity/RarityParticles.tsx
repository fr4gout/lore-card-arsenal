import { useMemo } from "react";
import { Config } from "@/config/lore";

interface RarityParticlesProps {
  count: number;
  color: string;
}

/** Hard-capped, purely CSS-animated embers. No canvas, no rAF loop. */
export function RarityParticles({ count, color }: RarityParticlesProps) {
  const particles = useMemo(() => {
    const total = Config.EnableParticles ? Math.min(count, 18) : 0;
    return Array.from({ length: total }, (_, i) => ({
      id: i,
      left: 6 + Math.random() * 88,
      delay: Math.random() * 2.4,
      duration: 2.4 + Math.random() * 1.8,
      drift: `${(Math.random() - 0.5) * 40}px`,
      size: 1.5 + Math.random() * 2.5,
    }));
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 8px ${color}`,
            animation: `lore-ember ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
