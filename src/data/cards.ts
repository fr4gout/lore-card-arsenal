import type { CardDefinition, SeriesDefinition, SeriesId } from "@/types/lore";

import apexGt from "@/assets/cards/apex-gt.jpg";
import cartographer from "@/assets/cards/cartographer.jpg";
import deadDrop from "@/assets/cards/dead-drop.jpg";
import eclipsePrototype from "@/assets/cards/eclipse-prototype.jpg";
import founder from "@/assets/cards/founder.jpg";
import harbourYard from "@/assets/cards/harbour-yard.jpg";
import neonTerminal from "@/assets/cards/neon-terminal.jpg";
import nightrunner from "@/assets/cards/nightrunner.jpg";
import nullSigil from "@/assets/cards/null-sigil.jpg";
import patrolUnit from "@/assets/cards/patrol-unit.jpg";
import responseMedic from "@/assets/cards/response-medic.jpg";
import signalTower from "@/assets/cards/signal-tower.jpg";
import theBroker from "@/assets/cards/the-broker.jpg";
import vantageHeights from "@/assets/cards/vantage-heights.jpg";

export const SERIES: Record<SeriesId, SeriesDefinition> = {
  origins: { id: "origins", label: "LORE // ORIGINS", tagline: "Where the city began" },
  city: { id: "city", label: "LORE // CITY", tagline: "Streets and skylines" },
  underworld: { id: "underworld", label: "LORE // UNDERWORLD", tagline: "Below the surface" },
  motorsport: { id: "motorsport", label: "LORE // MOTORSPORT", tagline: "Speed as currency" },
  authority: { id: "authority", label: "LORE // AUTHORITY", tagline: "Those who answer" },
  legends: { id: "legends", label: "LORE // LEGENDS", tagline: "Rarely seen, never forgotten" },
};

export const CARDS: CardDefinition[] = [
  {
    id: "harbour-yard",
    number: 3,
    name: "Harbour Yard",
    description: "Freight stacks and floodlight fog. Everything enters the city here first.",
    category: "location",
    series: "city",
    rarity: "common",
    artwork: harbourYard,
  },
  {
    id: "neon-terminal",
    number: 7,
    name: "Terminal Bar",
    description: "Open until the last train. Deals are struck two stools from the door.",
    category: "business",
    series: "city",
    rarity: "common",
    artwork: neonTerminal,
  },
  {
    id: "dead-drop",
    number: 11,
    name: "Dead Drop",
    description: "Sealed, tagged, and forgotten in the storm drains until someone pays.",
    category: "item",
    series: "underworld",
    rarity: "common",
    artwork: deadDrop,
  },
  {
    id: "vantage-heights",
    number: 18,
    name: "Vantage Heights",
    description: "The tallest residential spire on the east bank. Access is by invitation.",
    category: "landmark",
    series: "city",
    rarity: "uncommon",
    artwork: vantageHeights,
  },
  {
    id: "response-medic",
    number: 22,
    name: "Response Medic",
    description: "First on scene, last to leave. Keeps the ledger of the city honest.",
    category: "ems",
    series: "authority",
    rarity: "uncommon",
    artwork: responseMedic,
  },
  {
    id: "signal-tower",
    number: 26,
    name: "Relay Nine",
    description: "A dead broadcast mast that still answers when the fog rolls in.",
    category: "landmark",
    series: "origins",
    rarity: "uncommon",
    artwork: signalTower,
  },
  {
    id: "patrol-unit",
    number: 31,
    name: "Patrol Unit 09",
    description: "Night shift, east precinct. Runs the ring road until sunrise.",
    category: "police",
    series: "authority",
    rarity: "rare",
    artwork: patrolUnit,
  },
  {
    id: "apex-gt",
    number: 37,
    name: "Apex GT",
    description: "Track-bred, road-registered. Ten built, four still running.",
    category: "vehicle",
    series: "motorsport",
    rarity: "rare",
    artwork: apexGt,
  },
  {
    id: "the-broker",
    number: 44,
    name: "The Broker",
    description: "Sells nothing but knowledge, and never twice to the same buyer.",
    category: "character",
    series: "underworld",
    rarity: "epic",
    artwork: theBroker,
  },
  {
    id: "nightrunner",
    number: 51,
    name: "Nightrunner",
    description: "Tunnel-run champion three seasons straight. Plates change weekly.",
    category: "vehicle",
    series: "motorsport",
    rarity: "epic",
    artwork: nightrunner,
    limited: { edition: 24, total: 500 },
  },
  {
    id: "founder",
    number: 58,
    name: "The Founder",
    description: "Stood on the first rooftop and drew the lines the city still follows.",
    category: "character",
    series: "origins",
    rarity: "legendary",
    artwork: founder,
    firstEdition: true,
    limited: { edition: 24, total: 100 },
  },
  {
    id: "cartographer",
    number: 63,
    name: "The Cartographer",
    description: "Holds every street the city forgot, and a few it has not built yet.",
    category: "faction",
    series: "legends",
    rarity: "legendary",
    artwork: cartographer,
    limited: { edition: 9, total: 100 },
  },
  {
    id: "eclipse-prototype",
    number: 71,
    name: "Eclipse Prototype",
    description: "One chassis, no registration, and a hangar nobody admits to owning.",
    category: "vehicle",
    series: "legends",
    rarity: "mythic",
    artwork: eclipsePrototype,
    firstEdition: true,
    limited: { edition: 2, total: 25 },
  },
  {
    id: "null-sigil",
    number: 77,
    name: "Null Sigil",
    description: "Recovered intact. Nobody has explained what it is for.",
    category: "item",
    series: "legends",
    rarity: "mythic",
    artwork: nullSigil,
    limited: { edition: 1, total: 10 },
  },
];

export const CARDS_BY_RARITY = CARDS.reduce<Record<string, CardDefinition[]>>((acc, card) => {
  (acc[card.rarity] ??= []).push(card);
  return acc;
}, {});
