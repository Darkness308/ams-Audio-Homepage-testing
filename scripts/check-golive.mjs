// Go-Live-Prüfung (ADR-0009): Die Website darf nur online gehen, wenn
//   1. jede Aussage in src/content/site.json einen belegten Nachweis hat,
//   2. alle Pflichtangaben für das Impressum (§ 5 DDG) gefüllt sind,
//   3. Impressum und Datenschutz existieren und von jeder Seite verlinkt sind,
//   4. keine unbelegten Werbeaussagen (§ 5 UWG) auf der Seite stehen.
// Aufruf: npm run golive   (läuft auch in npm run guardrails und vor jedem Production-Deploy)
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const fehler = []
const site = JSON.parse(readFileSync('src/content/site.json', 'utf8'))

// 1. Nachweise
for (const n of site.nachweise ?? []) {
  if (n.status !== 'belegt') fehler.push(`Nachweis offen: ${n.aussage} (${n.quelle ?? 'keine Quelle'})`)
}
const walk = (node, pfad) => {
  if (typeof node === 'string') {
    if (/\[OFFEN|TODO|XXX/i.test(node)) fehler.push(`Platzhalter in site.json: ${pfad} = „${node}“`)
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(v, pfad ? `${pfad}.${k}` : k)
  }
}
walk(site, '')

// 2. Pflichtangaben Impressum
for (const feld of ['name', 'geschaeftsbezeichnung', 'strasse', 'plz', 'ort', 'telefon', 'telefonLink', 'email', 'ustId']) {
  if (!String(site.anbieter?.[feld] ?? '').trim()) fehler.push(`Pflichtangabe fehlt: anbieter.${feld}`)
}
if (site.anbieter?.ustId && !/^DE\d{9}$/.test(site.anbieter.ustId)) fehler.push('anbieter.ustId hat nicht das Format DE + 9 Ziffern')

// 3. Rechtsseiten und Verlinkung
const seiten = {
  'index.html': readFileSync('index.html', 'utf8'),
  'impressum/index.html': existsSync('impressum/index.html') ? readFileSync('impressum/index.html', 'utf8') : null,
  'datenschutz/index.html': existsSync('datenschutz/index.html') ? readFileSync('datenschutz/index.html', 'utf8') : null,
  'src/site/Startseite.tsx': readFileSync('src/site/Startseite.tsx', 'utf8'),
}
for (const [datei, inhalt] of Object.entries(seiten)) {
  if (inhalt === null) { fehler.push(`Seite fehlt: ${datei}`); continue }
  if (!/impressum\//.test(inhalt)) fehler.push(`${datei}: kein Link zum Impressum`)
  if (!/datenschutz\//.test(inhalt)) fehler.push(`${datei}: kein Link zur Datenschutzerklärung`)
}
if (seiten['impressum/index.html'] && !seiten['impressum/index.html'].includes('§ 5 DDG')) fehler.push('Impressum: Bezug auf § 5 DDG fehlt')
for (const feld of ['name', 'strasse', 'plz', 'ort', 'telefon', 'email', 'ustId']) {
  if (seiten['impressum/index.html'] && !seiten['impressum/index.html'].includes(`{{anbieter.${feld}}}`)) fehler.push(`Impressum: anbieter.${feld} wird nicht angezeigt`)
}

// 4. Unbelegte Werbeaussagen (Liste aus docs/projekt/PLAN.md, E5). Gilt für alles, was die Website ausliefert.
const verboten = [
  [/revolution/i, 'Superlativ „revolutionär“'],
  [/\b(die|der|das)\s+erste\b/i, 'Alleinstellung „die/der/das erste“'],
  [/zertifiziert|DIN[\s-]*konform|normkonform/i, 'Zertifizierungs- oder Normaussage'],
  [/behördenfähig/i, '„behördenfähig“'],
  [/Morpheus/i, 'unbelegte Partnerschaft'],
  [/\d+\s*\+\s*(Projekte|Partner)|\d+\s*%\s*(Erfolg|CO)/i, 'unbelegte Kennzahl'],
  [/Olymp/i, 'olympische Bezeichnung (OlympSchG)'],
]
const auszuliefern = ['index.html', 'src/site/Startseite.tsx', 'src/App.tsx', 'src/content/site.json', 'impressum/index.html']
for (const datei of auszuliefern) {
  const text = readFileSync(datei, 'utf8')
  for (const [muster, grund] of verboten) {
    const treffer = text.match(muster)
    // In den Nachweisen von site.json darf ein Begriff erklärt werden, auf der Seite nicht.
    if (treffer && !(datei === 'src/content/site.json' && JSON.stringify(site.nachweise).includes(treffer[0]))) {
      fehler.push(`${datei}: ${grund} („${treffer[0]}“)`)
    }
  }
}
// Die Datenschutzerklärung nennt die DPF-Zertifizierung von GitHub; dort nur die übrigen Muster prüfen.
const ds = seiten['datenschutz/index.html'] ?? ''
for (const [muster, grund] of verboten.filter(([, g]) => !g.startsWith('Zertifizierung'))) {
  const treffer = ds.match(muster)
  if (treffer) fehler.push(`datenschutz/index.html: ${grund} („${treffer[0]}“)`)
}
// Keine weiteren HTML-Seiten ohne Prüfung
for (const ordner of readdirSync('.', { withFileTypes: true })) {
  if (ordner.isDirectory() && !['node_modules', 'dist', '.git', 'docs', 'public', 'src', 'impressum', 'datenschutz'].includes(ordner.name) && existsSync(join(ordner.name, 'index.html'))) {
    fehler.push(`Unbekannte Seite ${ordner.name}/index.html: in check-golive.mjs aufnehmen`)
  }
}

if (fehler.length) {
  console.error('✗ Go-Live gesperrt:')
  for (const f of fehler) console.error(`  - ${f}`)
  console.error('\nDie Website geht erst online, wenn alle Punkte erledigt sind (ADR-0009).')
  process.exit(1)
}
console.log('✓ Go-Live-Prüfung bestanden: Nachweise belegt, Pflichtangaben vollständig, Rechtsseiten verlinkt, keine unbelegten Werbeaussagen')
