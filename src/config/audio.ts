export type SoundId =
  | "pack-hover"
  | "pack-click"
  | "pack-open"
  | "card-enter"
  | "card-flip"
  | "card-reveal"
  | "rare-reveal"
  | "epic-reveal"
  | "legendary-reveal"
  | "mythic-reveal"
  | "summary"
  | "close";

export interface Tone {
  type: OscillatorType;
  from: number;
  to: number;
  duration: number;
  delay: number;
  gain: number;
  cutoff?: number;
}

const tone = (
  type: OscillatorType,
  from: number,
  to: number,
  duration: number,
  delay = 0,
  gain = 0.06,
  cutoff?: number,
): Tone => ({ type, from, to, duration, delay, gain, ...(cutoff ? { cutoff } : {}) });

export const SOUND_PRESETS: Record<SoundId, { tones: Tone[] }> = {
  "pack-hover": { tones: [tone("sine", 880, 1200, 0.09, 0, 0.025)] },
  "pack-click": { tones: [tone("triangle", 420, 180, 0.14, 0, 0.07)] },
  "pack-open": {
    tones: [
      tone("sawtooth", 90, 420, 0.7, 0, 0.05, 1800),
      tone("sine", 1400, 300, 0.5, 0.35, 0.05),
    ],
  },
  "card-enter": { tones: [tone("sine", 300, 620, 0.22, 0, 0.04)] },
  "card-flip": { tones: [tone("triangle", 720, 340, 0.16, 0, 0.05)] },
  "card-reveal": { tones: [tone("sine", 520, 780, 0.3, 0, 0.045)] },
  "rare-reveal": {
    tones: [tone("sine", 660, 990, 0.42, 0, 0.05), tone("sine", 990, 1320, 0.36, 0.12, 0.035)],
  },
  "epic-reveal": {
    tones: [
      tone("triangle", 440, 880, 0.5, 0, 0.055),
      tone("sine", 1320, 1760, 0.44, 0.14, 0.035),
    ],
  },
  "legendary-reveal": {
    tones: [
      tone("sawtooth", 220, 660, 0.75, 0, 0.05, 2400),
      tone("sine", 880, 1320, 0.6, 0.18, 0.045),
      tone("sine", 1760, 2200, 0.5, 0.34, 0.03),
    ],
  },
  "mythic-reveal": {
    tones: [
      tone("sine", 60, 180, 1.4, 0, 0.06, 900),
      tone("sawtooth", 330, 990, 1.1, 0.25, 0.045, 3200),
      tone("sine", 1320, 2640, 0.9, 0.6, 0.04),
      tone("sine", 2640, 1320, 0.8, 1.0, 0.025),
    ],
  },
  summary: { tones: [tone("sine", 520, 1040, 0.5, 0, 0.04)] },
  close: { tones: [tone("sine", 640, 220, 0.2, 0, 0.04)] },
};
