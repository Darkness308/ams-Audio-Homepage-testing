Eine kleine umrandete Pill, die einen Abschnitt über seiner Überschrift beschriftet, mit 16px-Icon oder pulsierendem Punkt.

Von Hand nachgebaut aus `src/components/AMSAudioHomepage.tsx`.

- 1px `color-border-subtle` (`color-border` im Vision-2030-Panel), `radius-full`, Innenabstand `space-2` × `space-5`, Schriftstil `eyebrow` (12px, Gewicht 500) in `color-text-subtle`.
- Die Anwendung liefert ein kurzes Label („Flagship“, „Vision 2030“, „360° Akustik-Kompetenz“) und ein Lucide-Icon in `color-text-subtle`.
- Glas-Variante (nur Hero): Fläche `color-surface` mit 4px Backdrop-Blur und einem 6px-Punkt in `color-text-muted`, der über 3s pulsiert; das Label nennt Partner, getrennt durch „ · “. Die Vorschau zeigt dafür als Beispiel gekennzeichnete Platzhalter; nur bestätigte Partner nennen.
- `space-8` über der Abschnittsüberschrift platzieren. Eine pro Abschnitt.
- Kontrast: `color-text-subtle` erreicht auf allen Flächen mindestens 4,99:1 (dunkel) bzw. 4,58:1 (hell) und erfüllt damit WCAG AA (4,5:1) auch bei 12px.
- Unter `prefers-reduced-motion` pulsiert der Punkt nicht.
