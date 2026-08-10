# Lore Cards

LORE — NEXT-GEN CINEMATIC FIVE-M CARD PACK SYSTEM

Advanced AAA-Style Collectible Card Opening NUI

Build a complete, production-ready FiveM NUI collectible card pack opening system called LORE.

This is NOT a basic card UI.

Create a highly polished, cinematic, interactive collectible experience inspired by the excitement and suspense of premium card-pack opening games, but with a completely ORIGINAL visual identity designed specifically for a modern GTA/FiveM roleplay server.

The final experience should feel like a combination of:

AAA game reward reveal + luxury collectible card system + futuristic FiveM NUI + cinematic holographic interface.

Do NOT use Pokémon assets, Pokémon characters, Pokémon logos, Pokémon terminology, Poké Balls, copyrighted artwork, copied trading-card layouts, or recognizable Pokémon visual design.

Everything must be original.

01 — TECHNOLOGY

Use:

React

TypeScript

Tailwind CSS

Vite

FiveM NUI

Lua Client

Lua Server

Use a clean production-ready architecture.

Use:

React functional components

strict TypeScript

reusable components

custom hooks

centralized configuration

data-driven card system

server-authoritative rewards

NUI event abstraction

NUI callback abstraction

optimized animations

Do not create a giant monolithic React component.

02 — CORE DESIGN PHILOSOPHY

The system must NOT feel like a website.

It must feel like an actual in-game reward experience.

The GTA/FiveM world remains visible behind the interface.

The interface should feel like a premium cinematic layer placed over gameplay.

Primary priorities:

Cinematic presentation

Card quality

Animation quality

Rarity suspense

Physical card feeling

Performance

Minimal UI

Premium interaction

Server security

Replayability

The card is the hero.

03 — NUI SIZE

DO NOT make the interface fullscreen.

Target approximately:

60vw width
70–85vh height


Use a slight right-side bias while maintaining visual balance.

The GTA world should remain visible around the interface.

Do NOT create a large website-style background panel.

Use:

transparent outer space

subtle vignette

controlled backdrop atmosphere

central reveal stage

The player should never feel like they left the FiveM world.

04 — ADVANCED VISUAL IDENTITY

Create a premium futuristic visual system.

Style:

cinematic

dark

sophisticated

futuristic

luxurious

collectible

technological

mysterious

AAA game-inspired

Avoid:

childish visuals

cartoon styling

generic gaming UI

excessive glassmorphism

excessive rounded cards

excessive neon

generic AI dashboard aesthetics

mobile gacha-game styling

Use sharp geometry with subtle corner rounding.

05 — COLOR SYSTEM

Primary:

#060810

Primary accent:

#6BBFFF

Bright cyan:

#9DD8FF

Primary text:

#FFFFFF

Secondary text:

#8792A8

Surface:

rgba(14,18,36,0.78)

Border:

rgba(107,191,255,0.22)

Epic:

#9B7CFF

Legendary:

#FFD76A

Mythic:

#FF6B9D

The base environment should remain cool.

Avoid warm color grading unless specifically required by the artwork.

06 — ADVANCED REVEAL STAGE

Create a dedicated cinematic reveal stage.

Concept:

                LORE
          CARD ACQUISITION

              ╱──────╲
             │        │
             │  CARD  │
             │        │
              ╲──────╱

          ●  ●  ◉  ●  ●

          CARD 03 / 05


The reveal stage should include:

card

ambient lighting

holographic atmosphere

subtle particles

rarity effects

progress indicators

minimal controls

Do not clutter the stage.

07 — ADVANCED PACK SYSTEM

The pack should be a premium 3D-style visual.

Pack appearance:

dark metallic wrapper

LORE branding

cyan edge illumination

holographic strip

technical geometry

realistic reflective material

subtle surface grain

premium depth

Idle behavior:

gentle floating

very slow rotation

subtle light sweep

ambient glow

Do NOT continuously shake.

08 — PACK OPENING SEQUENCE

When the player clicks OPEN PACK:

PHASE 1 — INPUT

Button presses slightly.

PHASE 2 — FOCUS

Pack scales up.

PHASE 3 — ENERGY

A subtle energy field begins.

PHASE 4 — TENSION

Pack performs a controlled shake.

PHASE 5 — OPEN

Wrapper splits.

PHASE 6 — LIGHT

Short cinematic flash.

PHASE 7 — TRANSITION

Pack disappears.

PHASE 8 — CARD

Card back enters.

