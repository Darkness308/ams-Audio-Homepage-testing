# Gesamtplan AMS Audio

| Feld | Wert |
|------|------|
| **Stand** | 2026-11-01 |
| **Verantwortlich** | Claude (Projektleitung) |
| **Freigabe** | Marc Schneider-Handrup (Auftraggeber) |
| **Grundlage** | `PROJEKTAUFTRAG.md`, Dokumentenprüfung vom 2026-11-01, Web-Recherche Stylebook v2 vom 2026-11-01 (35 von 47 Aussagen vom Kritiker bestätigt, Korrekturen übernommen) |

## 1. Rollen und Mandate

Die bestehenden Dokumente (SOPs, ADRs, Agentenprofile) gehen von einem Entwicklerteam mit Reviewern aus. Das gibt es nicht. Neues Rollenmodell:

| Rolle | Wer | Aufgaben |
|-------|-----|----------|
| **Auftraggeber** | Marc Schneider-Handrup | Entscheidet und gibt frei: Production, veröffentlichte Texte, Fakten über das Geschäft, Marke. Admin für GitHub, Domain/DNS und Server. Verantwortlicher nach DSGVO und Diensteanbieter nach § 5 DDG. Einziger Prüfer für Messwerte. |
| **Projektleitung** | Claude | Plant, delegiert an Agenten, entwirft, prüft, committet, dokumentiert. Fachlicher Sicherheitskontakt. Meldet Engpässe, bevor sie blockieren. |
| **Agenten** | Claude-Unteragenten | Recherche mit Quellen, Angriff und Gegenprüfung, Umsetzung. Nur mit Leitplanken; ändern nichts ohne Projektleitung. |
| **Rechtsanwalt** (extern, bei Bedarf) | offen | Prüfung von Impressum, Datenschutzerklärung, AGB, Werbeaussagen (UWG), Markenanmeldung. |
| **Steuerberater** (extern, bei Bedarf) | offen | Kleinunternehmerregelung, E-Rechnung, spätere Rechtsform von AMS Audio. |

**Freigabemodell** (wird ADR-0006): Jede Änderung läuft über einen Pull Request. Pflicht sind grüne CI und ein dokumentierter Claude-Review mit Gegenprüfung. Production braucht zusätzlich ein Ja des Auftraggebers über das GitHub-Environment `production`. Zwei menschliche Reviewer werden gestrichen, weil das bei einer Person jeden Merge blockiert.

## 2. Engpässe, nach Dringlichkeit

| # | Engpass | Warum er blockiert | Was es braucht | Wer |
|---|---------|--------------------|----------------|-----|
| E1 | **Zugänge und Eigentum** | Repo und Lizenz laufen auf das GitHub-Konto „Darkness308“. Ohne Admin-Zugang zu GitHub, Registrar/DNS und Server kann nichts davon scharfgeschaltet oder umgezogen werden. | Klären, wem Konto, Repo und Domain gehören; 2FA und Notfallzugang | Auftraggeber |
| E2 | **Pflichtseiten fehlen auf der öffentlichen Seite** | Impressum und Datenschutz sind nur Text ohne Link. Die Seite nennt „AMS Audio Group“ (gibt es nicht) und „Ruhrgebiet“ statt Nachrodt-Wiblingwerde. | Pflichtangaben vom Auftraggeber; Entwurf durch Claude; externe Prüfung empfohlen | Auftraggeber, Claude, extern |
| E3 | **Kein Freigabemodell für eine Person** | So wie in SOP-002 beschrieben, würde Branch-Schutz jeden Merge blockieren. Ohne ihn bleiben die Regeln Papier. | ADR-0006 (siehe oben), danach Einstellungen in GitHub | Claude, dann Auftraggeber |
| E4 | **Hosting-Entscheidung offen** | ADR-0005 und alle Workflows setzen auf GitHub Pages, der Auftrag auf den eigenen Ubuntu-Server. Sicherheits-Header und das RAG-Backend gehen nur mit eigenem Server. | ADR-0007; klären, was heute unter ams-audio.com läuft | Claude, Auftraggeber |
| E5 | **Unbelegte Aussagen live** | „15+ Jahre“ (Seite) gegenüber „über 25 Jahre“ (Auftrag), „500+ Projekte“, „98 % Erfolgsquote“, „erste iPad-App“, „Ton-Ingenieur“ (Titel in NRW geschützt), Personen ohne Einwilligung. Werbeaussagen müssen belegbar sein (§ 5 UWG). | Bestätigung oder Streichung jeder Aussage | Auftraggeber |
| E6 | **Gehärtete CI nicht auf `main`** | Production läuft noch mit den alten Workflows (breite Rechte, ungepinnte Actions). Die Verbesserungen liegen nur auf dem Arbeitsbranch. | Pull Request nach `main` | Freigabe Auftraggeber |
| E7 | **Lizenz passt nicht** | MIT erlaubt jedem, Texte, Design und Code zu kopieren und zu verkaufen. Rechteinhaber ist ein GitHub-Konto, nicht MSH Audio. | Wechsel auf „alle Rechte vorbehalten“ | Freigabe Auftraggeber |
| E8 | **Mehrere Agenten arbeiten parallel** | Eine andere Claude-Sitzung und Copilot haben am 2026-10-31 auf `main` gemergt; der Arbeitsbranch hatte dadurch Konflikte. | Eine Projektleitung, alles über Pull Requests | Auftraggeber entscheidet |

## 3. Phasen

| Phase | Inhalt | Voraussetzung |
|-------|--------|---------------|
| **0 Governance** | ADR-0006 Freigabemodell, ADR-0007 Hosting, Lizenz, Zugänge klären, Branch-Schutz, Roadmap v2 mit Reifegradmatrix und Scorecard | E1, E3 |
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

## 5. Offene Fragen an den Auftraggeber

1. Heißt die Straße „Am Berkenstück 1“ oder „Berkenstück 1“?
2. Wem gehören das GitHub-Konto „Darkness308“, die Domain ams-audio.com und der Server? Wer hat Admin-Zugang?
3. Was läuft heute unter ams-audio.com: GitHub Pages oder der Windows-11-Rechner?
4. Welche Zahlen auf der Seite sind belegbar (Jahre Erfahrung, Projekte, Erfolgsquote, Partner)? Unbelegte werden entfernt.
5. Sollen „Steffen“ und „SiD Consulting“ auf der Seite bleiben? Dafür braucht es ihre Einwilligung.
6. Darf Marc den Titel „Ingenieur“ führen (Ingenieurgesetz NRW)?
7. Freigabe für einen Pull Request nach `main` und für den Lizenzwechsel?
8. Sollen Copilot und andere Claude-Sitzungen weiter direkt am Repo arbeiten?
