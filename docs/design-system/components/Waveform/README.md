Das Erkennungsornament: dünne senkrechte Balken in Form einer Schallwelle, in der Mitte am höchsten, sanft pulsierend.

Von Hand nachgebaut aus `ElegantWaveform` in `src/components/AMSAudioHomepage.tsx`.

- Prop in der Quelle: `barCount` (Standard 32; der Hero nutzt 40, die Geräte-Illustration 20).
- Jeder Balken ist 2px breit, `radius-full`, mit einem Verlauf von unten nach oben von `color-text-subtle` nach `color-text-muted`, im Abstand `space-0-75`.
- Höhe pro Balken: `(1 − d × 0.7) × 40 + 8` px, wobei `d` der Abstand des Balkens von der Mitte als Anteil der halben Anzahl ist.
- Animation `softPulse`: 3s, scaleY 1 → 1,4, Deckkraft 0,4 → 0,7, je Balken um 60ms versetzt. Unter `prefers-reduced-motion` anhalten; das Stylesheet stellt die Balken dann still (Deckkraft 0,4).
- Nur dekorativ: mit `aria-hidden` auszeichnen. Eines pro Ansicht.