Use smooth cinematic timing.

Avoid giant explosions.

09 — ADVANCED CARD SYSTEM

Cards must feel like physical premium collectibles.

Use:

perspective

depth

3D rotation

parallax

holographic layers

metallic frame

edge illumination

reflective surface

dynamic shadow

artwork depth

Use approximately:

2:3 aspect ratio


10 — MULTI-LAYER CARD ARCHITECTURE

Do NOT treat the card as a single flat image.

Create layered card rendering:

CARD
│
├── OuterShadow
├── OuterFrame
├── RarityBorder
├── ArtworkBackground
├── ArtworkMidground
├── ArtworkForeground
├── HolographicLayer
├── LightSweep
├── GrainLayer
├── CardInformation
└── EdgeGlow


If artwork layers are available, use them for parallax.

The artwork should move slightly differently from the foreground.

11 — CARD STRUCTURE

Use:

┌────────────────────────────┐
│ LORE                #024   │
│                            │
│                            │
│        CARD ART            │
│                            │
│                            │
│                            │
├────────────────────────────┤
│ CARD NAME                  │
│                            │
│ Short description          │
│                            │
│ RARE              LIMITED  │
└────────────────────────────┘


The artwork must occupy most of the card.

Typography should remain secondary.

12 — CARD BACK

Create an original LORE card back.

Design:

deep navy black

metallic outer frame

centered LORE emblem

concentric geometry

cyan linework

subtle holographic center

tiny technical markings

premium texture

No copyrighted branding.

The card back should look valuable before the reveal.

13 — 3D CARD TILT

After the card is revealed, enable interactive tilt.

Track cursor position.

Convert cursor movement into:

rotateX
rotateY
translateZ


Maximum rotation:

approximately 5–8 degrees.

Also move:

holographic reflection

light sweep

artwork parallax

The card should feel physical.

Do not exaggerate the effect.

14 — ADVANCED HOLOGRAPHIC SYSTEM

Create a dynamic holographic layer.

The holographic effect should react to:

card rotation

cursor position

rarity

reveal progress

Use layered gradients.

Example:

Artwork
+
Holographic gradient
+
Specular highlight
+
Light sweep
+
Noise
+
Edge glow


Use CSS wherever possible.

Avoid heavy WebGL.

15 — RARITY SYSTEM

Create:

COMMON
UNCOMMON
RARE
EPIC
LEGENDARY
MYTHIC


Example probabilities:

COMMON       55%
UNCOMMON     25%
RARE         12%
EPIC          6%
LEGENDARY     1.8%
MYTHIC        0.2%


Make these configurable server-side.

16 — RARITY VISUAL LANGUAGE

COMMON

minimal frame

subtle white/cyan pulse

simple reveal

UNCOMMON

metallic edge

slight reflective animation

RARE

cyan holographic sweep

brighter edge light

EPIC

purple holographic energy

stronger ambient glow

controlled particles

LEGENDARY

gold lighting

cinematic impact

stronger card elevation

premium sound

MYTHIC

unique signature treatment

cyan + magenta atmosphere

holographic distortion

edge illumination

controlled particles

cinematic flash

unique audio

extended reveal sequence

Effects remain concentrated around the card.

17 — ADAPTIVE RARITY REVEAL

Do NOT reveal every card with the same animation.

The reveal duration and intensity must depend on rarity.

Example:

COMMON
0.8 sec

UNCOMMON
1.0 sec

RARE
1.2 sec

EPIC
1.5 sec

LEGENDARY
2.0 sec

MYTHIC
2.8 sec


The system should create suspense.

The player should feel that something valuable is happening before the rarity is fully revealed.

18 — RARITY FORESHADOWING

Before the card flips, give subtle hints about rarity.

For example:

COMMON:

almost no environmental change.

RARE:

small cyan light appears.

EPIC:

purple glow begins.

LEGENDARY:

gold edge starts appearing.

MYTHIC:

strong but controlled atmospheric distortion.

The player should be able to think:

"Wait... this might be something rare."

Do not reveal the exact rarity too early.

19 — DYNAMIC ENVIRONMENT

The environment reacts to rarity.

COMMON:

minimal reaction.

UNCOMMON:

small light pulse.

RARE:

cyan ambient light.

EPIC:

purple atmosphere.

LEGENDARY:

gold ambient lighting.

MYTHIC:

cyan + magenta atmospheric energy.

The environment must remain subtle.

Do NOT create a fullscreen explosion.

20 — MYTHIC REVEAL SEQUENCE

