# AMS Audio — Projektroadmap

**Version:** 1.0.0 | **Stand:** 2026-08-04 | **SSOT:** dieses Dokument

> **Roter Faden:** Vom Marketing-Prototyp zur auditierbaren, rechtssicheren, EU AI Act-konformen
> Produktionsplattform für Acoustic-as-a-Service (AaaS) im Drohnenlogistik-Markt.

---

## Meilensteine

### M0 — Ist-Analyse & Governance-Entscheidungen ✅ ABGESCHLOSSEN
**Datum:** 2026-08-04
- Code-Review durchgeführt, kritische Findings dokumentiert
- 5 initiale ADRs accepted (ADR-0001 bis ADR-0005)
- 5 SOPs erstellt und aktiviert
- SSOT-Struktur aufgebaut

---

### M1 — Governance Live
**Zieldatum:** Ende Sprint 2 (ca. 2026-08-18)
**Sprint Goal:** *Jede Änderung am Repo ist ab jetzt erzwungen auditierbar.*

#### Deliverables
- [x] ADR-System (5 initiale ADRs)
- [x] SOPs dokumentiert (SOP-001 bis SOP-005)
- [x] SSOT-Verzeichnisstruktur (`docs/content/`)
- [x] CNAME: www.ams-audio.com
- [x] `sourcemap: false` in Production
- [ ] Husky + commitlint aktiv (Conventional Commits erzwungen)
- [ ] CI-Workflows: Lint-Gate + TypeCheck-Gate + Audit-Gate ergänzt
- [ ] Branch Protection auf `main` und `staging` (manuell in GitHub einrichten)
- [ ] CHANGELOG.md initialisiert
- [ ] Impressum / Datenschutz / AGB (Sprint 2 — rechtliche Pflicht §5 TMG, DSGVO)

#### Definition of Done M1
✅ Lint ✅ TypeCheck ✅ Audit ✅ Build ✅ ADRs reviewed ✅ Domain erreichbar

---

### M2 — Architektur-Refactoring
**Zieldatum:** Ende Sprint 4 (ca. 2026-09-01)
**Sprint Goal:** *Der Monolith ist eliminiert — jede Section ist unabhängig lazy-geladen und testbar.*

#### Deliverables
- [ ] `AMSAudioHomepage.tsx` Monolith → `App.tsx` nutzt modulare Sections
- [ ] `React.lazy()` + `Suspense` für alle 20 Sections aktiviert
- [ ] Kontaktformular: vollständige clientseitige Validierung (required, E-Mail-Format, DSGVO-Checkbox)
- [ ] ChromaDB-Feature: graceful degradation bei fehlendem Backend (kein UI-Fehler in Production)
- [ ] `AMSAudioHomepage.tsx` als Deprecated markiert, Removal-ADR erstellt
- [ ] Performance-Baseline gemessen (Lighthouse Score vor/nach)

#### Definition of Done M2
Lighthouse Performance ≥ 80, 0 Console-Errors in Production

---

### M3 — Testing & Qualitätsgating
**Zieldatum:** Ende Sprint 6 (ca. 2026-09-29)
**Sprint Goal:** *Kein Deployment mehr ohne grüne Tests — CI ist das Qualitätsgewissen.*

#### Deliverables
- [ ] Vitest + React Testing Library eingeführt
- [ ] Tests für: `chromaApi.ts` (unit), Kontaktformular-Validierung, kritische Data-Transformationen
- [ ] CI-Workflow: Test-Gate aktiviert (Gate 4 aus SOP-005)
- [ ] Coverage-Threshold: ≥60%
- [ ] `npm test` skript in `package.json`

#### Definition of Done M3
Coverage ≥ 60%, 0 fehlgeschlagene Tests, CI-Pipeline vollständig

---

### M4 — Content-Validierung & SSOT-Migration
**Zieldatum:** Ende Sprint 8 (ca. 2026-10-27)
**Sprint Goal:** *Jede Zahl auf der Website hat eine Quelle — Claims sind von Zielen unterscheidbar.*

