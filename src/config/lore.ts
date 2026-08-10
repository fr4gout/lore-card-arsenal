import type { RarityId } from "@/types/lore";

/** Mirrors shared/config.lua — everything important is tunable here. */
export const Config = {
  PackSize: 5,
  OpenCooldown: 1000,
  EnableSound: true,
  EnableParticles: true,
  ShowCollectionXp: true,
  MaxTilt: 7,
  Rarities: {
    common: 55,
    uncommon: 25,
    rare: 12,
    epic: 6,
    legendary: 1.8,
    mythic: 0.2,
  } satisfies Record<RarityId, number>,
} as const;

export type LoreConfig = typeof Config;
