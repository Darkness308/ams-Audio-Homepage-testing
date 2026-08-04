## Beschreibung

<!-- Was wurde geändert? Warum? -->

## Typ der Änderung

- [ ] `feat` — Neues Feature
- [ ] `fix` — Bug-Fix
- [ ] `docs` / `adr` / `sop` — Dokumentation
- [ ] `refactor` — Code-Umstrukturierung
- [ ] `chore` — Wartung / Dependencies
- [ ] `ci` — CI/CD-Änderung
- [ ] `content` — SSOT-Inhaltsänderung
- [ ] `security` — Sicherheitsrelevant

## Quality Gates Checklist (SOP-005)

- [ ] `npm run lint` lokal grün (0 Warnings)
- [ ] `npm run typecheck` lokal grün
- [ ] `npm run build` lokal grün
- [ ] `npm audit --audit-level=high` lokal grün

## Content-Änderungen (SOP-003 — nur ausfüllen wenn Content geändert wurde)

- [ ] Alle neuen/geänderten Claims haben `type`, `source`, `validatedAt` Felder
- [ ] Web-Validierung durchgeführt → Quellenlink: <!-- URL einfügen -->
- [ ] Keine inline-Inhalte in `.tsx`/`.ts` Komponenten ohne SSOT-Referenz

## ADR/SOP-Referenzen

<!-- Welche ADRs oder SOPs sind relevant für diese Änderung? -->
<!-- z.B. "Implements ADR-0002", "Follows SOP-003" -->

## Screenshots / Demos (optional)

<!-- Bei UI-Änderungen: vor/nach Screenshot -->

## Weitere Hinweise

<!-- Breaking Changes, offene Fragen, Follow-up Tasks -->
