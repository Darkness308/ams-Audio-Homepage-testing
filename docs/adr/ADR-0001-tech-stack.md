# ADR-0001: Tech Stack — React / Vite / TypeScript beibehalten

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-08-04                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | —                           |

---

## Kontext

Das bestehende Repository verwendet React 18, Vite 8, TypeScript 5, Tailwind CSS 3 und Framer Motion.
Die initiale Code-Review (2026-08-04) ergab, dass der Stack technisch aktuell ist, `npm audit` 0 Schwachstellen
meldet und der Build sauber durchläuft. Ein Wechsel würde keinen Mehrwert liefern, aber erheblichen
Migrationsaufwand erzeugen.

## Entscheidung

Der Tech Stack **bleibt unverändert**:

| Technologie      | Version   | Begründung                                              |
|------------------|-----------|---------------------------------------------------------|
| React            | ^18.3.1   | Stable LTS, StrictMode aktiv, concurrent features ready |
| Vite             | ^8.0.16   | Schnellste Build-Zeit, ESM-native, aktiv maintained     |
| TypeScript       | ^5.6.3    | Vollständige Typsicherheit, IDE-Support                 |
| Tailwind CSS     | ^3.4.15   | Utility-first, konsistent im Codebase                   |
| Framer Motion    | ^11.15.0  | Animations-Library, bereits integriert                  |
| Lucide React     | ^0.468.0  | Icon-Library, Tree-shakeable                            |

## Konsequenzen

**Positiv:**
- Kein Migrationsrisiko
- Alle Entwickler kennen den Stack
- Dependency-Audit ist sauber

**Negativ / Risiko:**
- Vite v8 ist bleeding edge — Patch-Updates genau beobachten (Dependabot aktiv)
- Framer Motion erhöht Bundle-Size — bei Performance-Regression evaluieren

## Verweise
- SOP-004 (Dependency Management)
- [Vite 8 Release Notes](https://vite.dev/blog/)
- npm audit output: 0 vulnerabilities (Stand 2026-08-04)
