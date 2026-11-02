AMS Audio ist eine Akustik-Beratung aus Nachrodt-Wiblingwerde (NRW): Veranstaltungstechnik, Raumakustik-Messung mit der iPad-App AcoustiScan, Lärmprognosen, Bau- und Industrieakustik. AMS Audio ist ein Angebot von MSH Audio, dem Unternehmen von Marc Schneider-Handrup. Die Gestaltung ist ruhig und dunkel: warme Grautöne auf fast Schwarz, leichte Display-Schrift, feine Ränder statt Schatten, langsame Bewegung. Alles soll wirken wie ein gut eingemessener Raum: präzise und gelassen.

## Markenarchitektur

- **AMS Audio** ist die Hauptmarke nach außen.
- **MSH Audio** ist Betreiber, Rechnungssteller und Motor. Es erscheint als Absender, nicht als zweites Unternehmen.
- **AcoustiScan** ist eine Produktmarke von AMS Audio. Den Namen vor dem App-Start markenrechtlich prüfen lassen; nie zu „AMS Scan“ verkürzen.
- Feste Kombinationen:
  - Wortmarke „AMS Audio“ (bis ein Logo existiert in `title-sm`)
  - Absenderzeile in Fußzeile, Signatur und Dokumenten: „AMS Audio – ein Angebot von MSH Audio · Marc Schneider-Handrup“
  - Produkt: „AcoustiScan von AMS Audio“
- **Verboten** (Irreführungsgefahr nach § 5 UWG):
  - Siegel, Plaketten oder Formulierungen wie „geprüft von MSH Audio“, „zertifiziert durch MSH Audio“ oder „MSH Audio Inside“
  - Zusätze wie „GmbH“, „Group“ oder „& Co.“, solange es diese Rechtsform nicht gibt
- **Erlaubt:** ein „MSH-Audio-Qualitätsstandard“, ausdrücklich als eigenes Versprechen gekennzeichnet und mit einer Beschreibung, was er umfasst.
- **Rechnungen und Impressum** nennen den leistenden Unternehmer: Marc Schneider-Handrup, MSH Audio, Berkenstück 1, 58769 Nachrodt-Wiblingwerde.
- **Logo:** Es gibt noch keins. Vor einem Logo kommt eine Markenrecherche (DPMA, EUIPO), weil „AMS“ im Audiobereich bereits genutzt wird.

## Sprache und Aussagen

- **Anrede:** „Sie“. Das Unternehmen spricht als „wir“: „wir machen Schall sichtbar, messbar und beherrschbar.“
- **Präzision ist die Stimme.** Normen, Verfahren und Einheiten exakt nennen: „DIN EN ISO 3382-1“, „Nachhallzeit-Messung (RT60)“, „TA Lärm“, „ISO 9613-2“.
- **Überschriften:** kurze Substantive mit Punkt („Klang. Präzision. Harmonie.“) oder ein schlichter Einstieg mit einem betonten Wort („Schallschutz im **Holzbau**“).
- **Schreibweise:** Satzfall für Überschriften und Buttons. Versalien nur in `label-caps` und `label-xs-caps`, immer mit Laufweite.
- **Zeichen:**
  - Mittelpunkt zwischen Gleichrangigem („MSH Audio · AcoustiScan“)
  - Halbgeviertstrich mit Leerzeichen im Satz
  - keine Emoji
- **Belegbare Aussagen** (§ 5 UWG):
  - Jede Zahl, Qualifikation, Referenz und Partnerschaft braucht einen Beleg und die Freigabe von Marc Schneider-Handrup.
  - Superlative wie „erste“, „revolutionär“ oder „führend“ nur mit Nachweis.
  - Bestätigt ist: 25 Jahre Erfahrung.
- **Titel:** Die Berufsbezeichnung „Ingenieur“, auch in Wortverbindungen, nur mit Berechtigung nach dem Ingenieurgesetz NRW.
- **Umweltaussagen:** keine Nachhaltigkeitssiegel oder pauschalen Umweltaussagen („grün“, „klimaneutral“). Seit 27.09.2026 gelten dafür strenge Regeln im UWG.
- **Menschen und Bilder:**
  - Personen nur mit Einwilligung nennen oder zeigen.
  - Für Fotos aus Kundenräumen die Rechte klären.
  - KI-erzeugte Bilder kennzeichnen.