For Mythic cards, create a special sequence:

NORMAL ENVIRONMENT
        ↓
AMBIENT LIGHT DECREASES
        ↓
CARD FLOATS
        ↓
HOLOGRAPHIC SPEED INCREASES
        ↓
EDGE LIGHT APPEARS
        ↓
CARD ROTATES
        ↓
ARTWORK REVEALS
        ↓
MYTHIC REVEAL
        ↓
CONTROLLED CINEMATIC IMPACT
        ↓
LIGHT SETTLES
        ↓
CARD FLOATS IN FINAL STATE


Make Mythic genuinely feel different.

21 — CARD ARTWORK SYSTEM

Every card must use original artwork.

Potential card categories:

characters

vehicles

rare vehicles

locations

businesses

police

EMS

factions

achievements

events

items

landmarks

server lore

Each category should have a distinct art direction while remaining part of the same LORE universe.

22 — CARD ART GENERATION PROMPT

For every artwork, generate:

Create premium original collectible-card artwork for a fictional futuristic roleplay universe called LORE.

Subject:
[INSERT SUBJECT]

Create cinematic AAA-quality game concept art.

Style:

cinematic realism,
premium collectible artwork,
realistic materials,
dramatic environmental lighting,
deep shadows,
cool cyan atmosphere,
dark futuristic environment,
subtle holographic technology,
high detail,
strong depth,
professional composition,
luxury game-art aesthetic.

Color palette:

#060810
#6BBFFF
#9DD8FF

Keep the environment cool and cinematic.

Avoid excessive orange, yellow, or warm color grading.

Create strong foreground, midground, and background separation.

Make the subject the visual hero.

Use a vertical 2:3 composition.

Leave enough negative space for the LORE card frame.

Do not include:

Pokémon
Pokémon characters
Pokémon logos
Poké Balls
existing trading card logos
copyrighted characters
copied card designs
watermarks
random typography

Create completely original artwork.


23 — ARTWORK PARALLAX

If artwork supports multiple layers, create:

Background
Midground
Character/Vehicle
Foreground
Atmosphere


Move each layer at a different intensity during card tilt.

Example:

Background:
1x

Midground:
1.5x

Subject:
2x

Foreground:
3x

Keep movement subtle.

24 — CARD INTERACTION

After reveal:

Mouse movement:

card tilts

artwork shifts

holographic layer moves

highlight follows cursor

Mouse leaves:

card smoothly returns to neutral.

Add subtle hover information:

rarity

card number

limited edition

Do not add unnecessary popups.

25 — PACK CONTENT

Default:

5 cards per pack.

Make configurable.

Support future:

3 cards
5 cards
7 cards
10 cards

Do not hard-code five cards into the architecture.

26 — COLLECTION SUMMARY

After all cards:

PACK OPENED

[ CARD ] [ CARD ] [ CARD ] [ CARD ] [ CARD ]

5 CARDS ACQUIRED


Cards enter sequentially.

Show:

card name

rarity

number

duplicate status

limited status

Buttons:

CONTINUE

VIEW COLLECTION

Keep the summary compact.

27 — DUPLICATE SYSTEM

Support duplicate cards.

Display a small:

DUPLICATE

badge.

Optionally show:

VALUE

or

COLLECTION XP

Keep this configurable.

Do not implement economic rewards in React.

28 — CARD SERIES

Support card series.

Example:

LORE // ORIGINS
LORE // CITY
LORE // UNDERWORLD
LORE // MOTORSPORT
LORE // AUTHORITY
LORE // LEGENDS
LORE // EVENTS


Each series can have:

unique card backs

unique border treatment

unique artwork direction

unique pack design

Maintain the same overall LORE brand.

29 — LIMITED EDITIONS

Support:

LIMITED

Holographic

Numbered

First Edition

Special Event

Example:

LIMITED
#024 / 100


Make special editions visually distinct but not cluttered.

30 — AUDIO

Create a complete audio system.

Sounds:

pack-hover
pack-click
pack-open
card-enter
card-flip
card-reveal
rare-reveal
epic-reveal
legendary-reveal
mythic-reveal
summary
close

Each rarity gets its own sound identity.

Add:

SOUND ON/OFF

Respect reduced motion/accessibility preferences.

31 — NUI COMMUNICATION

Architecture:

FiveM Server
      ↓
Reward Generation
      ↓
FiveM Client
      ↓
SendNUIMessage
      ↓
React
      ↓
PackOpening
      ↓
