# LORE — Cinematic Card Pack Opening (NUI-style)

A premium, compact, cinematic pack-opening experience built as the app's home screen. Rewards come from a mocked "server" layer that mirrors the FiveM contract, so it can later be swapped for real NUI messages without touching the UI.

## What gets built

**Stage (not fullscreen)**
- Transparent outer space with a vignette; a single reveal stage at ~60vw / 70–85vh, biased slightly right.
- Behind it, a dimmed cinematic backdrop stands in for the GTA world so the compact-overlay feeling is visible in preview.

**Pack**
- Dark metallic wrapper with LORE branding, cyan edge illumination, holographic strip, grain, and depth.
- Idle: gentle float, very slow rotation, slow light sweep. No constant shaking.
- 8-phase open sequence: press → focus → energy → tension shake → wrapper split → flash → pack exit → card enters.

**Card**
- 2:3 layered renderer: outer shadow, frame, rarity border, artwork background/mid/foreground, holographic layer, light sweep, grain, info block, edge glow.
- Cursor-driven 3D tilt (5–8°) with parallax on artwork layers, holo reflection and specular highlight tracking the cursor.
- Original LORE card back: deep navy, metallic frame, concentric geometry, cyan linework, technical markings.

**Rarity**
- COMMON / UNCOMMON / RARE / EPIC / LEGENDARY / MYTHIC with configurable weights (55 / 25 / 12 / 6 / 1.8 / 0.2).
- Adaptive reveal durations (0.8s → 2.8s), foreshadowing before the flip, and environment reaction (ambient light tint around the stage only).
- Dedicated multi-beat Mythic sequence: light drop, float, holo acceleration, edge light, rotation, reveal, controlled impact, settle.

**Flow**
- State machine: IDLE → OPENING → PACK_BREAK → CARD_ENTER → RARITY_BUILDUP → CARD_FLIP → CARD_REVEALED → CARD_INSPECT → NEXT_CARD → SUMMARY → CLOSING. Invalid transitions blocked; controls disabled mid-animation.
- Progress dots + "CARD 03 / 05" indicator; pack size configurable (3/5/7/10).
- Compact summary: cards enter sequentially with name, rarity, number, duplicate and limited badges, then CONTINUE / VIEW COLLECTION.

**Audio & accessibility**
- Synthesized WebAudio cues (no external files) per event and per rarity, with a sound on/off toggle.
- ESC closes, ENTER/SPACE triggers the primary action, focus states, reduced-motion path that skips heavy motion, rarity communicated by label + icon not color alone.

**Artwork**
- 12–15 original LORE pieces generated in a cool cyan/dark cinematic direction across series: ORIGINS, CITY, UNDERWORLD, MOTORSPORT, AUTHORITY, LEGENDS. Parallax is applied via transform layers on top of each piece.
- Card data is data-driven with series, limited editions and numbering (`#024 / 100`).

## Technical notes

- Stack stays TanStack Start (React 19 + Vite + Tailwind v4). Home route `src/routes/index.tsx` renders the experience; no Lua files in this pass.
- Design tokens added to `src/styles.css`: `#060810` base, `#6BBFFF` / `#9DD8FF` accents, surface `rgba(14,18,36,0.78)`, border `rgba(107,191,255,0.22)`, epic `#9B7CFF`, legendary `#FFD76A`, mythic `#FF6B9D` — all as oklch semantic tokens, no hardcoded color utilities in components.
- Structure mirrors the requested module layout, adapted to `src/`:
  `components/{PackOpening,Pack,Card,Reveal,Rarity,Summary,Effects,Audio,UI}`, `hooks/{usePackOpening,useCardReveal,useCardTilt,useSound,useReducedMotion,useNuiEvent,useNuiCallback}`, `data/{cards,packs,rarities}`, `types/`, `config/{theme,animation,audio}`, `animations/`, `utils/`.
- `useNuiEvent` / `useNuiCallback` are real abstractions with a mock transport: reward generation lives in a single `rewards` module that performs weighted rolls, duplicate detection and cooldown — the UI never generates its own rewards, so replacing the transport with `SendNUIMessage` / `fetchNui` is a one-file change.
- Animations use transform/opacity only, `requestAnimationFrame` gated to active tilt, memoized card layers, next-card image preloading, and a hard cap on particles. No WebGL, no canvas loops, no fullscreen blur.
- Responsive via `clamp()`, `vw/vh` and `aspect-ratio` for 1280×720 → 2560×1440 without overflow or going fullscreen.
- Route `head()` gets LORE-specific title/description/og/twitter metadata.
