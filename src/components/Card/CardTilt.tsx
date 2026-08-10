import type { ReactNode } from "react";
import { useCardTilt } from "@/hooks/useCardTilt";

interface CardTiltProps {
  children: ReactNode;
  enabled?: boolean;
  className?: string;
  elevated?: boolean;
}

/** Perspective shell that converts pointer position into physical card motion. */
export function CardTilt({ children, enabled = true, className = "", elevated = false }: CardTiltProps) {
  const { ref, onPointerMove, onPointerLeave, interactive } = useCardTilt(enabled);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`lore-3d ${className}`}
      style={{
        transform:
          "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(calc(var(--tilt, 0) * 18px))",
        transition: interactive ? "transform 340ms cubic-bezier(0.16,1,0.3,1)" : "none",
        filter: elevated
          ? "drop-shadow(0 30px 45px oklch(0.05 0.02 267 / 0.75))"
          : "drop-shadow(0 18px 28px oklch(0.05 0.02 267 / 0.6))",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
