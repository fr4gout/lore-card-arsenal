/** Timing (ms) for the pack-open choreography. Phases 1-8. */
export const PACK_TIMINGS = {
  input: 120,
  focus: 420,
  energy: 520,
  tension: 620,
  split: 460,
  flash: 260,
  transition: 320,
  cardEnter: 460,
} as const;

export const CARD_TIMINGS = {
  enter: 460,
  flip: 620,
  settle: 320,
  summaryStagger: 110,
} as const;

export const EASING = {
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
  snap: "cubic-bezier(0.34, 1.4, 0.64, 1)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
