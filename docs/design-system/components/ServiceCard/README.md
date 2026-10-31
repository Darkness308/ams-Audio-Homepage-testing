A card that presents one service line: icon well, title, description, four feature bullets and a "Mehr erfahren" row.

Hand-written from `ServiceCard` in `src/components/AMSAudioHomepage.tsx`.

- Props in the source: `icon` (lucide component), `title`, `description`, `features: string[]`.
- `surface-card-strong` fill, 1px `border-subtle`, `radius-2xl`, `space-8` padding, 4px backdrop blur.
- Icon well 56px, `radius-xl`, gradient `stone-800` → `stone-900`, border `border-hover` (hover `border-well-hover`); icon 24px `stone-400`.
- Title `title-card` in `stone-200`; description `body-sm` in `stone-500`; bullets are 4px `stone-600` dots with `stone-400` text.
- Hover (700ms, ease-out): border `border-strong-hover`, fill `surface-card-hover`, well scales 1.05, icon and bullets brighten, title turns `white`, the "Mehr erfahren" row brightens to `stone-200` and its gap widens.
- Title in `title-card`, description in `body-sm`, bullets in `list-sm`.
- Contrast: the `stone-500` description reaches 4.1:1 and the `stone-600` "Mehr erfahren" row 2.6:1 on `neutral-950`, both below WCAG AA. For new work use `stone-400`.
- In the source the whole card is a `div` with `cursor-pointer` and no link, so it cannot be reached by keyboard. When rebuilding it with a real destination, render "Mehr erfahren" as `<a href>`; the stylesheet then lights the card on `:focus-within` and outlines the link on `:focus-visible`. Without a destination, drop `cursor: pointer`.
- Lay out in a 1/2/3-column grid with `space-6` gaps; cards share equal height.
