export type RarityId =
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary"
  | "mythic";

export interface RarityDefinition {
  id: RarityId;
  label: string;
  /** Weight in percent. Configurable, mirrors the Lua Config.Rarities table. */
  weight: number;
  /** Reveal duration in milliseconds. */
  revealDuration: number;
  /** Buildup / foreshadowing duration in milliseconds. */
  buildupDuration: number;
  /** CSS custom property holding the rarity colour. */
  colorVar: string;
  /** Glyph used so rarity is never communicated by colour alone. */
  glyph: string;
  /** 0-1 intensity driving glow, particles and environment reaction. */
  intensity: number;
  particles: number;
  holoSpeed: number;
}

export type SeriesId =
  | "origins"
  | "city"
  | "underworld"
  | "motorsport"
  | "authority"
  | "legends";

export type CardCategory =
  | "character"
  | "vehicle"
  | "location"
  | "business"
  | "police"
  | "ems"
  | "faction"
  | "item"
  | "landmark";

export interface CardDefinition {
  id: string;
  number: number;
  name: string;
  description: string;
  category: CardCategory;
  series: SeriesId;
  rarity: RarityId;
  artwork: string;
  limited?: { edition: number; total: number } | undefined;
  firstEdition?: boolean;
}

/** A card instance handed out by the (mock) server for one pack slot. */
export interface AwardedCard extends CardDefinition {
  instanceId: string;
  duplicate: boolean;
  collectionXp: number;
}

export interface SeriesDefinition {
  id: SeriesId;
  label: string;
  tagline: string;
}

export interface PackDefinition {
  id: string;
  label: string;
  series: SeriesId;
  size: number;
}

export type PackPhase =
  | "IDLE"
  | "OPENING"
  | "PACK_BREAK"
  | "CARD_ENTER"
  | "RARITY_BUILDUP"
  | "CARD_FLIP"
  | "CARD_REVEALED"
  | "CARD_INSPECT"
  | "NEXT_CARD"
  | "SUMMARY"
  | "CLOSING";

export interface OpenPackResult {
  packId: string;
  cards: AwardedCard[];
}

export type NuiEventName = "lore:open" | "lore:close" | "lore:packResult";

export interface NuiMessage<T = unknown> {
  action: NuiEventName;
  data: T;
}
