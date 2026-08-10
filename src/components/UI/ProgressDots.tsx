interface ProgressDotsProps {
  total: number;
  index: number;
}

export function ProgressDots({ total, index }: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-2" role="status" aria-label={`Card ${index + 1} of ${total}`}>
      {Array.from({ length: total }, (_, i) => {
        const state = i === index ? "current" : i < index ? "done" : "todo";
        return (
          <span
            key={i}
            className="block rounded-full transition-all duration-300"
            style={{
              width: state === "current" ? 9 : 5,
              height: state === "current" ? 9 : 5,
              background:
                state === "current"
                  ? "var(--accent-bright)"
                  : state === "done"
                    ? "color-mix(in oklab, var(--accent) 55%, transparent)"
                    : "color-mix(in oklab, var(--muted-foreground) 45%, transparent)",
              boxShadow: state === "current" ? "0 0 12px var(--accent)" : "none",
            }}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
