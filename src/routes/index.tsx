import { createFileRoute } from "@tanstack/react-router";
import { PackOpening } from "@/components/PackOpening/PackOpening";
import worldBackdrop from "@/assets/world-backdrop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LORE — Cinematic Card Pack Opening for FiveM" },
      {
        name: "description",
        content:
          "LORE is a cinematic collectible card pack opening interface: layered holographic cards, adaptive rarity reveals and a compact in-game overlay.",
      },
      { property: "og:title", content: "LORE — Cinematic Card Pack Opening" },
      {
        property: "og:description",
        content:
          "Open LORE packs with layered holographic cards, adaptive rarity reveals and a compact cinematic overlay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* stands in for the FiveM world behind the NUI */}
      <img
        src={worldBackdrop}
        alt=""
        width={1920}
        height={1080}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 65% at 50% 50%, transparent, oklch(0.06 0.012 267 / 0.75) 78%, oklch(0.05 0.01 267 / 0.92))",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[6vw]">
        <PackOpening />
      </div>
    </main>
  );
}
