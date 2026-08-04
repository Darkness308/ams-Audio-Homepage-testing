# ADR-0002: Monolith AMSAudioHomepage.tsx → Modulare Sections-Architektur

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-08-04                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | —                           |

---

## Kontext

Die initiale Code-Review deckte eine kritische architektonische Inkonsistenz auf:

- `src/components/AMSAudioHomepage.tsx` (694 Zeilen, Monolith) wird von `App.tsx` gerendert
- `src/sections/` enthält 20 vollständig implementierte, unabhängige Section-Komponenten
- Diese Sections werden **nicht gerendert** — sie sind tote Code-Masse, die ins Bundle kompiliert wird

Dies verletzt das Single Responsibility Principle, verhindert Code Splitting / Lazy Loading und
macht Wartung, Testing und Erweiterung unnötig schwer.

## Entscheidung

`AMSAudioHomepage.tsx` wird **schrittweise auf die Sections-Architektur migriert** (Meilenstein M2, Sprint 3–4):

1. `App.tsx` importiert künftig die modularen Sections aus `src/sections/`
2. `React.lazy()` + `Suspense` werden für alle Sections aktiviert
3. `AMSAudioHomepage.tsx` wird nach abgeschlossener Migration entfernt (Deprecated-Status)
4. Jede Section ist eigenständig testbar

**Migrations-Reihenfolge** (nach Sichtbarkeit im Viewport, oben nach unten):
Navigation → Hero → CoreServices → Megatrends → DroneMarket → CaseStudy →
Solution → UASNoiseCheck → CertificationPackages → MarketAnalysis → SWOT →
Financials → EURegulation → InvestmentOpportunities → StrategyFramework →
SuccessFactors → Stakeholders → SmartCity → SocialLicense → DaaSIntegration →
ROI → DualEnabler → Contact → Footer

## Konsequenzen

**Positiv:**
- Lazy Loading reduziert Initial Load Time
- Jede Section ist isoliert testbar
- Klare Verantwortlichkeiten, einfachere PRs
- Code Splitting durch Vite automatisch

**Negativ / Risiko:**
- Migrations-Sprint nötig (geschätzt: 2 Wochen)
- Temporäre Parallelexistenz beider Implementierungen im gleichen Sprint

## Verweise
- ADR-0001 (Tech Stack)
- SOP-003 (Content-Änderungen via SSOT)
- Meilenstein M2 in `docs/roadmap/ROADMAP.md`
