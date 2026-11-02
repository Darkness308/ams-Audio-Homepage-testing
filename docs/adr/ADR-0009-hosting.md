# ADR-0009: Hosting — GitHub Pages als Übergang, danach eigener Server

| Feld        | Wert                    |
|-------------|-------------------------|
| **Status**  | Accepted                |
| **Datum**   | 2026-11-02              |
| **Autor**   | Claude (Projektleitung) |
| **Entscheidung** | SiD Consulting (Auftraggeber), Projektchat 2026-11-02 |
| **Ersetzt** | —                       |

---

## Kontext

Stand der Prüfung vom 2026-11-02:

- **Domain:** `ams-audio.com` wird von Squarespace beantwortet (HTTP-Header `server: Squarespace`). Ausgeliefert wird die Squarespace-Platzhalterseite „Demnächst verfügbar – Diese Seite befindet sich im Aufbau“. Wo die Domain registriert ist, konnte nicht abgefragt werden (Registry-Abfrage aus der Arbeitsumgebung gesperrt).
- **GitHub Pages** ist aktiv. In den Repo-Einstellungen ist `ams-audio.com` (ohne www) als eigene Domain eingetragen. Deshalb leitet `darkness308.github.io/ams-Audio-Homepage-testing/` mit 301 auf `http://ams-audio.com/` weiter. Die gebaute Seite ist dadurch nirgends öffentlich zu sehen.
- **`public/CNAME`** enthält `www.ams-audio.com`. Bei Veröffentlichung über einen eigenen Actions-Workflow wird die Datei ignoriert: „If you are publishing from a custom GitHub Actions workflow, no CNAME file is created, and any existing CNAME file is ignored and is not required.“ (GitHub Docs, *Managing a custom domain*). Maßgeblich ist nur die Einstellung im Repo.
- **Server:** Ubuntu ist auf dem Server von SiD installiert, aber nicht eingerichtet. SiD und die Projektleitung bereiten ihn gemeinsam vor.
- **Rahmen aus der Recherche** (Quellen unten):
  - GitHub protokolliert und speichert die IP-Adresse jedes Besuchers einer Pages-Seite zu Sicherheitszwecken. Wie lange, gibt GitHub nicht an.
  - Für persönliche Accounts ist kein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO) von GitHub erkennbar. GitHub ordnet sich selbst als Verantwortlicher ein.
  - Laut den Nutzungsgrenzen ist GitHub Pages „not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service“.

## Entscheidung

1. **Übergang auf GitHub Pages.** Die einfache Website (Phase 2) geht über den bestehenden Workflow `deploy.yml` auf GitHub Pages online. Sie ist eine Visitenkarte ohne Verkauf, Formulare oder Konten.
2. **Eigener Server danach.** Sobald der Ubuntu-Server gemeinsam eingerichtet ist (Phase 3), zieht die Seite um (Phase 4). Dafür kommt ein eigenes ADR (Webserver, HTTPS, Sicherheits-Header, Deploy über Git). Beim Umzug ändert sich der Hoster, die Datenschutzerklärung muss dann angepasst werden.
3. **Domain:** `www.ams-audio.com` ist die Hauptadresse (wie ADR-0005). `ams-audio.com` leitet automatisch auf www weiter, wenn beide DNS-Einträge gesetzt sind.
4. **Rechtsseiten als statisches HTML.** Impressum (`/impressum/`) und Datenschutz (`/datenschutz/`) brauchen kein JavaScript. Alle Angaben kommen aus `src/content/site.json`.
5. **Go-Live nur mit grüner Prüfung.** `npm run golive` (`scripts/check-golive.mjs`) läuft in den Leitplanken jedes Pull Requests und vor jedem Production-Deploy. Die Prüfung sperrt, solange ein Nachweis offen ist, Pflichtangaben fehlen, Rechtsseiten nicht verlinkt sind oder unbelegte Werbeaussagen auf der Seite stehen.
6. **Der eigentliche Go-Live ist die DNS-Umstellung.** Sie macht SiD nach der Checkliste unten, erst wenn Punkt 5 erfüllt ist.

Abweichend von ADR-0007, Punkt 7, nutzt die Website die Tokens ohne Tailwind: `src/styles/seiten.css` lädt `tokens.css`, die Stylebook-Komponenten (`docs/design-system/components/bundle.css`) und das Seitenlayout. Tailwind v4 ist damit vorerst nicht nötig.

## Go-Live-Checkliste

Reihenfolge einhalten. Die Werte stammen aus den GitHub Docs (Quellen unten).

