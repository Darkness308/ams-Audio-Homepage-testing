# docs/ — Governance & Dokumentation

Dieses Verzeichnis enthält alle Governance-Dokumente des AMS Audio Projekts.
Es ist die **SSOT** (Single Source of Truth) für Entscheidungen, Prozesse und Inhalte.

## Struktur

```
docs/
├── adr/          Architecture Decision Records (ADR-0001 ff.)
├── sop/          Standard Operating Procedures (SOP-001 ff.)
├── content/      SSOT-Inhaltsdaten mit Quellen & Metadaten
└── roadmap/      Projekt-Roadmap & Meilensteine
```

## Schnellzugriff

| Dokument | Zweck |
|----------|-------|
| [ADR-Index](adr/README.md) | Alle Architekturentscheidungen |
| [ROADMAP](roadmap/ROADMAP.md) | Meilensteine & Sprint-Plan |
| [SOP-001](sop/SOP-001-commit-konventionen.md) | Commit-Format (Conventional Commits) |
| [SOP-002](sop/SOP-002-branching-strategie.md) | Branch-Hierarchie & PR-Regeln |
| [SOP-003](sop/SOP-003-content-aenderungen.md) | Content-Änderungen via SSOT |
| [SOP-004](sop/SOP-004-dependency-management.md) | Dependency Security & Audit |
| [SOP-005](sop/SOP-005-deployment-gates.md) | CI/CD Quality Gates |
| [Content Schema](content/schema.ts) | TypeScript-Schema für SSOT-Claims |

## Pflicht-Regeln

1. **Keine Änderungen an ADRs** nach Status `Accepted` — nur neue ADRs oder Deprecated-Markierung
2. **Content-Änderungen** immer über `docs/content/` mit Quellangabe (SOP-003)
3. **Konflikte sofort melden** — kein Deployment mit ungelösten Widersprüchen
4. **Jeder Sprint** endet mit aktualisierten Docs: ADR-Status-Check + ROADMAP-Update
