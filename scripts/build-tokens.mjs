// Erzeugt aus tokens/ams.tokens.json (DTCG 2025.10) zwei Dateien:
//   src/styles/tokens.css            CSS-Variablen für die Website (Themes dunkel und hell)
//   docs/design-system/tokens.json   Tokens im Format des Stylebook-Artifacts
// Aufruf: npm run tokens   ·   Prüfung ohne Schreiben: npm run tokens -- --check
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const SRC = 'tokens/ams.tokens.json'
const OUT_CSS = 'src/styles/tokens.css'
const OUT_DS = 'docs/design-system/tokens.json'
const check = process.argv.includes('--check')

const root = JSON.parse(readFileSync(SRC, 'utf8'))

// Alle Tokens mit Pfad und geerbtem $type einsammeln.
const flat = new Map()
function walk(node, path, inheritedType) {
  const type = node.$type ?? inheritedType
  if ('$value' in node) {
    flat.set(path.join('.'), { ...node, $type: type, path })
    return
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue
    walk(child, [...path, key], type)
  }
}
walk(root, [], undefined)

function resolve(value, seen = []) {
  if (typeof value === 'string' && /^\{[^}]+\}$/.test(value)) {
    const key = value.slice(1, -1)
    if (seen.includes(key)) throw new Error(`Zirkulärer Alias: ${[...seen, key].join(' → ')}`)
    const target = flat.get(key)
    if (!target) throw new Error(`Alias ohne Ziel: ${value}`)
    return resolve(target.$value, [...seen, key])
  }
  return value
}

const num = (n) => Number(n.toFixed(4)).toString()
const cssColor = (c) => {
  const [l, ch, h] = c.components
  const alpha = c.alpha !== undefined && c.alpha !== 1 ? ` / ${num(c.alpha)}` : ''
  return `oklch(${num(l)} ${num(ch)} ${num(h)}${alpha})`
}
const dsColor = (c) => {
  if (c.alpha === undefined || c.alpha === 1) return c.hex
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(c.hex.slice(i, i + 2), 16))
  return `rgba(${r},${g},${b},${num(c.alpha)})`
}
const cssDim = (d) => `${num(d.value)}${d.unit}`
const pxOf = (d) => (d.unit === 'rem' ? d.value * 16 : d.value)
const fluid = (min, max) => {
  // Linear zwischen 320px und 1280px Viewport; rem-Anteil hält Browser-Zoom wirksam (WCAG 1.4.4, F94).
  const slope = (max.value - min.value) / 60
  const base = min.value - slope * 20
  return `clamp(${num(min.value)}rem, ${num(base)}rem + ${num(slope * 100)}vw, ${num(max.value)}rem)`
}
const family = (list) => list.map((f) => (/[\s-]/.test(f) && !/^[a-z-]+$/.test(f) ? `"${f}"` : f)).join(', ')

// ---------- CSS ----------
const lines = []
const themeVars = (theme) =>
  [...flat.values()]
    .filter((t) => t.path[0] === 'color' && t.path[1] === 'theme' && t.path[2] === theme)
    .map((t) => `  --color-${t.path[3]}: ${cssColor(resolve(t.$value))};`)

lines.push('/* AMS Audio — erzeugt aus tokens/ams.tokens.json. Nicht von Hand bearbeiten: npm run tokens */')
lines.push('')
lines.push(':root,\n[data-theme="dark"] {', '  color-scheme: dark;', ...themeVars('dark'), '}')
lines.push('')
lines.push('[data-theme="light"] {', '  color-scheme: light;', ...themeVars('light'), '}')
lines.push('')
lines.push('@media print {', '  :root {', '    color-scheme: light;', ...themeVars('light').map((l) => '  ' + l), '  }', '}')
lines.push('')

const scalar = []
for (const t of flat.values()) {
  const [group, ...rest] = t.path
  const name = rest.join('-')
  const v = resolve(t.$value)
  if (group === 'space' || group === 'radius' || group === 'size') scalar.push(`  --${group}-${name}: ${cssDim(v)};`)
  else if (group === 'font') scalar.push(`  --font-${rest[rest.length - 1]}: ${family(v)};`)
  else if (group === 'shadow') scalar.push(`  --shadow-${name}: ${cssDim(v.offsetX)} ${cssDim(v.offsetY)} ${cssDim(v.blur)} ${cssDim(v.spread)} ${cssColor(v.color)};`)
  else if (group === 'motion' && rest[0] === 'duration') scalar.push(`  --duration-${rest[1]}: ${v.value}${v.unit};`)
  else if (group === 'motion' && rest[0] === 'easing') scalar.push(`  --ease-${rest[1]}: cubic-bezier(${v.join(', ')});`)
}
const typeClasses = []
for (const t of flat.values()) {
  if (t.path[0] !== 'typography') continue
  const name = t.path[1]
  const v = resolve(t.$value)
  const ext = t.$extensions?.['com.ams-audio'] ?? {}
  const size = ext.fluid ? fluid(ext.fluid.min, ext.fluid.max) : cssDim(v.fontSize)
  scalar.push(`  --text-${name}: ${size};`)
  typeClasses.push(
    `.type-${name} {`,
    `  font-family: ${family(resolve(v.fontFamily))};`,
    `  font-size: var(--text-${name});`,
    `  font-weight: ${v.fontWeight};`,
    `  line-height: ${v.lineHeight};`,
    ...(v.letterSpacing.value !== 0 ? [`  letter-spacing: ${cssDim(v.letterSpacing)};`] : []),
    ...(ext.textTransform ? [`  text-transform: ${ext.textTransform};`] : []),
    '}',
  )
}
lines.push(':root {', ...scalar, '}', '')
lines.push('@media (prefers-reduced-motion: reduce) {', '  :root {', '    --duration-fast: 0ms;', '    --duration-medium: 0ms;', '    --duration-slow: 0ms;', '  }', '}', '')
lines.push(...typeClasses, '')
const css = lines.join('\n')

