interface CardArtworkProps {
  src: string;
  name: string;
  priority?: boolean;
}

/**
 * Artwork is split into background / midground / foreground passes of the same
 * source so the tilt parallax has real depth without shipping layer files.
 */
export function CardArtwork({ src, name, priority = false }: CardArtworkProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={`${name} — original LORE collectible artwork`}
        width={640}
        height={960}
        {...(priority ? {} : { loading: "lazy" as const })}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.14] object-cover will-change-transform"
        style={{
          transform:
            "translate3d(calc((var(--mx, 0.5) - 0.5) * -10px), calc((var(--my, 0.5) - 0.5) * -10px), 0) scale(1.14)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 32%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 72%)",
          transform:
            "translate3d(calc((var(--mx, 0.5) - 0.5) * -18px), calc((var(--my, 0.5) - 0.5) * -18px), 0)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(to top, oklch(0.13 0.021 267 / 0.95), oklch(0.13 0.021 267 / 0.35) 55%, transparent)",
          transform: "translate3d(calc((var(--mx, 0.5) - 0.5) * -26px), 0, 0)",
        }}
        aria-hidden
      />
      <div className="lore-grain pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-overlay" aria-hidden />
    </div>
  );
}
