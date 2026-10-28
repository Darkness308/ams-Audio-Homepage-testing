The signature ornament: thin vertical bars shaped like a sound wave, tallest at the centre, pulsing gently.

Hand-written from `ElegantWaveform` in `src/components/AMSAudioHomepage.tsx`.

- Prop in the source: `barCount` (default 32; hero uses 40, device illustration 20).
- Each bar is 2px wide, `radius-full`, gradient `stone-600` → `stone-400` from bottom to top, `space-0-75` apart.
- Height per bar: `(1 − d × 0.7) × 40 + 8` px, where `d` is the bar's distance from the centre as a fraction of half the count.
- Animation `softPulse`: 3s, scaleY 1 → 1.4, opacity 0.4 → 0.7, delayed 60ms per bar. Stop it under `prefers-reduced-motion`.
- Decorative only: mark it `aria-hidden`. One per view.
