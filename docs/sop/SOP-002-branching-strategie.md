# SOP-002: Branching-Strategie

| Feld         | Wert                        |
|--------------|-----------------------------|
| **Version**  | 1.0.0                       |
| **Datum**    | 2026-08-04                  |
| **Autor**    | AMS Audio Engineering Team  |
| **Status**   | Active                      |
| **Erzwungen durch** | GitHub Branch Protection Rules |

---

## Zweck

Klare Branch-Hierarchie verhindert unbeabsichtigte Deployments in Production und sichert
die Auditierbarkeit aller Änderungen durch obligatorische Pull Requests.

## Branch-Hierarchie

```
main (Production)
  ↑ PR + Review + CI-Gates
staging (Staging-Umgebung)
  ↑ PR + Review + CI-Gates
feature/<ticket-oder-beschreibung>
fix/<beschreibung>
docs/<beschreibung>
adr/<adr-nummer>-<kurztitel>
sop/<sop-nummer>-<kurztitel>
hotfix/<beschreibung>   ← direkt gegen main, nur bei kritischen Sicherheitsproblemen
```

## Branch-Regeln

### `main`
- **Kein direkter Push**
- Nur via PR aus `staging`
- Mindestens 1 Reviewer
- Alle CI-Gates müssen grün sein: Lint ✅ TypeCheck ✅ Test ✅ Build ✅
- Nach Merge: automatisches Deployment auf `www.ams-audio.com`

### `staging`
- **Kein direkter Push**
- Nur via PR aus Feature/Fix/Docs-Branches
- Mindestens 1 Reviewer
- Alle CI-Gates müssen grün sein
- Nach Merge: automatisches Deployment auf Staging-URL

### Feature/Fix-Branches
- Erstellt von: `staging` (nicht von `main`)
- Namenskonvention: `feat/lazy-loading-sections`, `fix/contact-validation`, `adr/0006-kurztitel`
- Lebensdauer: maximal 2 Wochen (1 Sprint)
- PR-Previews werden automatisch deployed (deploy-preview.yml)
- Nach Merge: Branch wird gelöscht

### Hotfix-Branches
- Erstellt von: `main`
- Nur für kritische Sicherheitsvorfälle (CVSS ≥ 7.0) oder rechtliche Pflichten
- PR direkt gegen `main` mit 2 Reviewern
- Danach sofort zurück-mergen in `staging`

## Namenskonvention

```
feat/<kurztitel>          # Neues Feature
fix/<kurztitel>           # Bug-Fix
docs/<kurztitel>          # Nur Dokumentation
adr/<nummer>-<kurztitel>  # ADR-Arbeit
sop/<nummer>-<kurztitel>  # SOP-Arbeit
content/<kurztitel>       # SSOT-Content-Änderung
refactor/<kurztitel>      # Refactoring
ci/<kurztitel>            # CI-Änderungen
hotfix/<kurztitel>        # Kritischer Fix direkt auf main
```

## Releases & Tags

- Nach jedem Merge in `main`: Git-Tag `vMAJOR.MINOR.PATCH` setzen
- Tag-Message enthält: was geändert wurde + ADR-Referenz (wenn relevant)
- GitHub Release für alle non-patch Versionen

## Workflow-Diagramm

```
feature/neue-funktion
        │
        ▼  PR + CI-Gates + Review
    staging ──────────────────────────────────────┐
        │                                         │
        ▼  PR + CI-Gates + 1 Review              Staging-Deploy
      main ─────────────────────────────────────┐
        │                                       │
        ▼                                  Production-Deploy
    v1.x.x Tag                          www.ams-audio.com
```

## Verweise
- SOP-001 (Commit-Konventionen)
- SOP-005 (Deployment Gates)
- GitHub Branch Protection Settings (manuell in GitHub Repo-Settings aktiviert)
