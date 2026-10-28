A small bordered pill that labels a section above its heading, with a 16px icon or a pulsing dot.

Hand-written from `src/components/AMSAudioHomepage.tsx`.

- 1px `border-subtle`, `radius-full`, `space-2` × `space-5` padding, `eyebrow` type in `stone-500`.
- The consumer provides a short label ("Flagship", "Vision 2030", "360° Akustik-Kompetenz") and one lucide icon in `stone-500`.
- Glass variant (hero only): `surface-pill` fill with 4px backdrop blur and a 6px `stone-400` dot pulsing over 3s; label lists partners separated by " · ".
- Place `space-8` above the section heading. One per section.
- `stone-500` on `neutral-950` is 4.1:1 at 12px, below WCAG AA; consider `stone-400` for new work.
