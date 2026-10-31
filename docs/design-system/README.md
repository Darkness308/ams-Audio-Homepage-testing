AMS Audio is an acoustics consultancy (Ruhrgebiet, NRW): event sound, room-acoustics measurement with the AcoustiScan LiDAR app, drone-noise compliance, building and industrial acoustics, and "Acoustics-as-a-Service" for smart cities. The visual language is quiet and dark: warm stone greys on near-black, extra-light display type, thin borders instead of shadows, and slow sound-wave motion. Everything should feel measured and calm, like a well-treated room.

## Content fundamentals

- **Language:** German, formal "Sie" when the reader is addressed ("Bitte laden Sie die Seite neu."). Most copy speaks as "wir" about the company: "wir machen Schall sichtbar, messbar und beherrschbar."
- **Headline pattern:** short nouns ending in full stops ("Klang. Präzision. Harmonie.") or a plain lead-in plus one emphasised word ("Unsere **Leistungen**", "Schallschutz im **Holzbau**"). Only the emphasised word gets the warm gradient.
- **Technical precision is the voice.** Name norms and methods exactly: "DIN ISO 3382-1 konform", "Nachhallzeit-Messung (RT60)", "TA-Lärm Immissionsprognose", "SORA 2.5 Compliance-Check", "ISO 9613-2 Berechnung". Keep units and norm numbers verbatim.
- **Casing:** sentence case for headings and buttons ("Beratung anfragen", "Demo ansehen"). Uppercase only in `label-caps`, `label-xs-caps`, `column-title` and `micro-caps` labels, always with letter-spacing. The one exception is the wordmark "AMS AUDIO", typed in capitals.
- **Separators:** a middle dot between peers ("MSH Audio · AcoustiScan · Morpheus Partnership"); an en dash with spaces inside sentences.
- **No emoji.** The one glyph exception is the "⚠" in the sections-library error state.

## Colour

The live page uses one dark theme built from Tailwind's stone scale on `neutral-950`. There is no light theme in the source.

- Page ground is `neutral-950`. Cards sit on it as translucent fills: `surface-card` for tiles, `surface-card-strong` for ServiceCards, `surface-well` for icon wells and chips.
- Ink ladder, strongest to weakest: `stone-100` (wordmark, button fill) → `stone-200` (headings, stats) → `stone-300` (emphasised text) → `stone-400` (body lists, icons) → `stone-500` (lead copy, eyebrows, nav) → `stone-600` / `stone-700` (captions, legal).
- Interaction brightens one step up the ladder: links go `stone-500` → `stone-200`; borders go `border-subtle` → `border-hover`; the primary button goes `stone-100` → `white`.
- Hairlines between sections use `hairline`. Text selection uses `selection` with white text.
- **Warm gradient text** (`.text-gradient-warm`): `linear-gradient(135deg, stone-200 0%, stone-400 50%, stone-200 100%)`, background-size 200%, drifting over 10s. Use it on one word per heading, at weight 300.
- **Contrast warnings (source values kept):** `stone-500` reaches 4.1:1 on `neutral-950`, so it passes only for text 24px and larger; the 14–20px lead and eyebrow copy that uses it falls short of 4.5:1. `stone-600` (2.6:1) and `stone-700` (1.9:1) are below every WCAG text threshold. For new work, set any text that must be read in `stone-400` or brighter.

### Sections library (not rendered)

`src/components/ui/` and `src/sections/` contain a second, older component set in slate and orange (`ui-slate-*`, `ui-orange-500`). `App.tsx` renders only `AMSAudioHomepage`, so this palette is not on the live page. Its tokens are kept with a `ui-` prefix so that library can be maintained; do not mix it with the stone palette on one page. White text on `ui-orange-500` is only 2.8:1.

Status colours (`status-success`, `status-warning`, `status-danger`, `status-info` with their `-bg` and `-border` tokens) come from that library's `Badge`. Always show the label word with them ("Kritisch", "Hoch", "Mittel", "Niedrig"); success and danger differ by hue only.

## Typography

- **Inter** (weights 200–600) is the face of the live page. It comes from the `:root` stack in `index.css` and the `.font-inter` class on the homepage root (`sans` family). Tailwind's `font-sans` maps to Outfit (`ui` family) but no live element uses that class. JetBrains Mono (`mono`) appears only for regulation numbers in the sections library.
- All four faces (Inter, Outfit, DM Sans, JetBrains Mono) are self-hosted through `@fontsource` packages imported in `src/main.tsx`; the site makes no requests to Google Fonts.
- Display type is **extra-light**: `display-hero` (96px at lg, 72px md, 48px mobile) and `display-section` (48px md, 36px mobile) at weight 200 with -0.025em tracking. The gradient word inside a heading steps up to weight 300.
- Running text is mostly light (300): `lead` for the hero paragraph and `lead-sm` (18px) for section intros, both capped at the `measure` width; `body` for tiles and feature lists. ServiceCard copy is regular (400): `body-sm` for the description, `list-sm` for its bullets.
- Weight 500 is reserved for titles (`title-card`, `title-sm`), buttons (`button`) and footer `column-title`.
- Numbers: `stat-number` (weight 200) with the unit as suffix in the same style ("15+", "98%").

