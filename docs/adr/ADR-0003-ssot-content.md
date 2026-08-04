# ADR-0003: SSOT — Alle Inhalte kommen aus `/docs/content/`

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-08-04                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | —                           |

---

## Kontext

Die Code-Review stellte fest:
- Alle Inhalte (Texte, Zahlen, Claims, Regulierungsreferenzen) sind direkt in TypeScript-Dateien
  unter `src/data/` hartcodiert (~2.800 Zeilen)
- Zahlen wie `>99% Genauigkeit`, `80% Zeitersparnis`, `6.6:1 ROI` haben **keine Quellen**
- `technicalSpecs.certification: 'LBA/BAZL akkreditiert (Ziel)'` — Ziele werden als Fakten dargestellt
- Projektionen und Messungen sind nicht unterscheidbar

Dies verletzt das SSOT-Prinzip und macht es unmöglich, Claims systematisch zu validieren oder
für EU AI Act-Compliance zu auditieren.

## Entscheidung

Ab **Meilenstein M4** gilt:

1. **`docs/content/`** ist die einzige Wahrheitsquelle für alle publizierten Claims
2. Jeder Datenpunkt trägt Pflichtfelder:
   ```typescript
   {
     value: string | number,
     type: 'measured' | 'projection' | 'target' | 'regulatory',
     source: string,       // z.B. "EASA AMC UAS.OPEN.060, 2022-10"
     sourceUrl?: string,
     validatedAt: string,  // ISO-Datum der letzten Validierung
     validatedBy: string   // Person oder System
   }
   ```
3. `src/data/` Dateien referenzieren ausschließlich aus `docs/content/` importierte Objekte
4. Inline-Content in Komponenten ist **verboten** (SOP-003 erzwingt dies via PR-Checklist)
5. Bei jeder inhaltlichen Änderung wird ein Web-Validierungsschritt gegen offizielle Quellen
   durchgeführt und das `validatedAt` Datum aktualisiert

## Konsequenzen

**Positiv:**
- Vollständige Auditierbarkeit aller Claims
- EU AI Act Art. 11 (Technische Dokumentation) wird vorbereitet
- Klare Unterscheidung: Ist etwas eine Messung, eine Prognose oder ein Ziel?

**Negativ / Risiko:**
- Migrations-Aufwand für bestehende ~2.800 Zeilen Content (Sprint 7–8)
- Kurzfristig zwei parallele Content-Quellen während der Migration

## Konflikt-Auflösung
Wenn ein Datenpunkt widersprüchliche Quellen hat → Sofort-Stopp → ADR für diesen Datenpunkt →
Web-Validierung → Entscheidung → SSOT-Update (gemäß Konflikt-Auflösungsprotokoll)

## Verweise
- SOP-003 (Content-Änderungen)
- `docs/content/schema.ts` (Datentyp-Definition)
- Meilenstein M4 in `docs/roadmap/ROADMAP.md`
