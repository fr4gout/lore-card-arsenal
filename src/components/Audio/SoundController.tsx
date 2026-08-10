interface SoundControllerProps {
  enabled: boolean;
  onToggle: () => void;
}

export function SoundController({ enabled, onToggle }: SoundControllerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Sound on" : "Sound off"}
      className="flex h-8 items-center gap-2 border px-3 text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: enabled ? "var(--accent-bright)" : "color-mix(in oklab, var(--muted-foreground) 60%, transparent)",
          boxShadow: enabled ? "0 0 10px var(--accent)" : "none",
        }}
        aria-hidden
      />
      {enabled ? "Sound On" : "Sound Off"}
    </button>
  );
}
