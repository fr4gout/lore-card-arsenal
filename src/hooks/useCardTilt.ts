import { useCallback, useEffect, useRef } from "react";
import { Config } from "@/config/lore";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Cursor-driven 3D tilt. Writes CSS custom properties straight to the node via
 * a single rAF frame so React never re-renders while the pointer moves.
 *
 * --rx / --ry : rotation in degrees
 * --mx / --my : normalised pointer position (0-1) for holo + parallax layers
 * --tilt      : 0-1 engagement used to fade specular highlights in
 */
export function useCardTilt(enabled = true) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const target = useRef({ rx: 0, ry: 0, mx: 0.5, my: 0.5, tilt: 0 });
  const reduced = useReducedMotion();
  const active = enabled && !reduced;

  const write = useCallback(() => {
    frame.current = null;
    const node = ref.current;
    if (!node) return;
    const { rx, ry, mx, my, tilt } = target.current;
    node.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    node.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    node.style.setProperty("--mx", mx.toFixed(3));
    node.style.setProperty("--my", my.toFixed(3));
    node.style.setProperty("--tilt", tilt.toFixed(2));
  }, []);

  const schedule = useCallback(() => {
    if (frame.current === null) frame.current = requestAnimationFrame(write);
  }, [write]);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!active) return;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const mx = (event.clientX - rect.left) / rect.width;
      const my = (event.clientY - rect.top) / rect.height;
      const max = Config.MaxTilt;
      target.current = {
        mx: Math.min(Math.max(mx, 0), 1),
        my: Math.min(Math.max(my, 0), 1),
        ry: (mx - 0.5) * 2 * max,
        rx: -(my - 0.5) * 2 * max,
        tilt: 1,
      };
      schedule();
    },
    [active, schedule],
  );

  const onPointerLeave = useCallback(() => {
    target.current = { rx: 0, ry: 0, mx: 0.5, my: 0.5, tilt: 0 };
    schedule();
  }, [schedule]);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return { ref, onPointerMove, onPointerLeave, interactive: active };
}
