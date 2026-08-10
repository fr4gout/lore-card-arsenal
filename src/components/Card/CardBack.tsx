interface CardBackProps {
  seriesLabel?: string;
}

/** Original LORE reverse: concentric geometry, metal frame, technical marks. */
export function CardBack({ seriesLabel = "LORE // ORIGINS" }: CardBackProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-[3px]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, oklch(0.2 0.04 265), oklch(0.11 0.02 267) 60%, oklch(0.09 0.015 267))",
      }}
    >
      <div className="absolute inset-[3px] rounded-[2px] border border-[color-mix(in_oklab,var(--accent)_28%,transparent)]" />
      <div className="absolute inset-[9px] rounded-[2px] border border-[color-mix(in_oklab,var(--accent)_14%,transparent)]" />

      <svg
        viewBox="0 0 200 300"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="color-mix(in oklab, var(--accent) 40%, transparent)" strokeWidth="0.6">
          <circle cx="100" cy="150" r="62" />
          <circle cx="100" cy="150" r="48" strokeDasharray="3 6" />
          <circle cx="100" cy="150" r="34" />
          <circle cx="100" cy="150" r="76" strokeDasharray="1 9" />
          <path d="M100 74 L100 226 M24 150 L176 150" strokeDasharray="2 10" opacity="0.6" />
          <path d="M100 96 L146 150 L100 204 L54 150 Z" opacity="0.8" />
          <path d="M100 116 L130 150 L100 184 L70 150 Z" opacity="0.5" />
        </g>
        <g fill="color-mix(in oklab, var(--accent-bright) 70%, transparent)">
          <circle cx="100" cy="150" r="3.2" />
        </g>
      </svg>

      <div
        className="lore-anim-pulse absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)" }}
        aria-hidden
      />

      <div className="absolute inset-x-0 top-4 text-center">
        <span className="font-display text-[0.68rem] tracking-[0.55em] text-foreground/85">LORE</span>
      </div>
      <div className="absolute inset-x-0 bottom-4 text-center">
        <span className="text-[0.44rem] uppercase tracking-[0.4em] text-muted-foreground">
          {seriesLabel}
        </span>
      </div>
      <div className="absolute bottom-2 left-3 text-[0.36rem] uppercase tracking-[0.3em] text-muted-foreground/70">
        SEC-04 / AUTH
      </div>
      <div className="absolute bottom-2 right-3 text-[0.36rem] uppercase tracking-[0.3em] text-muted-foreground/70">
        LX-0091
      </div>
      <div className="lore-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" aria-hidden />
    </div>
  );
}
