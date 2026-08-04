# SOP-005: Deployment Gates

| Feld         | Wert                        |
|--------------|-----------------------------|
| **Version**  | 1.0.0                       |
| **Autor**    | AMS Audio Engineering Team  |
| **Datum**    | 2026-08-04                  |
| **Status**   | Active                      |
| **Erzwungen durch** | GitHub Actions CI-Workflows |

---

## Zweck

Kein Code gelangt in Production, der nicht alle Qualitätsgates bestanden hat.
Zero Trust auf Pipeline-Ebene: Jedes Deployment muss beweisen, dass es sicher ist.

## Pflicht-Gate-Sequenz

Jeder Deploy-Workflow **muss** diese Schritte in dieser Reihenfolge durchlaufen.
Ein fehlgeschlagener Schritt bricht die Pipeline ab — kein Skip, kein `continue-on-error`.

```
┌─────────────────────────────────────────────────────────┐
│                    CI/CD GATE SEQUENZ                    │
├─────────────────────────────────────────────────────────┤
│ 1. LINT       npm run lint          (ESLint, 0 Warnings)│
│ 2. TYPECHECK  npx tsc --noEmit      (TypeScript strict) │
│ 3. AUDIT      npm audit --high      (0 High/Critical)   │
│ 4. TEST       npm test              (alle Tests grün)   │  ← ab M3
│ 5. BUILD      npm run build         (0 Errors)          │
│ 6. DEPLOY     → Environment                             │
└─────────────────────────────────────────────────────────┘
```

**Hinweis:** Gate 4 (TEST) wird in Sprint 5–6 (Meilenstein M3) aktiviert, wenn Vitest eingeführt ist.
Bis dahin ist der Test-Schritt ein `echo "Tests: pending M3"` mit Exit-Code 0.

## Gate-Definitionen

### Gate 1: Lint
```bash
npm run lint
# Entspricht: eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
```
- **0 Warnings erlaubt** (max-warnings 0 ist bereits konfiguriert)
- Schlägt fehl bei: ungenutzten Variablen, fehlenden Dependencies, Import-Problemen

### Gate 2: TypeCheck
```bash
npx tsc --noEmit
```
- Überprüft TypeScript ohne Build-Output zu erzeugen
- Schlägt fehl bei: Typ-Fehlern, fehlenden Definitionen, Konfigurationsfehlern

### Gate 3: Security Audit
```bash
npm audit --audit-level=high
```
- Schlägt fehl bei: CVE mit CVSS ≥ 7.0 (High oder Critical)
- Moderate Vulnerabilities: Warning, kein Build-Abbruch (aber in PR kommentiert)

### Gate 4: Tests (ab M3)
```bash
npm test
# Entspricht: vitest run --coverage
```
- Coverage-Threshold: ≥60% (ab M3), steigend auf ≥80% (ab M5)
- Schlägt fehl bei: fehlgeschlagenen Tests oder Coverage unter Threshold

### Gate 5: Build
```bash
npm run build
# Entspricht: tsc && vite build
```
- Schlägt fehl bei: Compile-Fehler, fehlenden Imports, Build-Konfigurationsfehlern

## Environment-spezifische Regeln

| Environment | Branch  | Gates          | Auto-Deploy | Approval nötig |
|-------------|---------|----------------|-------------|----------------|
| Preview     | PR-Branch | 1,2,3,5      | ✅ Ja       | Nein           |
| Staging     | staging | 1,2,3,4,5      | ✅ Ja       | Nein           |
| Production  | main    | 1,2,3,4,5      | ✅ Ja       | Empfohlen      |

## Audit-Trail

Jeder erfolgreiche Deployment-Run wird von GitHub Actions automatisch geloggt:
- Workflow-Run-ID (unveränderlich)
- Commit-SHA (unveränderlich)
- Timestamp
- Alle Gate-Ergebnisse

Diese Logs sind 90 Tage in GitHub Actions gespeichert und bilden den Audit-Trail.

## Bei Gate-Fehlern

1. **CI schlägt fehl** → Kein Deployment
2. **Entwickler** erhält E-Mail/Notification
3. **Fix im Feature-Branch** (nie direkt auf main/staging pushen)
4. **Neuer PR** oder Commit in bestehenden PR
5. **CI läuft erneut**

## Ausnahmen / Hotfix

In echten Notfällen (Sicherheitsvorfälle, rechtliche Pflichten):
- Hotfix-Branch von `main` → direkte PR auf `main`
- **2 Reviewer** statt 1
- Gates 1,2,3,5 müssen trotzdem grün sein (kein vollständiger Skip)
- Post-Incident-ADR erstellen

## Verweise
- SOP-001 (Commit-Konventionen)
- SOP-002 (Branching-Strategie)
- SOP-004 (Dependency Management)
- ADR-0002 (Sections-Architektur)
- `.github/workflows/deploy.yml`, `deploy-staging.yml`, `deploy-preview.yml`
