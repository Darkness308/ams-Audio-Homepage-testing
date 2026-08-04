# SOP-004: Dependency Management

| Feld         | Wert                        |
|--------------|-----------------------------|
| **Version**  | 1.0.0                       |
| **Datum**    | 2026-08-04                  |
| **Autor**    | AMS Audio Engineering Team  |
| **Status**   | Active                      |
| **Erzwungen durch** | CI-Audit-Gate + PR-Checklist |

---

## Zweck

Zero-Trust-Prinzip auf Dependencies anwenden: Kein Package wird implizit vertraut.
Jede neue Abhängigkeit wird auf Sicherheitslücken, Lizenz-Kompatibilität und Notwendigkeit geprüft.

## Grundsatz

> **Weniger ist mehr.** Jede neue Dependency ist eine potenzielle Angriffsfläche und Wartungslast.
> Bevor ein Package hinzugefügt wird: Kann die Anforderung mit bestehenden Mitteln (Web API,
> TypeScript Standard Library, bestehenden Dependencies) erfüllt werden?

## Prozess: Neue Dependency hinzufügen

### 1. Notwendigkeit prüfen
- Kann die Funktion ohne neue Dependency implementiert werden? → Dann ohne.
- Wie viele Downloads/Woche hat das Package? (npm-Popularität als Proxy für Maintenance)
- Wann war der letzte Commit? (>6 Monate ohne Aktivität = Warnsignal)

### 2. Security Advisory Check (PFLICHT)
```bash
# Vor npm install: Advisory Database prüfen
# Via GitHub Copilot Advisory Tool oder:
npm audit --audit-level=moderate
```

Wenn CVE mit CVSS ≥ 4.0 vorhanden: **Kein Install** ohne explizite Genehmigung + ADR.

### 3. Lizenz-Check
Erlaubte Lizenzen: MIT, Apache 2.0, BSD-2, BSD-3, ISC
Nicht erlaubt ohne Rechtsberatung: GPL, LGPL, AGPL, SSPL, Commons Clause

```bash
npx license-checker --onlyAllow 'MIT;Apache-2.0;BSD-2-Clause;BSD-3-Clause;ISC'
```

### 4. Production vs. devDependency
- Nur in `dependencies`, wenn zur Laufzeit benötigt (im Browser-Bundle)
- Alles andere in `devDependencies`

### 5. Version Pinning
- Keine `*` oder `latest` in `package.json`
- `^` (minor updates) ist Standard für gut-gewartete Packages
- `~` (patch only) für kritische/sicherheitsrelevante Packages

## Prozess: Bestehende Dependencies aktualisieren

### Automatisch (Dependabot)
- Dependabot ist aktiv (bereits 2 PRs gemergt: #11, #12)
- Dependabot-PRs müssen CI-Gates bestehen bevor Merge
- Kein Auto-Merge für Major-Version-Updates

### Manuell
```bash
# Alle Updates prüfen
npm outdated

# Security-Audit
npm audit

# Update durchführen (nach Prüfung)
npm update <package>

# Nach Update: Build + Tests sicherstellen
npm run build && npm test
```

## Prozess: Dependency entfernen

```bash
npm uninstall <package>
npm run build  # Sicherstellen dass Build noch grün ist
```

## CI-Enforcement

Jeder CI-Run führt aus:
```bash
npm audit --audit-level=high
```

Bei Findings mit CVSS ≥ 7.0 (High/Critical): **Build schlägt fehl.**

## Aktuelle Dependencies (Stand 2026-08-04)

### Production
| Package       | Version   | Zweck              | Lizenz |
|---------------|-----------|--------------------|--------|
| react         | ^18.3.1   | UI Framework       | MIT    |
| react-dom     | ^18.3.1   | DOM Renderer       | MIT    |
| framer-motion | ^11.15.0  | Animationen        | MIT    |
| lucide-react  | ^0.468.0  | Icons              | ISC    |

### Dev
TypeScript, Vite, Tailwind, ESLint, PostCSS, Autoprefixer — alle MIT/Apache.

## Verweise
- ADR-0001 (Tech Stack)
- SOP-005 (Deployment Gates)
- [npm audit docs](https://docs.npmjs.com/cli/v10/commands/npm-audit)
- [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/)