// ---------- Stylebook-Artifact ----------
const ds = existsSync(OUT_DS) ? JSON.parse(readFileSync(OUT_DS, 'utf8')) : {}
const colorTokens = []
const themeKeys = [...flat.values()].filter((t) => t.path[1] === 'theme' && t.path[2] === 'dark')
for (const t of themeKeys) {
  const key = t.path[3]
  const light = flat.get(`color.theme.light.${key}`)
  colorTokens.push({
    name: key,
    value: { dark: dsColor(resolve(t.$value)), light: dsColor(resolve(light.$value)) },
    usage: [t.$description, light.$description && light.$description !== t.$description ? `Hell: ${light.$description}` : null].filter(Boolean).join(' ') || `Semantische Farbe ${key}.`,
  })
}
for (const t of flat.values()) {
  if (t.path[1] !== 'primitive') continue
  const name = t.path.slice(2).join('-')
  colorTokens.push({ name: `p-${name}`, value: dsColor(resolve(t.$value)), usage: `Primitive ${name}${t.$description ? ` (${t.$description})` : ''}. Nicht direkt in Komponenten verwenden, nur über semantische Tokens.` })
}
const styles = [...flat.values()].filter((t) => t.path[0] === 'typography').map((t) => {
  const v = resolve(t.$value)
  const ext = t.$extensions?.['com.ams-audio'] ?? {}
  return {
    name: t.path[1],
    fontSize: `${pxOf(v.fontSize)}px`,
    lineHeight: v.lineHeight,
    fontWeight: v.fontWeight,
    ...(v.letterSpacing.value !== 0 ? { letterSpacing: `${num(pxOf(v.letterSpacing))}px` } : {}),
    ...(ext.sample ? { sample: ext.sample } : {}),
    usage: [t.$description, ext.fluid ? `Fluide von ${pxOf(ext.fluid.min)}px bis ${pxOf(ext.fluid.max)}px.` : null, ext.textTransform ? 'In Großbuchstaben.' : null].filter(Boolean).join(' '),
    _family: v.fontFamily.includes('mono') ? 'mono' : 'sans',
  }
})
const group = (name, fam, names) => ({ name, family: fam, styles: styles.filter((s) => names.includes(s.name)).map(({ _family, ...s }) => s) })
const listOf = (prefix) => [...flat.values()].filter((t) => t.path[0] === prefix).map((t) => ({
  name: `${prefix}-${t.path.slice(1).join('-')}`,
  value: `${num(pxOf(resolve(t.$value)))}px`,
  usage: t.$description ?? `${prefix} ${t.path.slice(1).join('-')}`,
}))
const sh = resolve(flat.get('shadow.2xl').$value)
const dsOut = {
  name: 'AMS Audio',
  version: 2,
  meta: { ...(ds.meta ?? {}), generatedFrom: SRC, format: 'DTCG 2025.10' },
  color: { themes: [{ id: 'dark', name: 'Dunkel' }, { id: 'light', name: 'Hell' }], tokens: colorTokens },
  type: {
    // Schriftdateien liegen unter docs/design-system/fonts/ (selbst gehostet, OFL).
    fonts: [
      { family: 'Inter Variable', file: 'fonts/InterVariable-latin.woff2', weight: '100 900', style: 'normal' },
      { family: 'JetBrains Mono', file: 'fonts/JetBrainsMono-latin-400.woff2', weight: '400', style: 'normal' },
    ],
    families: { sans: family(resolve(flat.get('font.family.sans').$value)), mono: family(resolve(flat.get('font.family.mono').$value)) },
    groups: [
      group('Display', 'sans', ['display-hero', 'display-section', 'stat-number', 'figure']),
      group('Text', 'sans', ['lead', 'title-card', 'title-sm', 'body', 'body-sm', 'button']),
      group('Labels', 'sans', ['label-caps', 'eyebrow', 'label-xs-caps']),
      group('Messwerte', 'mono', ['mono-sm']),
    ],
  },
  spacing: { tokens: listOf('space') },
  radius: { tokens: listOf('radius') },
  shadow: { tokens: [{ name: 'shadow-2xl', value: `0 ${sh.offsetY.value}px ${sh.blur.value}px ${sh.spread.value}px ${dsColor(sh.color)}`, usage: flat.get('shadow.2xl').$description }] },
  size: { tokens: listOf('size') },
}
const dsJson = JSON.stringify(dsOut, null, 2) + '\n'

if (check) {
  const stale = [[OUT_CSS, css], [OUT_DS, dsJson]].filter(([f, c]) => !existsSync(f) || readFileSync(f, 'utf8') !== c).map(([f]) => f)
  if (stale.length) {
    console.error(`✗ Veraltet: ${stale.join(', ')}. Bitte "npm run tokens" ausführen und committen.`)
    process.exit(1)
  }
  console.log('✓ Erzeugte Token-Dateien sind aktuell')
} else {
  writeFileSync(OUT_CSS, css)
  writeFileSync(OUT_DS, dsJson)
  console.log(`✓ ${OUT_CSS} und ${OUT_DS} erzeugt (${flat.size} Tokens)`)
}