## Spacing and layout

- Content sits in a centred `container` (1280px) with a `space-6` side gutter. Contact uses `container-narrow`.
- Every content section has `space-28` top and bottom padding; section headers end with `space-20` before their content.
- Section headers stack Eyebrow → heading → lead, centred, with `space-8` between each.
- Grids: ServiceCards in 1/2/3 columns with `space-6` gaps; stats in 2/4 columns with `space-12` / `space-16` gaps; feature sections in two columns with a `space-16`–`space-20` gap.
- Sections are separated by space alone; only the partner strip and footer carry `hairline` rules.

## Shape, borders and elevation

- Radii grow with the object: `radius-lg` chips → `radius-xl` tiles and icon wells → `radius-2xl` cards → `radius-3xl` large panels. Every button, eyebrow, avatar and dot is `radius-full`.
- Cards, tiles and pills have a 1px border, `border-subtle` at rest in most places; inside the Vision 2030 panel and on icon wells the resting border is `border-hover`. Elevation is borders and translucent fills, never shadows; `shadow-2xl` appears once, on the tilted device illustration.
- Panels may use a diagonal gradient from `stone-900` at 50–80% to `neutral-950`.

## Motion

Motion is slow and ambient. Hover transitions run 300ms (buttons, links), 500ms (icons, borders) or 700ms (ServiceCard, team cards, nav background). They use Tailwind's default curve `cubic-bezier(0.4, 0, 0.2, 1)`; only the ServiceCard uses `ease-out`.

- `gentleFloat`: 20–25s drift of large radial glows (`stone-300` at 4%, `stone-400` at 3%, `stone-100` at 2% opacity).
- `softPulse`: 3s scaleY 1 → 1.4 on Waveform bars, staggered 60ms per bar.
- `concentricExpand`: 6s ripple rings from scale 0.5 to 2, four rings 1.5s apart.
- `warmShift`: 10s drift of the gradient text.
- Link underline grows from 0 to full width over 400ms (`stone-400` → `stone-500` gradient line, 1px).
- Respect `prefers-reduced-motion` in new work; the source does not yet. The component stylesheet stops the endless animations under it.

## Iconography

- Icons come from **lucide-react** (0.468): line icons at 16px in buttons and eyebrows, 20–24px in wells, 28–48px in illustration tiles. Used names include Waves, Mic, Tablet, Plane, Building2, Factory, TrendingUp, Play, Volume2, ArrowRight, Phone, Mail, MapPin, TreePine, Headphones.
- Icon colour follows the ink ladder: `stone-500`/`stone-600` at rest, `stone-400`/`stone-200` on hover.
- **Logo:** the repository contains no logo file. The nav mark is the lucide `Waves` icon in a `radius-xl` tile (gradient `stone-700` → `stone-800`, `border-tile`) next to "AMS AUDIO" in `title-sm` and "360° Akustik" in `micro-caps`. `public/favicon.svg` repeats that tile as the browser icon.

## Components

- **Button**: pill. Primary = `stone-100` fill with `neutral-900` text; outline = `stone-700` border with `stone-400` text. Icons lead, an arrow may trail.
- **Eyebrow**: bordered pill above a heading with a small icon or pulsing dot.
- **ServiceCard**: icon well, title, description, bullet list and a "Mehr erfahren" link row.
- **StatCounter**: counts up once on scroll into view over 3s.
- **InfoTile**: icon well plus one line of text, used in two-column feature grids.
- **Waveform**: centred bars that pulse, the brand's signature ornament.
- **StatusBadge**: severity pill from the sections library.

## Not synced

- Not built: the React components are previewed as static HTML styled by `components/bundle.css`, hand-written from `src/components/AMSAudioHomepage.tsx` and `src/components/ui/Badge.tsx`. No bundle was run.
- Not carried as cards: the sections library's `Button`, `Card`/`IconCard`/`FeatureCard`/`NumberedCard`, `SectionHeader`, `StatCard`/`StatGrid`, `ErrorBoundary`/`SectionLoader` (slate/orange, unrendered), and the homepage's nav, partner strip, team card and footer layouts.
- Fonts: the site self-hosts Inter, Outfit, DM Sans and JetBrains Mono via `@fontsource` npm packages. The font files live in `node_modules`, not in the repository, so this system has no `fonts/` files; previews here load Inter and JetBrains Mono from Google Fonts.
- No logo or image assets exist in the repository besides `public/favicon.svg`, which is built from the lucide `Waves` icon.
