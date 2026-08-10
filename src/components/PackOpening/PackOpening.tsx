import { useCallback, useEffect, useState } from "react";
import { PackButton } from "@/components/Pack/PackButton";
import { PackVisual } from "@/components/Pack/PackVisual";
import { RevealSequence } from "@/components/Reveal/RevealSequence";
import { PackSummary } from "@/components/Summary/PackSummary";
import { SoundController } from "@/components/Audio/SoundController";
import { CloseButton } from "@/components/UI/CloseButton";
import { LoreCard } from "@/components/Card/LoreCard";
import { CARDS, SERIES } from "@/data/cards";
import { DEFAULT_PACK } from "@/data/packs";
import { usePackOpening } from "@/hooks/usePackOpening";
import { useSound } from "@/hooks/useSound";

/** Root controller for the LORE acquisition experience. */
export function PackOpening() {
  const { play, enabled, toggle } = useSound();
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const { phase, cards, index, error, busy, start, next, skip, reset } = usePackOpening({
    packId: DEFAULT_PACK.id,
    size: DEFAULT_PACK.size,
    play,
  });

  const close = useCallback(() => {
    play("close");
    setCollectionOpen(false);
    reset();
    setClosed(true);
  }, [play, reset]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (collectionOpen) setCollectionOpen(false);
        else close();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        if (busy) return;
        event.preventDefault();
        if (phase === "IDLE") void start();
        else if (phase === "CARD_INSPECT") next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [busy, close, collectionOpen, next, phase, start]);

  if (closed) {
    return (
      <div className="pointer-events-auto flex h-full items-center justify-center">
        <button
          type="button"
          onClick={() => setClosed(false)}
          className="border px-7 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-foreground transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
        >
          Open LORE Terminal
        </button>
      </div>
    );
  }

  const opening = phase === "OPENING";
  const breaking = phase === "PACK_BREAK";
  const showPack = phase === "IDLE" || opening || breaking;
  const showReveal = !showPack && phase !== "SUMMARY" && phase !== "CLOSING";

  return (
    <section
      aria-label="LORE card acquisition"
      className="pointer-events-auto relative flex flex-col"
      style={{
        width: "min(60vw, 1080px)",
        height: "clamp(70vh, 78vh, 85vh)",
        minWidth: 640,
      }}
    >
      {/* controlled atmosphere — no website-style panel */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, oklch(0.13 0.021 267 / 0.82), oklch(0.09 0.015 267 / 0.55) 60%, transparent 78%)",
        }}
        aria-hidden
      />

      <header className="flex items-start justify-between px-6 pt-5">
        <div>
          <h1 className="font-display text-[clamp(1rem,1.5vw,1.35rem)] tracking-[0.5em] text-foreground">
            LORE
          </h1>
          <p className="mt-1 text-[0.5rem] uppercase tracking-[0.42em] text-muted-foreground">
            Card Acquisition · {SERIES[DEFAULT_PACK.series].label}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SoundController enabled={enabled} onToggle={toggle} />
          <CloseButton onClose={close} />
        </div>
      </header>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-6">
        {showPack ? (
          <div className="flex flex-col items-center gap-10">
            <PackVisual
              opening={opening}
              breaking={breaking}
              seriesLabel={SERIES[DEFAULT_PACK.series].label.replace("LORE // ", "")}
            />
            <div className="flex flex-col items-center gap-3">
              <PackButton
                onOpen={() => void start()}
                onHover={() => play("pack-hover")}
                disabled={phase !== "IDLE"}
              />
              <p className="text-[0.5rem] uppercase tracking-[0.36em] text-muted-foreground">
                {DEFAULT_PACK.size} Cards · Server Authorised
              </p>
              {error ? (
                <p className="text-[0.5rem] uppercase tracking-[0.3em] text-destructive">
                  {error === "COOLDOWN" ? "Cooling down" : error === "NO_PACK_OWNED" ? "No packs owned" : "Request failed"}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {showReveal ? (
          <RevealSequence cards={cards} index={index} phase={phase} onNext={next} onSkip={skip} />
        ) : null}

        {phase === "SUMMARY" ? (
          <PackSummary
            cards={cards}
            onContinue={close}
            onViewCollection={() => setCollectionOpen(true)}
          />
        ) : null}

        {collectionOpen ? (
          <div
            className="absolute inset-0 z-10 flex flex-col gap-4 overflow-y-auto p-6"
            style={{ background: "var(--surface-strong)" }}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[0.9rem] tracking-[0.42em] text-foreground">COLLECTION</h2>
              <button
                type="button"
                onClick={() => setCollectionOpen(false)}
                className="border px-4 py-1.5 text-[0.55rem] uppercase tracking-[0.3em] text-foreground hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderColor: "var(--hairline)" }}
              >
                Back
              </button>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-3">
              {CARDS.map((card) => (
                <li key={card.id} className="relative" style={{ aspectRatio: "2 / 3" }}>
                  <LoreCard card={card} compact revealed={false} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
