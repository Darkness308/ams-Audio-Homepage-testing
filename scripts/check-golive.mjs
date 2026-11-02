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

// 1. Nachweise: Block vorhanden, jeder Eintrag vollständig und belegt, jedes Feld abgedeckt
const nachweise = Array.isArray(site.nachweise) ? site.nachweise : []
if (nachweise.length === 0) fehler.push('site.json: Block „nachweise“ fehlt oder ist leer')
for (const [i, n] of nachweise.entries()) {
  for (const feld of ['aussage', 'status', 'quelle']) {
    if (typeof n?.[feld] !== 'string' || !n[feld].trim()) fehler.push(`nachweise[${i}]: „${feld}“ fehlt`)
  }
  if (!Array.isArray(n?.felder) || n.felder.length === 0) fehler.push(`nachweise[${i}]: „felder“ fehlt (welche Angaben deckt der Nachweis ab?)`)
  if (n?.status !== 'belegt') fehler.push(`Nachweis offen: ${n?.aussage} (${n?.quelle ?? 'keine Quelle'})`)
}
// Alle Blätter von site.json außer Verwaltungsfeldern sammeln
const ohneNachweis = new Set(['stand', 'nachweise'])
const blaetter = []
const walk = (node, pfad) => {
  if (typeof node === 'string') {
    if (/\[OFFEN|TODO|XXX/i.test(node)) fehler.push(`Platzhalter in site.json: ${pfad} = „${node}“`)
    blaetter.push(pfad)
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (!pfad && (k.startsWith('$') || ohneNachweis.has(k))) continue
      walk(v, pfad ? `${pfad}.${k}` : k)
    }
  }
}
walk(site, '')
const abgedeckt = nachweise.flatMap((n) => (Array.isArray(n?.felder) ? n.felder : []))
for (const f of abgedeckt) {
  if (!blaetter.some((b) => b === f || b.startsWith(`${f}.`))) fehler.push(`nachweise: Feld „${f}“ gibt es in site.json nicht`)
}
for (const b of blaetter) {
  if (!abgedeckt.some((f) => b === f || b.startsWith(`${f}.`))) fehler.push(`site.json: „${b}“ ist von keinem Nachweis abgedeckt`)
}
// Platzhalter in Texten müssen auflösbar sein
const lookup = (key) => key.split('.').reduce((node, part) => node?.[part], site)
for (const b of blaetter) {
  const wert = lookup(b)
  for (const [, key] of wert.matchAll(/\{\{\s*([\w.]+)\s*\}\}/g)) {
    if (typeof lookup(key) !== 'string') fehler.push(`site.json: ${b} verweist auf unbekannten Schlüssel „${key}“`)
  }
}

// 2. Pflichtangaben Impressum
for (const feld of ['name', 'geschaeftsbezeichnung', 'strasse', 'plz', 'ort', 'telefon', 'telefonLink', 'email', 'ustId']) {
  if (!String(site.anbieter?.[feld] ?? '').trim()) fehler.push(`Pflichtangabe fehlt: anbieter.${feld}`)
}
// Deutsche USt-IdNr.: DE + 9 Ziffern, letzte Ziffer ist die Prüfziffer nach ISO 7064 MOD 11,10
const ustIdGueltig = (id) => {
  if (!/^DE\d{9}$/.test(id)) return false
  let produkt = 10
  for (const ziffer of id.slice(2, 10)) {
    let summe = (Number(ziffer) + produkt) % 10
    if (summe === 0) summe = 10
    produkt = (2 * summe) % 11
  }
  return (11 - produkt) % 10 === Number(id[10])
}
if (site.anbieter?.ustId && !ustIdGueltig(site.anbieter.ustId)) fehler.push('anbieter.ustId: Format (DE + 9 Ziffern) oder Prüfziffer (ISO 7064 MOD 11,10) stimmt nicht')

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
