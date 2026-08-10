interface PackButtonProps {
  onOpen: () => void;
  onHover: () => void;
  disabled: boolean;
  label?: string;
}

export function PackButton({ onOpen, onHover, disabled, label = "Open Pack" }: PackButtonProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerEnter={onHover}
      disabled={disabled}
      className="group relative inline-flex items-center gap-3 border px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-foreground transition-all duration-200 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-px active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-40"
      style={{
        borderColor: "var(--hairline)",
        background: "var(--surface)",
        boxShadow: "0 0 24px color-mix(in oklab, var(--accent) 12%, transparent)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rotate-45 transition-colors duration-200 group-hover:bg-accent-bright"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
      {label}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 14%, transparent), transparent)",
        }}
        aria-hidden
      />
    </button>
  );
}
