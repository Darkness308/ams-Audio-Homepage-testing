Eine Karte, die einen Leistungsbereich vorstellt: Icon-Fläche, Titel, Beschreibung, vier Feature-Punkte und eine Zeile „Mehr erfahren“.

Von Hand nachgebaut aus `ServiceCard` in `src/components/AMSAudioHomepage.tsx`.

- Props in der Quelle: `icon` (Lucide-Komponente), `title`, `description`, `features: string[]`.
- Fläche `color-surface-raised`, 1px `color-border-subtle`, `radius-2xl`, Innenabstand `space-8`, 4px Backdrop-Blur.
- Icon-Fläche 56px, `radius-xl`, Fläche `color-surface-well` (in der Quelle ein Verlauf von Stone-800 nach Stone-900), Rand `color-border` (bei Hover `color-border-strong`); Icon 24px in `color-text-muted`.
- Titel im Stil `title-card` in `color-text`; Beschreibung im Stil `body-sm` in `color-text-subtle`; die Aufzählung in 14px/20px (Gewicht 400) in `color-text-muted`, mit 4px-Punkten in `color-text-subtle`.
- Hover (700ms, ease-out): Rand `color-border-strong`, Fläche `color-surface-hover`, die Icon-Fläche skaliert auf 1,05, Icon und Punkte werden kräftiger (`color-text`, `color-text-body`), der Titel wechselt zu `color-text-strong`, die Zeile „Mehr erfahren“ wechselt zu `color-text` und ihr Abstand wird größer. Unter `prefers-reduced-motion` entfallen Skalierung und Abstandsänderung.
- Kontrast: Beschreibung und „Mehr erfahren“ in `color-text-subtle` erreichen auf allen Flächen mindestens 4,99:1 (dunkel) bzw. 4,58:1 (hell); alle Textfarben der Karte erfüllen damit WCAG AA (4,5:1).
- In der Quelle ist die ganze Karte ein `div` mit `cursor-pointer` und ohne Link, daher per Tastatur nicht erreichbar. Wird sie mit einem echten Ziel nachgebaut, „Mehr erfahren“ als `<a href>` rendern; das Stylesheet hebt die Karte dann über `:focus-within` hervor und zeigt am Link über `:focus-visible` den Fokusrahmen in `color-focus-ring`. Die Zeile ist mindestens `size-target-min` hoch. Ohne Ziel `cursor: pointer` entfernen.
- Die Vorschau nutzt neutrale Texte. Werbeaussagen und Angaben zur Normkonformität nur mit Beleg einsetzen.
- Im 1-, 2- oder 3-spaltigen Raster mit `space-6` Abständen anordnen; die Karten sind gleich hoch.
