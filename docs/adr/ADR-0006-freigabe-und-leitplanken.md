# ADR-0006: Freigabemodell und erzwungene Leitplanken

| Feld        | Wert                                                      |
|-------------|-----------------------------------------------------------|
| **Status**  | Proposed                                                  |
| **Datum**   | 2026-11-01                                                |
| **Autor**   | Claude (Projektleitung)                                   |
| **Ersetzt** | Reviewer-Regeln in SOP-002 und SOP-005, Team-Review in `docs/adr/README.md` |

---

## Kontext

SOP-002, SOP-005 und der ADR-Prozess verlangen ein Entwicklerteam mit ein bis zwei menschlichen Reviewern. Tatsächlich gibt es:

- **SiD Consulting** (GitHub-Konto `Darkness308`): Auftraggeber, Eigentümer von Repo, Domain und Server, Admin.
- **Marc Schneider-Handrup** (MSH Audio): Betreiber der Website, fachliche Instanz für Messwerte und Aussagen über das eigene Geschäft.
- **Claude**: Projektleitung, Umsetzung und Prüfung, mit Unteragenten.
- **GitHub Copilot** (Abo vorhanden): automatische Code-Reviews.
- **Codex** (Business-Plan vorhanden): optional als zweiter, unabhängiger Prüfer.

GitHub lässt niemanden den eigenen Pull Request freigeben, und KI-Reviews zählen nicht als Freigabe. Schaltet man den Branch-Schutz wie in SOP-002 beschrieben ein, blockiert jeder Merge. Lässt man ihn aus, bleiben die Regeln Papier. Am 2026-10-31 haben zudem eine andere Claude-Sitzung und Copilot unabgestimmt auf `main` gemergt.

## Entscheidung

1. **Kein direkter Push auf `main`.** Jede Änderung läuft über einen Pull Request.
2. **Pflicht-Prüfungen vor dem Merge** (als Required Status Checks in GitHub):
   - `Quality Gates (Lint · TypeCheck · Audit)`
   - `Guardrails (Commits · Inhalte)`: Conventional Commits, keine Google-Fonts-Einbindung, kein abgeschalteter Fokus, kein Autoplay, keine privaten Schlüssel (`scripts/guardrails.sh`)
3. **Reviews:** Copilot prüft jeden Pull Request automatisch. Claude dokumentiert eine eigene Prüfung mit Gegenprüfung durch Unteragenten. Bei sicherheits- oder rechtsrelevanten Änderungen kommt Codex als zweiter Prüfer dazu. Menschliche Reviewer sind keine Pflicht.
4. **Merge** durch SiD oder durch Claude auf ausdrückliche Anweisung von SiD.
5. **Production** braucht ein Ja von SiD über das GitHub-Environment `production` (Required Reviewer).
6. **Eine Projektleitung.** Andere Claude-Sitzungen, Copilot-Agenten und Codex arbeiten nur über eigene Branches und Pull Requests und stimmen sich über diese Projektleitung ab.
7. **Fakten über das Geschäft** (Zahlen, Personen, Qualifikationen, Referenzen) gibt nur der Auftraggeber bzw. Marc Schneider-Handrup frei. Claude kennzeichnet unbelegte Aussagen und entfernt sie vor einer Veröffentlichung.

## Einrichtung in GitHub (nur Admin, einmalig)

1. **Settings → Rules → Rulesets → New branch ruleset**
   - Name: `main-schutz`, Enforcement: Active, Target: Default branch
   - Aktivieren: *Restrict deletions*, *Block force pushes*, *Require a pull request before merging* (Required approvals: 0), *Require status checks to pass* mit den beiden Checks aus Punkt 2
   - Optional: *Automatically request Copilot code review*
2. **Settings → Environments → production → Required reviewers:** `Darkness308`
3. **Settings → Code security:** Dependabot alerts und Secret scanning aktivieren (soweit für das Repo verfügbar)

## Konsequenzen

**Positiv:**
- Regeln werden technisch erzwungen statt nur dokumentiert.
- Kein Merge blockiert, weil ein zweiter Mensch fehlt.
- Parallele Agenten können nicht mehr unbemerkt auf `main` schreiben.

**Negativ / Risiko:**
- KI-Reviews ersetzen keine fachliche Prüfung durch einen Menschen. Für Recht (Impressum, Datenschutz, Werbeaussagen) bleibt eine externe Prüfung empfohlen.
- Die Leitplanken-Prüfungen sind Mustersuchen; sie fangen typische Fehler, aber nicht alle.

## Verweise
- SOP-001 (Commits), SOP-002 (Branching), SOP-005 (Gates)
- `docs/projekt/PLAN.md`, Abschnitt 1 und Engpass E3
- GitHub-Dokumentation zu Rulesets: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