RevealSequence
      ↓
LoreCard


Callbacks:

React
 ↓
NUI Callback
 ↓
Lua Client
 ↓
Lua Server


The client MUST NOT generate rewards.

32 — SERVER SECURITY

Server must validate:

player

pack ownership

opening request

cooldown

reward generation

duplicate state

claim state

Prevent:

duplicate reward requests

callback replay

client-side reward injection

manipulated rarity

manipulated card IDs

opening packs without ownership

Never trust the NUI.

33 — PROJECT STRUCTURE

Use:

lore-card-system/
│
├── fxmanifest.lua
│
├── client/
│   ├── client.lua
│   ├── nui.lua
│   └── commands.lua
│
├── server/
│   ├── server.lua
│   ├── rewards.lua
│   ├── cards.lua
│   └── validation.lua
│
├── shared/
│   ├── config.lua
│   ├── rarity.lua
│   └── utils.lua
│
├── web/
│   ├── public/
│   │   ├── images/
│   │   │   ├── cards/
│   │   │   ├── packs/
│   │   │   └── ui/
│   │   ├── audio/
│   │   │   ├── pack/
│   │   │   ├── cards/
│   │   │   └── rarity/
│   │   └── fonts/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── PackOpening/
│   │   │   ├── Pack/
│   │   │   ├── Card/
│   │   │   ├── Reveal/
│   │   │   ├── Rarity/
│   │   │   ├── Collection/
│   │   │   ├── Summary/
│   │   │   ├── Effects/
│   │   │   ├── Audio/
│   │   │   └── UI/
│   │   │
│   │   ├── hooks/
│   │   │   ├── useNuiEvent.ts
│   │   │   ├── useNuiCallback.ts
│   │   │   ├── usePackOpening.ts
│   │   │   ├── useCardReveal.ts
│   │   │   ├── useCardTilt.ts
│   │   │   ├── useSound.ts
│   │   │   └── useReducedMotion.ts
│   │   │
│   │   ├── context/
│   │   │   ├── PackContext.tsx
│   │   │   └── AudioContext.tsx
│   │   │
│   │   ├── data/
│   │   │   ├── cards.ts
│   │   │   ├── packs.ts
│   │   │   └── rarities.ts
│   │   │
│   │   ├── types/
│   │   │   ├── card.ts
│   │   │   ├── rarity.ts
│   │   │   ├── pack.ts
│   │   │   ├── nui.ts
│   │   │   └── animation.ts
│   │   │
│   │   ├── animations/
│   │   │   ├── cardAnimations.ts
│   │   │   ├── packAnimations.ts
│   │   │   └── rarityAnimations.ts
│   │   │
│   │   ├── config/
│   │   │   ├── theme.ts
│   │   │   ├── animation.ts
│   │   │   └── audio.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── nui.ts
│   │   │   ├── easing.ts
│   │   │   ├── formatters.ts
│   │   │   └── helpers.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── animations.css
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── postcss.config.js
│
└── README.md


Keep this architecture modular.

34 — COMPONENT RESPONSIBILITIES

PackOpening:

Controls the complete experience.

PackVisual:

Displays the physical pack.

PackButton:

Handles opening interaction.

LoreCard:

Main card renderer.

CardBack:

Card reverse side.

CardArtwork:

Artwork rendering.

CardTilt:

3D interaction.

HolographicLayer:

Dynamic foil.

CardReveal:

Single-card reveal.

RevealSequence:

Controls timing.

RarityEffect:

Rarity-specific visual effects.

RarityParticles:

Limited particles.

CardCollection:

Final collection.

PackSummary:

Summary state.

SoundController:

Audio.

CloseButton:

Exit.

35 — HOOKS

useNuiEvent:

Receive FiveM messages.

useNuiCallback:

Send callbacks.

usePackOpening:

Manage pack state.

useCardReveal:

Manage card reveal timing.

useCardTilt:

Manage mouse-based 3D movement.

useSound:

Manage audio.

useReducedMotion:

Respect accessibility settings.

36 — STATE MACHINE

States:

IDLE
OPENING
PACK_BREAK
CARD_ENTER
RARITY_BUILDUP
CARD_FLIP
CARD_REVEALED
CARD_INSPECT
NEXT_CARD
SUMMARY
CLOSING


Do not allow invalid transitions.

Disable opening controls during active animations.

37 — PERFORMANCE

Optimize aggressively.

Avoid:

heavy WebGL

huge particle systems

full-screen videos

