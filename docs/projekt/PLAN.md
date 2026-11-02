# Gesamtplan AMS Audio

| Feld | Wert |
|------|------|
| **Stand** | 2026-11-02 |
| **Verantwortlich** | Claude (Projektleitung) |
| **Freigabe** | SiD Consulting (Auftraggeber); Fakten über MSH Audio: Marc Schneider-Handrup |
| **Grundlage** | `PROJEKTAUFTRAG.md`, Dokumentenprüfung vom 2026-11-01, Web-Recherche Stylebook v2 vom 2026-11-01 (35 von 47 Aussagen vom Kritiker bestätigt, Korrekturen übernommen) |

## 1. Rollen und Mandate

Die bestehenden Dokumente (SOPs, ADRs, Agentenprofile) gehen von einem Entwicklerteam mit Reviewern aus. Das gibt es nicht. Neues Rollenmodell:

| Rolle | Wer | Aufgaben |
|-------|-----|----------|
| **Auftraggeber** | SiD Consulting (GitHub: Darkness308) | Entscheidet und gibt frei: Production, Marke, Merges. Eigentümer und Admin von Repo, Domain und Server. |
| **Betreiber** | Marc Schneider-Handrup (MSH Audio) | Diensteanbieter nach § 5 DDG und Verantwortlicher nach DSGVO für die Website. Gibt Fakten über das eigene Geschäft frei. Einziger Prüfer für Messwerte. |
| **Projektleitung** | Claude | Plant, delegiert an Agenten, entwirft, prüft, committet, dokumentiert. Fachlicher Sicherheitskontakt. Meldet Engpässe, bevor sie blockieren. |
| **Agenten** | Claude-Unteragenten | Recherche mit Quellen, Angriff und Gegenprüfung, Umsetzung. Nur mit Leitplanken; ändern nichts ohne Projektleitung. |
| **Reviewer** | GitHub Copilot, optional Codex | Automatische Code-Reviews auf jedem Pull Request; Codex als zweiter Prüfer bei Sicherheit und Recht. |
| **Rechtsanwalt** (extern, bei Bedarf) | offen | Prüfung von Impressum, Datenschutzerklärung, AGB, Werbeaussagen (UWG), Markenanmeldung. |
| **Steuerberater** (extern, bei Bedarf) | offen | Kleinunternehmerregelung, E-Rechnung, spätere Rechtsform von AMS Audio. |

**Freigabemodell**: siehe `docs/adr/ADR-0006-freigabe-und-leitplanken.md` (Proposed). Jede Änderung läuft über einen Pull Request mit grüner CI und Leitplanken-Prüfung. Production braucht ein Ja von SiD über das GitHub-Environment `production`.

## 2. Engpässe, nach Dringlichkeit

| # | Engpass | Warum er blockiert | Was es braucht | Wer |
|---|---------|--------------------|----------------|-----|
| E1 | **Zugänge** | Geklärt: SiD besitzt Repo, Domain und Server. Offen sind die Admin-Klicks aus ADR-0006 (Branch-Schutz, Freigabe für Production) und 2FA/Notfallzugang. | Einrichtung laut ADR-0006 | SiD |
| E2 | **Pflichtseiten** | Umgesetzt: Impressum (§ 5 DDG) und Datenschutzerklärung als statische Seiten, Angaben aus `src/content/site.json`. Geprüft am 2026-11-02: GitHub Pages leitet auf `ams-audio.com` weiter, die Domain zeigt die Squarespace-Platzhalterseite; die Seite ist also noch nirgends öffentlich. | Anwaltliche Prüfung der Texte (empfohlen) | SiD, extern optional |
| E3 | **Kein Freigabemodell für eine Person** | So wie in SOP-002 beschrieben, würde Branch-Schutz jeden Merge blockieren. Ohne ihn bleiben die Regeln Papier. | ADR-0006 (siehe oben), danach Einstellungen in GitHub | Claude, dann Auftraggeber |
| E4 | **Hosting** | Entschieden (ADR-0009): GitHub Pages als Übergang, danach der eigene Ubuntu-Server, den SiD und Claude gemeinsam einrichten. Go-Live ist die DNS-Umstellung bei Squarespace nach der Checkliste in ADR-0009. | Server gemeinsam vorbereiten; SSH-Zugang | SiD, Claude |
| E5 | **Unbelegte Aussagen** | Die neue Seite enthält nur belegte Inhalte (Nachweise in `src/content/site.json`). Gestrichen: Kennzahlen, „erste/revolutionäre iPad-App“, Normaussagen, „behördenfähig“, Morpheus. Offen: Urkunde für „Ton-Ingenieur“ (laut SiD „Ton-Ingenieur (FH)“, wird beschafft). Bis dahin sperrt `npm run golive`. | Urkunde | SiD, Marc Schneider-Handrup |
| E6 | **Gehärtete CI nicht auf `main`** | Production läuft noch mit den alten Workflows. Freigegeben: Pull Request nach `main`. | Merge nach grüner CI und Copilot-Review | SiD |
| E7 | **Lizenz** | Unter Vorbehalt auf „Alle Rechte vorbehalten“ umgestellt. Offen: vertragliche Aufteilung der Rechte zwischen SiD und MSH Audio. | Vereinbarung SiD und MSH Audio | SiD, Marc Schneider-Handrup |
| E8 | **Mehrere Agenten** | Entschieden: Copilot übernimmt Reviews, Codex optional. Umsetzung über ADR-0006 (eine Projektleitung, alles über Pull Requests). | Branch-Schutz aktivieren | SiD |
| E10 | **Repo ist öffentlich** | Das GitHub-Repo ist öffentlich (geprüft am 2026-11-01). Projektplan, Engpässe, rechtliche Einschätzungen und künftige Inhaltsbelege sind für jeden lesbar. Belege aus dem Drive (Referenzen, Vita) werden deshalb vorerst nicht im Repo abgelegt. | Entscheidung: Repo privat stellen (GitHub Pages braucht dann einen kostenpflichtigen Plan; entfällt mit dem eigenen Server) oder interne Dokumente in ein privates Repo verschieben | SiD |
| E9 | **Auftragsverarbeitung** | MSH Audio ist Betreiber, Repo-Account und Server gehören SiD. Verarbeitet SiD dabei personenbezogene Daten (Server-Logs, Kontaktformular), braucht es einen Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Für GitHub Pages bietet GitHub persönlichen Accounts keinen solchen Vertrag an (ADR-0009). | Vertrag MSH–SiD vor dem Umzug auf den Server; Vertrag mit dem E-Mail-Anbieter prüfen | SiD, Marc Schneider-Handrup, extern optional |

