Eine große, extraleichte Zahl mit Label in Großbuchstaben, die beim ersten Hereinscrollen von 0 hochzählt.

Von Hand nachgebaut aus `StatCounter` in `src/components/AMSAudioHomepage.tsx`.

- Props in der Quelle: `value` (Zahl als String), `label`, optional `suffix` („+“, „%“).
- Wert im Stil `stat-number` (Gewicht 200, erst ab 48px zulässig) in `color-text`, Label im Stil `label-caps` (Gewicht 500) in `color-text-subtle`, `space-3` darunter.
- Das Zählen läuft 3s mit etwa 60 fps, sobald das Element zur Hälfte sichtbar ist (IntersectionObserver, threshold 0.5), und nur einmal.
- Vier Stück in `.ams-stat-grid` verwenden: 2 Spalten mit `space-12` Abständen, ab 768px 4 Spalten mit `space-16` Abständen.
- Es werden nur belegte und freigegebene Zahlen eingesetzt. In der Vorschau ist nur „25 Jahre Erfahrung“ belegt (Bestätigung des Auftraggebers); die übrigen drei Felder sind Platzhalter („00“, „Beispielwert“) und kein wiederverwendbarer Inhalt.
- Kontrast: Labels in `color-text-subtle` erreichen auf allen Flächen mindestens 4,99:1 (dunkel) bzw. 4,58:1 (hell) und erfüllen damit WCAG AA (4,5:1).
