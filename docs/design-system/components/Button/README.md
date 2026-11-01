The pill-shaped call to action: `primary` (light fill) for the one main action, `outline` for the secondary one beside it.

Hand-written from `src/components/AMSAudioHomepage.tsx` (inline `<button>` markup; there is no Button component on the live page).

- **Primary:** `stone-100` fill, `neutral-900` text, `radius-full`, `space-4` × `space-10` padding, `button` type. Hover fills `white`. Use once per view.
- **Outline:** 1px `stone-700` border, `stone-400` text. Hover lifts border to `stone-500` and text to `stone-200`.
- **Small (nav):** 10px × `space-6` padding, 14px text, label only ("Anfrage").
- The consumer provides the label (sentence case, a verb: "Beratung anfragen") and optionally a leading 16px lucide icon and a trailing ArrowRight that nudges `space-1` right on hover.
- Pair primary + outline in a row with `space-5` gap; stack full-width below 640px.
- Transitions 300ms. Do not use the sections library's orange `rounded-lg` button on the stone page.