## 3. Phasen

| Phase | Inhalt | Voraussetzung |
|-------|--------|---------------|
| **0 Governance** | ADR-0006 Freigabemodell, ADR-0009 Hosting (entschieden), Lizenz, Zugänge klären, Branch-Schutz, Roadmap v2 mit Reifegradmatrix und Scorecard | E1, E3 |
| **1 Stylebook v2** | siehe Abschnitt 4 | fertig, PR #36 wartet auf den Merge |
| **2 Einfache Website** | Neuaufbau auf den Stylebook-Komponenten, Impressum und Datenschutz, nur belegte Inhalte, Go-Live-Prüfung; Go-Live über GitHub Pages (ADR-0009) | läuft; Go-Live wartet auf die Urkunde (E5) |
| **3 Server** | Gemeinsam mit SiD: Ubuntu absichern, Webserver mit HTTPS und Sicherheits-Headern, Deploy über Git | E1, E9 |
| **4 Umzug** | DNS umstellen, Abnahme | Phase 2 und 3 |
| **5 Daten** | SQLite und DuckDB | Phase 3 |
| **6 Wissen** | Vektorspeicher, RAG, semantische Suche | Phase 5 |
| **7 ERP/CRM** | Meilensteine mit Reifegrad. Erste Pflicht: E-Rechnungen empfangen und archivieren (seit 2025 für alle Unternehmer); Ausstellen spätestens ab 2028 | Phase 5, Steuerberater |
| **8 Cloud** | erst mit fertiger AcoustiScan-App | Phase 7 |

## 4. Stylebook v2 (Phase 1)

Entscheidungen der Projektleitung auf Basis der Recherche:

- **Token-Format**: eine Quelldatei im Format der Design-Tokens-Spezifikation 2025.10 (W3C Community Group), daraus erzeugte CSS-Variablen. Werkzeug: Terrazzo (fest gepinnt). Das Artifact „AMS Audio“ bleibt die lesbare Ansicht.
- **Themes**: Dunkel bleibt das Markenbild. Dazu kommt ein helles Theme, das auch für Druck, PDFs, Angebote und Rechnungen gebraucht wird.
- **Farbe**: Jede Textfarbe erreicht auf allen Untergründen mindestens 4,5:1 (WCAG 2.2 AA), Fließtext zielt auf 7:1. Die warme Stone-Optik bleibt.
- **Schrift**: Inter Variable 4.1 für Text und Bedienung, selbst gehostet. Fließtext mindestens Gewicht 400; Gewicht 300 erst ab 24 px, 200 erst ab 48 px. Eine eigene Display-Schrift wird in einem Marken-Review entschieden (Kandidaten aus der Recherche), blockiert aber nichts.
- **Markenarchitektur**: AMS Audio als Hauptmarke, MSH Audio als Absender („AMS Audio – ein Angebot von MSH Audio · Marc Schneider-Handrup“). Kein selbst vergebenes Siegel, kein „geprüft“ oder „zertifiziert von MSH Audio“ (Irreführungsgefahr nach § 5 UWG). Zulässig ist ein klar als eigenes Versprechen gekennzeichneter „MSH-Audio-Qualitätsstandard“.
- **Neue Kapitel**: Barrierefreiheit für Audio (kein Autoplay, Bedienelemente, Transkripte), Zahlen und Einheiten (Dezimalkomma, schmale Leerzeichen, Normschreibweise), Farben für Diagramme, Druck und Briefbogen, Sprachleitfaden mit Regeln für belegbare Werbeaussagen, Bildrechte, Pflege des Stylebooks (Versionen, automatische Prüfungen).
- **Schriften im Artifact**: Inter wird als Datei hochgeladen statt von Google Fonts geladen.
- **Logo**: fehlt. Vor einem Logo braucht es eine Markenrecherche (DPMA, EUIPO), weil „AMS“ im Audiobereich bereits genutzt wird (AMS Neve, ams-OSRAM). Für AcoustiScan gibt es eine ähnliche App („amscan“).

## 5. Offene Fragen

1. Urkunde für „Ton-Ingenieur (FH)“: genaue Bezeichnung laut Urkunde. Bis dahin ist der Go-Live gesperrt.
2. Soll zusätzlich `info@ams-audio.com` genannt werden, oder bleibt `marc.schneider@ams-audio.com` die Kontaktadresse?
3. Gibt es ein LinkedIn-Profil von Marc Schneider-Handrup, das als Beleg verlinkt werden kann?
4. Referenzen (ESC, IOC u. a.) erst mit Agentur-Formulierung und schriftlicher Zustimmung; bis dahin nicht auf der Seite.
