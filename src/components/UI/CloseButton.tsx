interface CloseButtonProps {
  onClose: () => void;
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close (Esc)"
      className="flex h-8 w-8 items-center justify-center border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  );
}