## Zahlen, Einheiten und Normen

- **Zahlenformat:** Dezimalkomma und Tausenderpunkt: „0,6 s“, „1.250 m³“.
- **Zahl und Einheit:** Zwischen beiden steht ein schmales geschütztes Leerzeichen (U+202F): „35 dB(A)“, „125 Hz“, „50 %“.
- **Bereiche:** mit Halbgeviertstrich ohne Leerzeichen: „125–4000 Hz“.
- **Normen:** amtliche Schreibweise: „DIN 18041“, „DIN EN ISO 3382-1“, „TA Lärm“.
- **Ziffern ausrichten:** Messwerte und Kennzahlen in Spalten mit `font-variant-numeric: tabular-nums` setzen.
- **Normnummern und Messwerte** in Tabellen in `mono-sm`.

## Farbe

Es gibt zwei Themes:

- **Dunkel** ist das Markenbild und der Standard.
- **Hell** gilt für Druck, PDFs, Angebote und Rechnungen und auf Wunsch der Besucher (Umschalter). Beim Drucken wird automatisch hell gesetzt.

Komponenten nutzen nur semantische Tokens; die Primitive (`color-stone-…` usw.) sind Bausteine der Token-Datei.

- **Flächen:** `color-bg` (Seite) → `color-surface` (Karten, Kacheln) → `color-surface-raised` (hervorgehobene Karten) → `color-surface-well` (Icon-Flächen, Chips). Bei Hover und Fokus wird die Fläche zu `color-surface-hover`. `color-surface-overlay` ist die Navigation nach dem Scrollen.
- **Textleiter**, Mindestkontrast auf allen Flächen in beiden Themes:

  | Token | Verwendung | Dunkel | Hell |
  |-------|------------|--------|------|
  | `color-text-strong` | Wortmarke | 16,3:1 | 18,1:1 |
  | `color-text` | Überschriften, Kennzahlen | 14,2:1 | 16,0:1 |
  | `color-text-body` | Fließtext | 11,9:1 | 13,9:1 |
  | `color-text-muted` | Einleitungen, Listen | 7,05:1 | 6,99:1 |
  | `color-text-subtle` | Labels, Rechtliches | 5,01:1 | 5,27:1 |

- **Ränder:**
  - `color-border-subtle` ist dekorativ. Hover: `color-border`, betont: `color-border-strong`.
  - Eingabefelder und Bedienelemente ohne Text nutzen `color-border-control` (mindestens 3:1).
  - `color-hairline` trennt Bereiche.
- **Buttons:**
  - primär: `color-action-primary-bg` mit `color-action-primary-fg`, Hover `color-action-primary-bg-hover`
  - sekundär: `color-action-secondary-border` mit `color-action-secondary-fg`, Hover `color-action-secondary-fg-hover`
- **Statusfarben** (`color-status-success`, `color-status-warning`, `color-status-danger`, `color-status-info` mit `-bg` und `-border`) nur für Zustände, immer mit Textlabel („Kritisch“, „Hoch“, „Mittel“, „Niedrig“). Erfolg und Gefahr unterscheiden sich vor allem im Farbton.
- **Kein Akzent-Farbton.** Die Marke lebt von der Grauskala; Betonung entsteht über Helligkeit und Gewicht.
- **Warmer Verlauf auf einem Wort pro Überschrift:** `color-text` → `color-text-muted` → `color-text`, 135°. Der Verlauf steht still; die frühere Endlos-Animation entfällt (WCAG 2.2.2).
- **Diagramme:**
  - Farbe nie als einziges Unterscheidungsmerkmal einsetzen.
  - Linien und Datenpunkte mindestens 3:1 zum Grund.
  - Werte direkt beschriften.
  - Die Diagrammpalette wird mit AcoustiScan festgelegt.

## Typografie

