# Gesamtplan AMS Audio

| Feld | Wert |
|------|------|
| **Stand** | 2026-11-01 |
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
| E2 | **Pflichtseiten fehlen** | Die Domain ist nicht live. Der Workflow `deploy.yml` veröffentlicht aber bei jedem Push auf `main` auf GitHub Pages; ob die Seite dort öffentlich erreichbar ist, muss in den Pages-Einstellungen geprüft werden. „AMS Audio Group“ und „Ruhrgebiet“ sind korrigiert. | Pages-Einstellung prüfen; Impressum und Datenschutz vor jedem Livegang | SiD, Claude |
| E3 | **Kein Freigabemodell für eine Person** | So wie in SOP-002 beschrieben, würde Branch-Schutz jeden Merge blockieren. Ohne ihn bleiben die Regeln Papier. | ADR-0006 (siehe oben), danach Einstellungen in GitHub | Claude, dann Auftraggeber |
| E4 | **Hosting-Entscheidung offen** | ADR-0005 und alle Workflows setzen auf GitHub Pages, der Auftrag auf den eigenen Ubuntu-Server (gehört SiD, installiert, nicht eingerichtet). Die Domain ist noch nicht live. Sicherheits-Header und das RAG-Backend gehen nur mit eigenem Server. | ADR-0008 Hosting; SSH-Zugang zum Server | Claude, SiD |
| E5 | **Unbelegte Aussagen** | Geklärt: 25 Jahre Erfahrung, Steffen entfernt, SiD stimmt der Nennung zu. Offen: „500+ Projekte“, „98 % Erfolgsquote“, „50+ Partner“, „erste iPad-App“, Berechtigung zum Titel „Ingenieur“ (Ingenieurgesetz NRW). Werbeaussagen müssen belegbar sein (§ 5 UWG). | Belege oder Streichung | Marc Schneider-Handrup |
| E6 | **Gehärtete CI nicht auf `main`** | Production läuft noch mit den alten Workflows. Freigegeben: Pull Request nach `main`. | Merge nach grüner CI und Copilot-Review | SiD |
| E7 | **Lizenz** | Unter Vorbehalt auf „Alle Rechte vorbehalten“ umgestellt. Offen: vertragliche Aufteilung der Rechte zwischen SiD und MSH Audio. | Vereinbarung SiD und MSH Audio | SiD, Marc Schneider-Handrup |
| E8 | **Mehrere Agenten** | Entschieden: Copilot übernimmt Reviews, Codex optional. Umsetzung über ADR-0006 (eine Projektleitung, alles über Pull Requests). | Branch-Schutz aktivieren | SiD |
| E9 | **Auftragsverarbeitung** | MSH Audio ist Betreiber, der Server gehört SiD. Verarbeitet SiD dabei personenbezogene Daten (Server-Logs, Kontaktformular), braucht es einen Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). | Vertrag vor dem Umzug auf den Server | SiD, Marc Schneider-Handrup, extern optional |

## 3. Phasen

| Phase | Inhalt | Voraussetzung |
|-------|--------|---------------|
| **0 Governance** | ADR-0006 Freigabemodell, ADR-0008 Hosting, Lizenz, Zugänge klären, Branch-Schutz, Roadmap v2 mit Reifegradmatrix und Scorecard | E1, E3 |
| **1 Stylebook v2** | siehe Abschnitt 4 | läuft |
| **2 Einfache Website** | Neuaufbau auf dem Stylebook, Tailwind v4, Impressum und Datenschutz, nur belegte Inhalte | E2, E5, Phase 1 |
| **3 Server** | Ubuntu absichern, Webserver mit HTTPS und Sicherheits-Headern, Deploy über Git | E1, E4 |
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

1. Darf Marc Schneider-Handrup den Titel „Ingenieur“ führen (Abschluss oder Anerkennung nach Ingenieurgesetz NRW)? Bis zur Klärung erscheint der Titel nicht auf der neuen Seite.
2. Welche Belege gibt es für „500+ Projekte“, „98 % Erfolgsquote“ und „50+ Partner“? Unbelegte Zahlen kommen nicht auf die neue Seite.
3. Ist GitHub Pages für das Repo aktiv, und ist die Seite unter darkness308.github.io öffentlich erreichbar?
4. Gibt es ein LinkedIn-Profil von Marc Schneider-Handrup, das als Beleg verlinkt werden kann?
