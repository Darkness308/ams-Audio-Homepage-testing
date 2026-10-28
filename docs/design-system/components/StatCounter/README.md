A large extra-light figure with an uppercase label that counts up from 0 when it first scrolls into view.

Hand-written from `StatCounter` in `src/components/AMSAudioHomepage.tsx`.

- Props in the source: `value` (numeric string), `label`, optional `suffix` ("+", "%").
- Value in `stat-number` (`stone-200`), label in `label-caps` (`stone-600`) `space-3` below.
- Counting runs 3s at about 60 fps once the element is half visible (IntersectionObserver, threshold 0.5), and only once.
- Use four in a 2/4-column grid with `space-12`–`space-16` gaps. Show figures the business can substantiate.
- `stone-600` labels are 2.6:1 on `neutral-950`, below WCAG AA; consider `stone-400`.