- **Schriften:** Inter Variable für Text und Bedienung, JetBrains Mono für Messwerte und Normnummern. Beide sind selbst gehostet (OFL-Lizenz liegt bei); Google Fonts sind verboten, die CI prüft das.
- **Gewichte:**
  - Fließtext, Einleitungen und Listen mindestens 400
  - 300 erst ab 24 px
  - 200 erst ab 48 px (`display-hero`, `stat-number`)
  - 500 für Titel, Buttons und Labels
- **Größen und Zeilen:**
  - Mindestgröße 12 px.
  - Fließtext mit Zeilenhöhe 1,6.
  - Absätze höchstens `size-measure` breit (etwa 70 Zeichen).
  - Überschriften mit `text-wrap: balance`.
- **Display:**
  - `display-hero`: 48–96 px, fluide
  - `display-section`: 36–48 px, Gewicht 300
  - `stat-number`: 48–60 px
  - `figure`: 36 px
- **Text:**
  - `lead`: 18–20 px, Gewicht 400
  - `title-card`: 20 px
  - `title-sm`: 18 px
  - `body`: 16 px
  - `body-sm`: 14 px
  - `button`: 16 px, in der Navigation 14 px
- **Labels:** `label-caps` (14 px), `eyebrow` und `label-xs-caps` (12 px), alle in Gewicht 500.
- **Fluide Größen** kombinieren rem und vw, damit der Browser-Zoom wirkt (WCAG 1.4.4). Das Maximum ist höchstens das 2,5-Fache des Minimums.
- **Eigene Display-Schrift:** Sie wird in einem Marken-Review entschieden. Bis dahin bleibt Inter.

## Abstände, Raster und Form

- **Raster:**
  - Inhalt in `size-container` (1280 px) mit `space-6` Seitenrand; Kontaktbereich in `size-container-narrow`.
  - Bereiche haben `space-28` Innenabstand oben und unten.
  - Bereichsköpfe enden mit `space-20` vor dem Inhalt.
  - Kopf eines Bereichs: Eyebrow → Überschrift → Einleitung, mit je `space-8` Abstand.
- **Klickziele:** mindestens `size-target-min` (24 px), Touch-Hauptaktionen `size-target-comfortable` (44 px).
- **Radien** wachsen mit dem Objekt: `radius-lg` (Chips) → `radius-xl` (Kacheln, Icon-Flächen) → `radius-2xl` (Karten) → `radius-3xl` (große Panels). Buttons, Pills und Punkte nutzen `radius-full`.
- **Tiefe** entsteht durch Ränder und halbtransparente Flächen, nicht durch Schatten. `shadow-2xl` gibt es genau einmal: für die gekippte Geräteplatte.

## Bewegung

- **Dauer und Kurve:**
  - `duration-fast` (300 ms) für Buttons und Links
  - `duration-medium` (500 ms) für Icons und Ränder
  - `duration-slow` (700 ms) für Karten und Navigation
  - Kurve `ease-standard`, für Karten `ease-out`
- **Reduzierte Bewegung:** Bei `prefers-reduced-motion: reduce` setzen die Tokens alle Dauern auf 0. Bewegung aus Interaktion (Verschieben, Skalieren) entfällt dann ganz (WCAG 2.3.3).
- **Dauerbewegungen** (Waveform, Ripples, Glows) laufen höchstens 5 Sekunden oder bekommen eine Pause-Schaltfläche (WCAG 2.2.2). Bei reduzierter Bewegung entfallen sie.
- **Inhalte** werden nie erst durch Scrollen sichtbar; die Seite ist auch ohne Animation vollständig.

## Fokus und Bedienung

- **Fokus:** Jedes Bedienelement zeigt bei Tastaturfokus einen Rahmen aus `color-focus-ring` (`size-focus-width` breit, `size-focus-offset` Abstand). `outline: none` ist verboten; die CI prüft das.
- **Sticky-Navigation:** Sie verdeckt keinen fokussierten Inhalt; dafür `scroll-padding-top` in Höhe der Navigation setzen (WCAG 2.4.11).
- **Links** sind nicht nur an der Farbe erkennbar, sondern unterstrichen oder eindeutig als Button gestaltet.
- **Buttons** lösen eine echte Aktion aus. Kontaktdaten sind echte Links (`mailto:`, `tel:`) und zusätzlich als markierbarer Text sichtbar.
- **Formulare:** sichtbare Labels, Fehlermeldungen als Text, Ränder in `color-border-control`.

