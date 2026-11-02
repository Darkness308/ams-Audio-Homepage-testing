# Changelog

Alle wesentlichen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.
Format: [Keep a Changelog](https://keepachangelog.com/de/1.0.0/)
Versionierung: [Semantic Versioning](https://semver.org/lang/de/)

---

## [Unreleased]

### Added
- Einfache Website (Phase 2): Startseite nur mit belegten Inhalten, `impressum/` und `datenschutz/` als statische Seiten ohne JavaScript; alle Angaben aus `src/content/site.json`
- `scripts/check-golive.mjs` (`npm run golive`) — sperrt den Go-Live bei offenen Nachweisen, fehlenden Pflichtangaben, fehlenden Links zu den Rechtsseiten oder unbelegten Werbeaussagen; läuft in den Leitplanken und vor jedem Production-Deploy
- `docs/adr/ADR-0009-hosting.md` — GitHub Pages als Übergang, eigener Server danach, Go-Live-Checkliste für die DNS-Umstellung
- `docs/design-system/` — Design-System „AMS Audio“ (Tokens, Leitfaden, Komponenten-Vorschauen), auch als Artifact veröffentlicht
- `docs/projekt/PROJEKTAUFTRAG.md` und `docs/projekt/PLAN.md` — Projektauftrag, Rollen, Engpässe, Phasen
- `docs/adr/ADR-0006-freigabe-und-leitplanken.md` — Freigabemodell für eine Person mit KI-Projektleitung (Proposed)
- `scripts/guardrails.sh` und Workflow `guardrails.yml` — erzwungene Leitplanken: Conventional Commits im PR, keine Google-Fonts-Einbindung, kein abgeschalteter Fokus, kein Autoplay, keine privaten Schlüssel
- `.github/dependabot.yml` — wöchentliche Updates für npm und GitHub Actions mit konformen Commit-Präfixen
- `eslint.config.js` — eslint 10 mit typescript-eslint
- `public/favicon.svg`, `public/licenses/` (OFL-Texte der Schriften), `THIRD-PARTY-NOTICES.md`

### Changed
- Website nutzt die Stylebook-Komponenten und Tokens direkt (`src/styles/seiten.css`); alte Startseite mit unbelegten Aussagen (Superlative, Normaussagen, Partner, Kennzahlen) entfernt
- Schriften kommen aus `docs/design-system/fonts/` (eine Quelle mit dem Stylebook); @fontsource-Pakete, Outfit und DM Sans entfernt
- `LICENSE` — von MIT auf „Alle Rechte vorbehalten“ umgestellt (vorläufig, unter Vorbehalt rechtlicher Prüfung)
- Schriften werden selbst gehostet (@fontsource) statt von Google Fonts geladen
- CI: Leserechte als Standard, Schreibrechte nur im Veröffentlichungs-Job, Actions auf Commit-SHAs gepinnt, Build und Veröffentlichung getrennt
- Seite: Team ohne Steffen, 25 Jahre Erfahrung, Standort Nachrodt-Wiblingwerde, Absender „ein Angebot von MSH Audio“
- `src/App.tsx` — unnötigen Render-Umweg entfernt

### Fixed
- Build auf `main` nach dem Update auf Tailwind 4 (Dependabot #35): Tailwind und `tailwind.config.js` entfernt, weil die Website es nicht mehr nutzt; PostCSS nur noch mit autoprefixer
- Go-Live-Prüfung als eigener CI-Check „Go-Live-Freigabe“ statt Teil der Leitplanken, damit eine offene Freigabe nicht jeden Pull Request rot färbt; der Production-Deploy bleibt gesperrt
- Go-Live-Prüfung kontrolliert die Prüfziffer der USt-IdNr. (ISO 7064 MOD 11,10)

### Security
- Content-Security-Policy und Referrer-Policy im Production-Build
- `npm audit`: 0 Schwachstellen (minimatch per Override ≥ 11.0.1)

### Added (Sprint 1)
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