#### Deliverables
- [ ] Alle Claims in `src/data/` gegen offizielle Quellen validiert
- [ ] SSOT-Migration: Content aus `src/data/` → `docs/content/` mit Metadaten
- [ ] Zod-Schemas für alle Content-Objekte (Runtime-Validierung)
- [ ] Quellenverzeichnis: EASA, TA Lärm, LBA, DSGVO-Referenzen
- [ ] Alle Ziele als `type: 'target'` markiert (kein greenwashing mehr)

#### Definition of Done M4
0 Claims ohne Quelle, Zod-Validation läuft im CI, Quellenverzeichnis vollständig

---

### M5 — EU AI Act & Zero Trust Baseline
**Zieldatum:** Ende Sprint 10 (ca. 2026-11-24)
**Sprint Goal:** *Das System ist EU AI Act Art. 52-konform und Zero-Trust-basiert.*

#### Deliverables
- [ ] ChromaDB-Backend deployed (separates Repo) mit API-Key-Auth
- [ ] Server-seitiges Logging: Anfragen + Antworten (anonym, kein PII)
- [ ] EU AI Act Art. 11 Technische Dokumentation erstellt
- [ ] Security Headers: CSP, X-Frame-Options, X-Content-Type-Options
- [ ] GitHub Secret Scanning + Dependabot Alerts aktiviert
- [ ] Audit-Trail-Dokumentation vervollständigt

#### Definition of Done M5
OWASP Top 10 geprüft, Security Headers implementiert, AI-System-Dokumentation fertig

---

## Sprint-Übersicht

| Sprint | Zieldatum   | Goal                              | Meilenstein |
|--------|-------------|-----------------------------------|-------------|
| S1     | 2026-08-11  | Governance-Fundament live         | M1 (Teil)   |
| S2     | 2026-08-25  | Rechtliches & CI-Gates            | M1 (Rest)   |
| S3     | 2026-09-08  | Architektur-Refactoring Start     | M2 (Teil)   |
| S4     | 2026-09-22  | Architektur-Refactoring fertig    | M2          |
| S5     | 2026-10-06  | Testing-Framework eingeführt      | M3 (Teil)   |
| S6     | 2026-10-20  | Test-Gate aktiviert               | M3          |
| S7     | 2026-11-03  | Content-Validierung Start         | M4 (Teil)   |
| S8     | 2026-11-17  | SSOT-Migration fertig             | M4          |
| S9     | 2026-12-01  | Zero Trust Implementierung        | M5 (Teil)   |
| S10    | 2026-12-15  | EU AI Act Baseline                | M5          |

---

## Risiken

| Risiko                                  | Wahrscheinlichkeit | Impact | Gegenmaßnahme                              |
|-----------------------------------------|--------------------|--------|--------------------------------------------|
| DNS-Propagation > 48h für www.ams-audio.com | Mittel        | Gering | Fallback auf github.io bleibt aktiv        |
| ChromaDB-Backend-Entwicklung verzögert  | Hoch               | Mittel | Graceful Degradation (ADR-0004)           |
| Inhaltsvalidierung entdeckt falsche Claims | Hoch            | Hoch   | Sofort-Stopp + ADR-Konflikt-Auflösung     |
| Vite v8 Breaking Changes                | Gering             | Mittel | Dependabot + ADR-0001 Monitoring          |

---

## Metriken (North Stars)

| Metrik                      | Baseline (2026-08-04) | Ziel M2 | Ziel M5 |
|-----------------------------|----------------------|---------|---------|
| Lighthouse Performance      | ?                    | ≥ 80    | ≥ 90    |
| Test Coverage               | 0%                   | —       | ≥ 60%   |
| npm audit High/Critical     | 0                    | 0       | 0       |
| Claims mit Quelle           | 0%                   | —       | 100%    |
| Console Errors (Production) | unbekannt            | 0       | 0       |

---

## Verweise
- `docs/adr/README.md` — ADR-Register
- `docs/sop/` — Standard Operating Procedures
- `docs/content/schema.ts` — SSOT-Schema
- `CHANGELOG.md` — Release-History
