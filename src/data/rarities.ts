import type { RarityDefinition, RarityId } from "@/types/lore";

/**
 * Mirrors shared/rarity.lua. Weights are percentages and are re-normalised at
 * roll time, so they can be tuned freely (server-authoritative in production).
 */
export const RARITIES: Record<RarityId, RarityDefinition> = {
  common: {
    id: "common",
    label: "Common",
    weight: 55,
    revealDuration: 800,
    buildupDuration: 350,
    colorVar: "var(--rarity-common)",
    glyph: "◦",
    intensity: 0.15,
    particles: 0,
    holoSpeed: 1,
  },
  uncommon: {
    id: "uncommon",
    label: "Uncommon",
    weight: 25,
    revealDuration: 1000,
    buildupDuration: 500,
    colorVar: "var(--rarity-uncommon)",
    glyph: "◇",
    intensity: 0.3,
    particles: 0,
    holoSpeed: 1.1,
  },
  rare: {
    id: "rare",
    label: "Rare",
    weight: 12,
    revealDuration: 1200,
    buildupDuration: 700,
    colorVar: "var(--rarity-rare)",
    glyph: "◈",
    intensity: 0.5,
    particles: 6,
    holoSpeed: 1.3,
  },
  epic: {
    id: "epic",
    label: "Epic",
    weight: 6,
    revealDuration: 1500,
    buildupDuration: 900,
    colorVar: "var(--rarity-epic)",
    glyph: "❖",
    intensity: 0.7,
    particles: 10,
    holoSpeed: 1.6,
  },
  legendary: {
    id: "legendary",
    label: "Legendary",
    weight: 1.8,
    revealDuration: 2000,
    buildupDuration: 1200,
    colorVar: "var(--rarity-legendary)",
    glyph: "✦",
    intensity: 0.85,
    particles: 14,
    holoSpeed: 1.9,
  },
  mythic: {
    id: "mythic",
    label: "Mythic",
    weight: 0.2,
    revealDuration: 2800,
    buildupDuration: 1900,
    colorVar: "var(--rarity-mythic)",
    glyph: "✧",
    intensity: 1,
    particles: 18,
    holoSpeed: 2.4,
  },
};

export const RARITY_ORDER: RarityId[] = [
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "mythic",
];

export const getRarity = (id: RarityId): RarityDefinition => RARITIES[id];
