# ADR-0007: Design-Tokens als einzige Quelle (Stylebook v2)

| Feld        | Wert                    |
|-------------|-------------------------|
| **Status**  | Proposed                |
| **Datum**   | 2026-11-01              |
| **Autor**   | Claude (Projektleitung) |
| **Ersetzt** | —                       |

---

## Kontext

Das Stylebook v1 wurde aus der Live-Seite abgeleitet. Die Seite nutzt fest eingetragene Tailwind-Klassen (`text-stone-500` usw.) und liest keine Tokens. Ändert sich das Stylebook, ändert sich an der Seite nichts. Mehrere Textfarben verfehlten WCAG 2.2 AA, und es gab nur ein dunkles Theme. Für Druck, Angebote und Rechnungen fehlte ein helles Theme.

Eine Web-Recherche mit Quellenkritik (2026-11-01, 35 von 47 Aussagen bestätigt, Korrekturen übernommen) ergab:
- Die Design-Tokens-Spezifikation der W3C Community Group ist seit 2025-10-28 in Version 2025.10 stabil (Format-, Color- und Resolver-Modul). Sie ist kein W3C-Standard, aber das gemeinsame Austauschformat der gängigen Werkzeuge.
- `oklch()` ist „Baseline widely available“. Kontrast wird trotzdem auf dem sRGB-Wert nach WCAG 2.x berechnet; APCA ist kein gültiger Maßstab.
- Terrazzo 2.x und Style Dictionary 5.x unterstützen das Format, mit häufigen Releases.

## Entscheidung

1. **Einzige Quelle** ist `tokens/ams.tokens.json` im Format 2025.10. Farben werden als OKLCH mit geprüftem Hex-Fallback gespeichert, Maße in rem.
2. **Zwei Ebenen:**
   - Primitive (`color.primitive.*`, z. B. die Stone-Skala)
   - semantische Tokens je Theme (`color.theme.dark.*`, `color.theme.light.*`) mit identischen Namen
   Komponenten nutzen nur semantische Tokens.
3. **Themes:**
   - Dunkel ist Standard und Markenbild.
   - Hell gilt per `data-theme="light"` und automatisch beim Drucken.
   - Die Systemeinstellung des Besuchers schaltet nicht automatisch um, damit das Markenbild stabil bleibt. Das kann später geändert werden.
4. **Generator:** Ein eigenes, abhängigkeitsfreies Skript (`scripts/build-tokens.mjs`) erzeugt `src/styles/tokens.css` und die Tokens des Stylebook-Artifacts. Terrazzo wird eingeführt, sobald weitere Ausgaben gebraucht werden (z. B. Swift für AcoustiScan) oder das Resolver-Modul nötig wird.
5. **Erzwungen in der CI** (`npm run guardrails`):
   - Erzeugte Dateien müssen zur Quelle passen.
   - `scripts/check-contrast.mjs` prüft jedes definierte Farbpaar in beiden Themes: Text 4,5:1, Fließtext 7:1, Bedienelemente und Fokus 3:1.
6. **Schrift:**
   - Inter Variable und JetBrains Mono, selbst gehostet.
   - Fließtext mindestens Gewicht 400, 300 erst ab 24 px, 200 erst ab 48 px, Mindestgröße 12 px.
   - Fluide Größen aus rem und vw, Maximum höchstens das 2,5-Fache des Minimums.
7. **Anbindung der Website** an `tokens.css` mit dem Umstieg auf Tailwind v4 (`@theme`) in Phase 2. Browser-Untergrenze dann: Safari 16.4, Chrome 111, Firefox 128.

## Konsequenzen

**Positiv:**
- Eine Änderung an einer Stelle wirkt auf Website und Stylebook.
- Barrierefreiheit der Farben ist messbar und wird bei jedem Pull Request geprüft.
- Helles Theme für Dokumente und Druck ist vorhanden.

**Negativ / Risiko:**
- Das eigene Skript deckt nur die genutzten Token-Typen ab. Bei neuen Typen muss es erweitert oder durch Terrazzo ersetzt werden.
- Die Gewichtsregeln machen Einleitungen und Fließtext kräftiger als in v1. Das ist gewollt (Lesbarkeit), ändert aber die Anmutung.
- Bis zur Anbindung in Phase 2 nutzt die Live-Seite noch die alten Klassen.

## Verweise
- `docs/design-system/README.md` (Stylebook v2)
- ADR-0006 (Leitplanken)
- Design Tokens Specification 2025.10: https://www.designtokens.org/tr/2025.10/
- Ankündigung der stabilen Version: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
