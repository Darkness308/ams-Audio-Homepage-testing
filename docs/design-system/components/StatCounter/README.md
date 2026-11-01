A large extra-light figure with an uppercase label that counts up from 0 when it first scrolls into view.

Hand-written from `StatCounter` in `src/components/AMSAudioHomepage.tsx`.

- Props in the source: `value` (numeric string), `label`, optional `suffix` ("+", "%").
- Value in `stat-number` (`stone-200`), label in `label-caps` (`stone-600`) `space-3` below.
- Counting runs 3s at about 60 fps once the element is half visible (IntersectionObserver, threshold 0.5), and only once.
- Use four in `.ams-stat-grid`: 2 columns with `space-12` gaps, 4 columns with `space-16` gaps from 768px. Show figures the business can substantiate.
- `stone-600` labels are 2.6:1 on `neutral-950`, below WCAG AA; consider `stone-400`.
