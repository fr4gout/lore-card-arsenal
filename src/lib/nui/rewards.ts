import { Config } from "@/config/lore";
import { CARDS, CARDS_BY_RARITY } from "@/data/cards";
import { RARITY_ORDER } from "@/data/rarities";
import type { AwardedCard, OpenPackResult, RarityId } from "@/types/lore";

/**
 * Authoritative reward generation. In the FiveM build this file's logic lives
 * in server/rewards.lua — the NUI never rolls its own cards, it only renders
 * what this layer hands back. Ownership, cooldown and claim state are checked
 * here, not in React.
 */

const owned = new Set<string>();
let lastOpenAt = 0;
let openSequence = 0;
let packsAvailable = 12;

function rollRarity(): RarityId {
  const weights = Config.Rarities;
  const total = RARITY_ORDER.reduce((sum, id) => sum + weights[id], 0);
  let roll = Math.random() * total;
  for (const id of RARITY_ORDER) {
    roll -= weights[id];
    if (roll <= 0) return id;
  }
  return "common";
}

function pickCard(rarity: RarityId) {
  const pool = CARDS_BY_RARITY[rarity] ?? CARDS;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

function xpFor(rarity: RarityId, duplicate: boolean): number {
  const base: Record<RarityId, number> = {
    common: 10,
    uncommon: 25,
    rare: 60,
    epic: 150,
    legendary: 450,
    mythic: 1200,
  };
  return duplicate ? Math.round(base[rarity] * 0.35) : base[rarity];
}

export interface OpenPackRequest {
  packId: string;
  size?: number;
}

export type OpenPackResponse =
  | { ok: true; result: OpenPackResult }
  | { ok: false; error: string };

export function openPack({ packId, size }: OpenPackRequest): OpenPackResponse {
  const now = Date.now();
  if (now - lastOpenAt < Config.OpenCooldown) {
    return { ok: false, error: "COOLDOWN" };
  }
  if (packsAvailable <= 0) {
    return { ok: false, error: "NO_PACK_OWNED" };
  }
  lastOpenAt = now;
  packsAvailable -= 1;
  openSequence += 1;

  const count = size ?? Config.PackSize;
  const cards: AwardedCard[] = [];

  for (let slot = 0; slot < count; slot += 1) {
    const rarity = rollRarity();
    const definition = pickCard(rarity);
    const duplicate = owned.has(definition.id);
    owned.add(definition.id);
    cards.push({
      ...definition,
      instanceId: `${openSequence}-${slot}-${definition.id}`,
      duplicate,
      collectionXp: xpFor(rarity, duplicate),
    });
  }

  return { ok: true, result: { packId, cards } };
}

export const getPacksAvailable = () => packsAvailable;
export const getOwnedCount = () => owned.size;
export const getCollectionSize = () => CARDS.length;
