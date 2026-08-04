# SOP-001: Commit-Konventionen (Conventional Commits)

| Feld         | Wert                        |
|--------------|-----------------------------|
| **Version**  | 1.0.0                       |
| **Datum**    | 2026-08-04                  |
| **Autor**    | AMS Audio Engineering Team  |
| **Status**   | Active                      |
| **Erzwungen durch** | Husky + commitlint (`.commitlintrc.json`) |

---

## Zweck

Eindeutige, maschinenlesbare Commit-Messages ermöglichen:
- Automatische CHANGELOG-Generierung
- Auditierbarkeit: Jede Änderung ist kategorisiert und rückverfolgbar
- Semantische Versionierung (SemVer) aus Git-History ableitbar

## Pflicht-Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer: BREAKING CHANGE, Closes #issue, ADR-ref]
```

### Erlaubte Types

| Type       | Bedeutung                                              | SemVer |
|------------|--------------------------------------------------------|--------|
| `feat`     | Neues Feature                                          | MINOR  |
| `fix`      | Bug-Fix                                                | PATCH  |
| `docs`     | Nur Dokumentation                                      | —      |
| `adr`      | Architecture Decision Record hinzugefügt/geändert     | —      |
| `sop`      | Standard Operating Procedure hinzugefügt/geändert     | —      |
| `chore`    | Wartungsaufgaben (Dependencies, Config, etc.)          | —      |
| `refactor` | Code-Umstrukturierung ohne Feature/Fix                | —      |
| `test`     | Tests hinzufügen oder ändern                          | —      |
| `ci`       | CI/CD-Workflow-Änderungen                              | —      |
| `perf`     | Performance-Verbesserung                               | PATCH  |
| `security` | Sicherheitsrelevante Änderung                         | PATCH  |
| `content`  | SSOT-Content-Änderung in `docs/content/`              | —      |
| `revert`   | Revert eines vorherigen Commits                        | PATCH  |

### Erlaubte Scopes (Beispiele)

`ui`, `api`, `data`, `sections`, `adr`, `sop`, `ci`, `deps`, `config`, `docs`

### Beispiele

```
feat(sections): add lazy loading to all section components
fix(contact): add required validation to email field
docs(adr): accept ADR-0002 sections architecture
adr(ssot): add ADR-0003 single source of truth
sop: add SOP-003 content change procedure
chore(deps): bump vite from 8.0.15 to 8.0.16
ci: add lint and typecheck gates to deploy workflow
security(build): disable sourcemaps in production build
content(uasnoisecheck): update accuracy claim with EASA source
```

### Breaking Changes

```
feat(api)!: change chromaApi response shape

BREAKING CHANGE: ChromaPipelineResponse.answer is now nullable.
Callers must handle null explicitly.
ADR-ref: ADR-0004
```

## Enforcement

- **Husky commit-msg hook**: `npx commitlint --edit $1`
- Commit ohne valides Format wird **lokal abgelehnt**
- CI-Workflow validiert alle Commits im PR-Branch (commitlint action)

## Ausnahmen

Keine. Merge-Commits durch GitHub Actions sind automatisch konform (`chore: merge ...`).

## Verweis
- `.commitlintrc.json` im Projekt-Root
- SOP-002 (Branching-Strategie)
- [Conventional Commits Spec v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