1. Pull Request mit der Website ist gemergt, `npm run golive` ist grün und der Production-Deploy auf `main` ist erfolgreich.
2. **Domain bei GitHub verifizieren** (Schutz vor Übernahme): GitHub → Profil-Einstellungen → Pages → „Add a domain“ → `ams-audio.com`. Den angezeigten TXT-Eintrag (`_github-pages-challenge-…`) bei Squarespace anlegen, dann „Verify“. Kann bis zu 24 Stunden dauern.
3. **DNS bei Squarespace umstellen:**
   - Die Squarespace-Standardeinträge für `@` und `www` (Platzhalterseite) entfernen.
   - Für `@` vier A-Einträge setzen: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Für `@` vier AAAA-Einträge setzen: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
   - Für `www` einen CNAME auf `darkness308.github.io` setzen (ohne Repo-Namen).
   - **MX-Einträge und E-Mail-TXT-Einträge (SPF, DKIM, DMARC) nicht anfassen**, sonst kommen keine E-Mails mehr an. Vorher einen Screenshot aller Einträge machen.
4. **GitHub-Repo → Settings → Pages → Custom domain:** `www.ams-audio.com` eintragen (statt `ams-audio.com`) und speichern. Die DNS-Prüfung abwarten.
5. **„Enforce HTTPS“** einschalten, sobald GitHub es anbietet (bis zu 24 Stunden).
6. **Abnahme:**
   - `https://www.ams-audio.com` zeigt die neue Seite.
   - `https://ams-audio.com` leitet auf www weiter.
   - Impressum und Datenschutz sind von jeder Seite erreichbar.
   - Je eine Test-E-Mail an beide Adressen aus dem Impressum kommt an.

## Konsequenzen

**Positiv:**
- Die Seite kann ohne Server online gehen, sobald der letzte Nachweis vorliegt.
- Unbelegte Aussagen und fehlende Pflichtangaben können nicht versehentlich online gehen.
- Ein Hosterwechsel betrifft nur DNS und Deploy, nicht die Seite selbst.

**Negativ / Risiko:**
- **Nutzungsbedingungen:** Ob eine Unternehmens-Visitenkarte unter die Einschränkung der GitHub-Pages-Grenzen fällt, ist nicht geklärt. Das Risiko trifft das Hosting, nicht das Impressum. Gegenmittel: zügiger Umzug auf den eigenen Server.
- **Datenschutz:** GitHub speichert IP-Adressen ohne angegebene Frist, und es gibt keinen Vertrag zur Auftragsverarbeitung für persönliche Accounts. Die Datenschutzerklärung beschreibt das. Eine anwaltliche Prüfung wird empfohlen.
- **Sicherheits-Header:** Auf GitHub Pages ist nur die Content-Security-Policy per Meta-Tag möglich. HSTS, `X-Frame-Options` und ähnliche Header gehen erst mit dem eigenen Server.
- **E-Mail:** Ein Fehler bei der DNS-Umstellung kann den E-Mail-Empfang unterbrechen. Gegenmittel: Checkliste, Screenshot vorher, Test-E-Mails danach.
- **Berufsbezeichnung:** „Ton-Ingenieur“ ist nach dem Ingenieurgesetz NRW geschützt. Die Urkunde wird beschafft, bis dahin sperrt die Go-Live-Prüfung. Offen ist außerdem, ob die Bezeichnung zusätzliche Impressumsangaben nach § 5 Abs. 1 Nr. 5 DDG (reglementierte Berufe) auslöst; das gehört zur anwaltlichen Prüfung.

## Nachtrag 2026-11-02 (PR #38)

Abweichend von Entscheidung 5 läuft `npm run golive` nicht mehr in `npm run guardrails`. Die Prüfung ist jetzt ein eigener CI-Check „Go-Live-Freigabe“ in jedem Pull Request (`guardrails.yml`, Job `golive`) und weiterhin Pflichtschritt vor jedem Production-Deploy (`deploy.yml`). Grund: Seit die Website auf `main` liegt, hätte eine offene Freigabe sonst jeden Pull Request rot gefärbt. Der Check ist bewusst kein Pflicht-Check im Branch-Schutz (ADR-0006); die Sperre der Veröffentlichung liegt im Deploy.

## Verweise

- ADR-0005 (Domain), ADR-0006 (Leitplanken), ADR-0007 (Design-Tokens)
- `src/content/site.json`, `scripts/check-golive.mjs`, `impressum/index.html`, `datenschutz/index.html`
- GitHub Docs, Managing a custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub Docs, Verifying your custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- GitHub Docs, Securing your site with HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- GitHub Docs, Data collection: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection
- GitHub Docs, GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub Customer Terms (DPA nur für Enterprise, Team, Copilot): https://github.com/customer-terms
