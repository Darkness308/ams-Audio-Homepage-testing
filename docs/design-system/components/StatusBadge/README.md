Eine kleine Schweregrad-Pill aus der Sections-Bibliothek, die eine Statusfarbe mit einem deutschen Label verbindet.

Aus `Badge` und `SeverityBadge` in `src/components/ui/Badge.tsx` (die Sections-Bibliothek, nicht von `App.tsx` gerendert).

- Props von `Badge`: `children`, `variant` (`default` | `success` | `warning` | `danger` | `info`), `size` (`sm` | `md`).
- `SeverityBadge` ordnet `severity` Label und Variante zu: critical → „Kritisch“ (danger), high → „Hoch“ (warning), medium → „Mittel“ (info), low → „Niedrig“ (success).
- Jede Variante nutzt ihren Text `color-status-*`, die Fläche `color-status-*-bg` und den Rand `color-status-*-border`; `default` nutzt die Fläche `color-surface-well` mit Rand `color-border-subtle` und Text `color-text-muted` (in der Quelle Slate-Töne der Bibliothek).
- Schrift 12px (`sm`) bzw. 14px (`md`), Gewicht 500.
- Das Label immer beibehalten: success und danger unterscheiden sich nur im Farbton.
- Gezeigt auf `color-surface`, der Fläche für Karten und Kacheln (in der Quelle die Slate-Kartenfläche der Bibliothek).
- Kontrast: Die Statusfarben erfüllen in beiden Themes auf `color-status-*-bg`, `color-bg` und `color-surface` mindestens WCAG AA (4,5:1).