## Audio und Medien

- **Kein Autoplay** für Ton oder Video (WCAG 1.4.2); die CI prüft das.
- **Player** sind per Tastatur bedienbar und starten mit moderater Lautstärke.
- **Hörbeispiele und Videos** bekommen ein Transkript oder Untertitel (WCAG 1.2).
- **Kein Blinken** schneller als dreimal pro Sekunde (WCAG 2.3.1).

## Ikonografie

- **Quelle:** Icons aus lucide-react, Linienstil.
  - 16 px in Buttons und Eyebrows
  - 20–24 px in Icon-Flächen
  - 28–48 px in Illustrationskacheln
- **Farbe:** in Ruhe `color-text-muted`, bei Hover `color-text`.
- **Bedeutung:** Icons, die etwas bedeuten, haben mindestens 3:1 Kontrast und ein Label. Dekorative Icons sind `aria-hidden`.

## Druck und Dokumente

- **Druck:** Beim Drucken setzt `tokens.css` automatisch das helle Theme.
- **Angebote, Messberichte und Rechnungen** nutzen das helle Theme.
- **Rechnungen** enthalten die Pflichtangaben nach § 14 UStG.
- **E-Rechnungen** (XRechnung, ZUGFeRD) werden im späteren ERP abgebildet.
- **Briefbogen:** Er folgt DIN 5008; die Vorlage steht noch aus.

## Datenschutz

- **Keine Drittanbieter:** keine Schriften, Skripte oder Einbettungen von fremden Servern ohne Einwilligung.
- **Theme-Wahl:** Die Wahl des Themes darf im Browser gespeichert werden (voraussichtlich zulässig nach § 25 Abs. 2 Nr. 2 TDDDG). Die Datenschutzerklärung nennt das.
- **Kein Tracking** ohne Einwilligung.

## Pflege und Leitplanken

- **Einzige Quelle:** `tokens/ams.tokens.json` im Format „Design Tokens Format Module 2025.10“ der W3C Community Group. `npm run tokens` erzeugt daraus `src/styles/tokens.css` für die Website und die Tokens dieses Stylebooks.
- **Automatische Prüfungen** bei jedem Pull Request (`npm run guardrails`):
  - erzeugte Dateien aktuell
  - alle Farbpaare über ihrem Mindestkontrast
  - keine Google Fonts
  - kein abgeschalteter Fokus
  - kein Autoplay
  - keine privaten Schlüssel
- **CSS-Funktionen:** „Baseline widely available“ frei nutzen; „newly available“ nur mit Fallback.
- **Änderungen** laufen über Pull Requests und werden von SiD Consulting freigegeben (ADR-0006).

## Komponenten

- **Button**: Pill. Primär hell auf dunkel, sekundär mit Rand. Icon vorne, Pfeil optional hinten.
- **Eyebrow**: Pill über einer Überschrift, mit kleinem Icon oder ruhigem Punkt.
- **ServiceCard**: Icon-Fläche, Titel, Beschreibung, Aufzählung und eine „Mehr erfahren“-Zeile.
- **StatCounter**: große Kennzahl mit Label. Nur belegte Zahlen.
- **InfoTile**: Icon-Fläche mit einer Zeile Text.
- **Waveform**: Balken in Wellenform, das Erkennungsornament.
- **StatusBadge**: Status-Pill mit Textlabel.

## Offen

- Logo, nach Markenrecherche
- Entscheidung über eine eigene Display-Schrift
- Diagrammpalette (mit AcoustiScan)
- Briefbogen nach DIN 5008
- Anbindung der Website an `tokens.css` mit dem Umstieg auf Tailwind v4 (Phase 2 im Projektplan)
- Die Komponenten sind statische Nachbauten, noch keine React-Bibliothek
