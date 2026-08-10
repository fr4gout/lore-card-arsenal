import { useCallback, useEffect, useRef, useState } from "react";
import { Config } from "@/config/lore";
import { SOUND_PRESETS, type SoundId } from "@/config/audio";

/**
 * Fully synthesised audio — no external files, no network cost inside the NUI.
 * Each rarity has its own timbre so reveals are recognisable by ear.
 */
export function useSound() {
  const [enabled, setEnabled] = useState<boolean>(Config.EnableSound);
  const ctxRef = useRef<AudioContext | null>(null);

  const context = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ctxRef.current = new Ctor();
    }
    void ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const play = useCallback(
    (id: SoundId) => {
      if (!enabled) return;
      const ctx = context();
      if (!ctx) return;
      const preset = SOUND_PRESETS[id];
      const now = ctx.currentTime;

      preset.tones.forEach((tone) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = tone.cutoff ?? 6000;

        osc.type = tone.type;
        osc.frequency.setValueAtTime(tone.from, now + tone.delay);
        osc.frequency.exponentialRampToValueAtTime(
          Math.max(tone.to, 1),
          now + tone.delay + tone.duration,
        );

        gain.gain.setValueAtTime(0.0001, now + tone.delay);
        gain.gain.exponentialRampToValueAtTime(tone.gain, now + tone.delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + tone.delay + tone.duration);

        osc.connect(filter).connect(gain).connect(ctx.destination);
        osc.start(now + tone.delay);
        osc.stop(now + tone.delay + tone.duration + 0.05);
      });
    },
    [context, enabled],
  );

  useEffect(() => () => void ctxRef.current?.close(), []);

  return { play, enabled, setEnabled, toggle: () => setEnabled((value) => !value) };
}
