import { Config } from "@/config/lore";
import type { PackDefinition } from "@/types/lore";

export const PACKS: PackDefinition[] = [
  { id: "origins-standard", label: "Origins Pack", series: "origins", size: Config.PackSize },
  { id: "origins-trio", label: "Origins Trio", series: "origins", size: 3 },
  { id: "origins-vault", label: "Origins Vault", series: "origins", size: 10 },
];

export const DEFAULT_PACK = PACKS[0]!;
