# Changelog

Alle wesentlichen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.
Format: [Keep a Changelog](https://keepachangelog.com/de/1.0.0/)
Versionierung: [Semantic Versioning](https://semver.org/lang/de/)

---

## [Unreleased]

### Added
- `docs/adr/` — ADR-System mit 5 initialen Architecture Decision Records (ADR-0001 bis ADR-0005)
- `docs/sop/` — 5 Standard Operating Procedures (SOP-001 bis SOP-005)
- `docs/content/schema.ts` — SSOT Content-Schema mit Typen und Validierung
- `docs/roadmap/ROADMAP.md` — Vollständige Projekt-Roadmap mit Meilensteinen M0–M5
- `.commitlintrc.json` — Conventional Commits erzwungen via commitlint
- Husky Hooks: `commit-msg` (commitlint), `pre-commit` (typecheck)
- `npm run typecheck` — Neues Script für isolierten TypeScript-Check

### Changed
- `public/CNAME` — Domain: `ams-audio.com` → `www.ams-audio.com` (ADR-0005)
- `vite.config.ts` — Source Maps in Production deaktiviert (Security Hardening Sprint 1)
- `.github/workflows/deploy.yml` — Quality Gates hinzugefügt: Lint + TypeCheck + Audit vor Build
- `.github/workflows/deploy-staging.yml` — Quality Gates hinzugefügt
- `.github/workflows/deploy-preview.yml` — Quality Gates hinzugefügt
- `package.json` — devDependencies: husky, @commitlint/cli, @commitlint/config-conventional

### Security
- Production Source Maps deaktiviert (verhindert Expose interner Codestruktur)
- `npm audit --audit-level=high` als obligatorisches CI-Gate

---

## [1.0.0] — 2026-08-04

### Initial State (Ist-Analyse)
- React 18 + Vite 8 + TypeScript 5 + Tailwind CSS 3 + Framer Motion 11
- 20 Section-Komponenten in `src/sections/` (noch nicht im Rendering-Pfad aktiv — ADR-0002)
- ChromaDB-Pipeline Frontend-Stub (`src/lib/chromaApi.ts`) — Backend fehlt (ADR-0004)
- GitHub Pages Deployment auf `ams-audio.com`
- 4 CI/CD Workflows: production, staging, preview, cleanup
- 0 Tests vorhanden (Meilenstein M3 planned)
