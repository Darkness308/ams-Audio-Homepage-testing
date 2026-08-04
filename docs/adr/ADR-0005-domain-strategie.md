# ADR-0005: Primäre Produktionsdomäne — www.ams-audio.com

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-08-04                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | —                           |

---

## Kontext

Aktuell:
- `public/CNAME` enthält `ams-audio.com` (Apex-Domain, ohne www)
- GitHub Pages liefert die Site unter `https://ams-audio.com`
- Die Deployment-Workflows nutzen `VITE_BASE_PATH=/ams-Audio-Homepage-testing/` als Fallback,
  was mit einer Custom Domain inkompatibel ist

**Problem mit Apex-Domain und GitHub Pages:**
GitHub Pages empfiehlt für Custom Domains die Verwendung von `www.ams-audio.com` (CNAME-Record)
statt der Apex-Domain (A-Records). Die Apex-Domain erfordert 4 A-Records und unterstützt kein
automatisches HTTPS-Redirect von `www` → Apex.

## Entscheidung

1. **`public/CNAME`** wird auf `www.ams-audio.com` gesetzt
2. **DNS-Konfiguration** (beim DNS-Provider):
   - `www` → CNAME → `darkness308.github.io`
   - Apex (`@`) → A-Records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Redirect: Apex → www (beim DNS-Provider konfigurieren)
3. **`VITE_BASE_PATH`** in Production: `'/'` (nicht `/ams-Audio-Homepage-testing/`),
   da Custom Domain das Repo-Subpath obsolet macht
4. **HTTPS** wird von GitHub Pages automatisch via Let's Encrypt bereitgestellt
5. **Staging** bleibt auf `https://darkness308.github.io/ams-Audio-Homepage-testing/staging/`

## Konsequenzen

**Positiv:**
- Professionelle Domain für Investor-Präsentationen und B2B-Kontakt
- HTTPS automatisch
- SEO-Vorteil gegenüber github.io Subdomain

**Negativ / Risiko:**
- DNS-Propagation dauert bis zu 48h
- `VITE_BASE_PATH` muss in deploy.yml angepasst werden (sonst 404 auf Assets)
- Staging und Preview Deployments müssen weiterhin den github.io Pfad nutzen

## Validierung
Nach DNS-Aktivierung: `curl -I https://www.ams-audio.com` muss `HTTP/2 200` zurückgeben.

## Verweise
- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- `public/CNAME`
- `.github/workflows/deploy.yml`