continuous canvas rendering

excessive backdrop blur

expensive filters

unnecessary React re-renders

Use:

transform

opacity

GPU-friendly animation

memoization

optimized images

lazy loading

limited particles

requestAnimationFrame only when needed

Target smooth 60 FPS.

38 — IMAGE OPTIMIZATION

Use WebP where possible.

Preload:

current card

next card

pack

Lazy-load everything else.

Do not load the entire collection at startup.

39 — RESPONSIVE SYSTEM

Support:

1280×720
1600×900
1920×1080
2560×1440

Use:

clamp()
vw
vh
aspect-ratio
flex
grid

The UI must never:

overflow

clip

overlap

become fullscreen

push buttons outside the viewport

40 — ACCESSIBILITY

Support:

ESC → close

ENTER / SPACE → primary action

Reduced motion.

Keyboard focus.

Readable contrast.

Clear hover states.

Do not rely solely on color to communicate rarity.

41 — MICRO-INTERACTIONS

Add subtle:

hover

press

focus

tilt

light sweep

card elevation

pack float

rarity pulse

summary transition

close transition

Every animation should have a purpose.

42 — TYPOGRAPHY

Use a modern premium sans-serif.

Avoid overly futuristic fonts that reduce readability.

Typography hierarchy:

LORE:

display

Card name:

strong

Description:

small readable

Metadata:

uppercase tracking

Rarity:

bold

Keep typography clean.

43 — CONFIGURATION

Create:

Config = {
    PackSize = 5,

    OpenCooldown = 1000,

    EnableSound = true,

    EnableParticles = true,

    Rarities = {
        common = 55,
        uncommon = 25,
        rare = 12,
        epic = 6,
        legendary = 1.8,
        mythic = 0.2
    }
}


Everything important should be configurable.

44 — IMPLEMENTATION PHASES

Build in this order:

PHASE 01
Project setup.

PHASE 02
FiveM resource setup.

PHASE 03
TypeScript architecture.

PHASE 04
Card and rarity data.

PHASE 05
Base NUI shell.

PHASE 06
Pack design.

PHASE 07
Card back.

PHASE 08
Card renderer.

PHASE 09
3D tilt.

PHASE 10
Holographic system.

PHASE 11
Reveal sequence.

PHASE 12
Adaptive rarity system.

PHASE 13
Dynamic environment.

PHASE 14
Mythic reveal.

PHASE 15
Collection summary.

PHASE 16
Audio.

PHASE 17
NUI communication.

PHASE 18
Server rewards.

PHASE 19
Security validation.

PHASE 20
Optimization.

PHASE 21
Responsive testing.

PHASE 22
Final visual polish.

45 — FINAL USER EXPERIENCE

The final experience must feel like:

PLAYER RECEIVES LORE PACK
            ↓
COMPACT NUI APPEARS
            ↓
PACK FLOATS
            ↓
PLAYER PRESSES OPEN
            ↓
PACK BUILDS ENERGY
            ↓
PACK OPENS
            ↓
CARD BACK APPEARS
            ↓
RARITY FORESHADOWING
            ↓
CARD FLIPS
            ↓
ARTWORK REVEALS
            ↓
RARITY EFFECT
            ↓
CARD INSPECTION
            ↓
NEXT CARD
            ↓
REPEAT
            ↓
FINAL COLLECTION
            ↓
PLAYER CLOSES
            ↓
FIVEM GAMEPLAY CONTINUES


The surrounding GTA world remains visible throughout.

46 — FINAL QUALITY BAR

This must NOT be a basic prototype.

Create a production-quality system that feels like a flagship feature of a premium FiveM roleplay server.

The final result must be:

CINEMATIC
PREMIUM
FUTURISTIC
MYSTERIOUS
INTERACTIVE
OPTIMIZED
ORIGINAL
SCALABLE

The card artwork is the visual hero.

The reveal animation creates suspense.

The rarity determines the intensity.

The environment reacts to the rarity.

The holographic card reacts to the player.

The UI remains compact.

The GTA world remains visible.

The system must feel like a premium AAA collectible reward experience inside FiveM, not a normal web menu.

ABSOLUTE RULE:

DO NOT USE POKÉMON ASSETS, CHARACTERS, LOGOS, TERMINOLOGY, CARD DESIGNS, OR COPIED VISUAL ELEMENTS.

Create the entire identity around the original LORE universe.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lore-card-arsenal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ce323b3-8b0e-4d25-89a5-d8a22c2b755a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
