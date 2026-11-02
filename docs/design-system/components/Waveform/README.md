Das Erkennungsornament: dünne senkrechte Balken in Form einer Schallwelle, in der Mitte am höchsten, sanft pulsierend.

Von Hand nachgebaut aus `ElegantWaveform` in `src/components/AMSAudioHomepage.tsx`.

- Prop in der Quelle: `barCount` (Standard 32; der Hero nutzt 40, die Geräte-Illustration 20).
- Jeder Balken ist 2px breit, `radius-full`, mit einem Verlauf von unten nach oben von `color-text-subtle` nach `color-text-muted`, im Abstand `space-0-75`.
- Höhe pro Balken: `(1 − d × 0.7) × 40 + 8` px, wobei `d` der Abstand des Balkens von der Mitte als Anteil der halben Anzahl ist.
- Animation `softPulse`: 2,5s, scaleY 1 → 1,4, Deckkraft 0,4 → 0,7, je Balken um 60ms versetzt, einmal abgespielt. Mit 40 Balken dauert die Bewegung so unter 5 Sekunden (WCAG 2.2.2). In der Quelle lief sie endlos. Unter `prefers-reduced-motion` anhalten; das Stylesheet stellt die Balken dann still (Deckkraft 0,4).
- Nur dekorativ: mit `aria-hidden` auszeichnen. Eines pro Ansicht.
