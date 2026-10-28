A small severity pill from the sections library that pairs a status colour with a German label.

From `Badge` and `SeverityBadge` in `src/components/ui/Badge.tsx` (the sections library, not rendered by `App.tsx`).

- `Badge` props: `children`, `variant` (`default` | `success` | `warning` | `danger` | `info`), `size` (`sm` | `md`).
- `SeverityBadge` maps `severity` to label and variant: critical → "Kritisch" (danger), high → "Hoch" (warning), medium → "Mittel" (info), low → "Niedrig" (success).
- Each variant uses its `status-*` text, `status-*-bg` fill and `status-*-border` border; default uses `ui-slate-700` with `ui-slate-300` text.
- Always keep the label: success and danger differ by hue only.
- Shown on `ui-slate-900`, the library's card fill.
