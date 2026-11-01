// Prüft die Farbpaare aus tokens/ams.tokens.json gegen WCAG 2.2 (Kontrast nach relativer Leuchtdichte).
// Halbtransparente Flächen werden vor der Messung auf den Seitengrund des Themes gerechnet.
// Aufruf: npm run contrast
import { readFileSync } from 'node:fs'

const root = JSON.parse(readFileSync('tokens/ams.tokens.json', 'utf8'))
const get = (path) => path.split('.').reduce((n, k) => n?.[k], root)
const resolve = (v) => (typeof v === 'string' && v.startsWith('{') ? resolve(get(v.slice(1, -1)).$value) : v)
const color = (theme, name) => resolve(get(`color.theme.${theme}.${name}`).$value)

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
const over = (c, bg) => {
  const a = c.alpha ?? 1
  const f = rgb(c.hex), b = rgb(bg.hex)
  return f.map((x, i) => a * x + (1 - a) * b[i])
}
const lum = (c) => {
  const [r, g, b] = c.map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m)
  return (x + 0.05) / (y + 0.05)
}

const grounds = ['bg', 'surface', 'surface-raised', 'surface-hover', 'surface-well']
const rules = [
  // [Vordergrund, Untergründe, Mindestwert, Grund]
  ['text-strong', grounds, 4.5, 'WCAG 1.4.3'],
  ['text', grounds, 4.5, 'WCAG 1.4.3'],
  ['text-body', grounds, 7, 'Fließtext-Ziel 7:1 (WCAG 1.4.6)'],
  ['text-muted', grounds, 4.5, 'WCAG 1.4.3'],
  ['text-subtle', grounds, 4.5, 'WCAG 1.4.3'],
  ['border-control', grounds, 3, 'WCAG 1.4.11'],
  ['focus-ring', ['bg', 'surface', 'surface-hover'], 3, 'WCAG 2.4.7 / 2.4.13'],
  ['action-secondary-fg', ['bg', 'surface'], 4.5, 'WCAG 1.4.3'],
  ['action-secondary-fg-hover', ['bg', 'surface'], 4.5, 'WCAG 1.4.3'],
  ['action-primary-fg', ['action-primary-bg', 'action-primary-bg-hover'], 4.5, 'WCAG 1.4.3'],
  ...['success', 'warning', 'danger', 'info'].map((s) => [`status-${s}`, [`status-${s}-bg`, 'bg', 'surface'], 4.5, 'WCAG 1.4.3']),
]

let failed = 0
for (const theme of ['dark', 'light']) {
  const page = color(theme, 'bg')
  console.log(`\n${theme === 'dark' ? 'Dunkel' : 'Hell'}`)
  for (const [fg, bgs, min, why] of rules) {
    const results = bgs.map((b) => {
      const ground = over(color(theme, b), page)
      const fgc = color(theme, fg)
      const groundTok = { hex: '#' + ground.map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('') }
      return [b, ratio(over(fgc, groundTok), ground)]
    })
    const worst = results.reduce((a, b) => (b[1] < a[1] ? b : a))
    const ok = worst[1] >= min
    if (!ok) failed++
    console.log(`  ${ok ? '✓' : '✗'} ${fg.padEnd(26)} min ${worst[1].toFixed(2)}:1 auf ${worst[0].padEnd(15)} (Ziel ${min}:1, ${why})`)
  }
}
if (failed) {
  console.error(`\n✗ ${failed} Farbpaar(e) unter dem Mindestwert.`)
  process.exit(1)
}
console.log('\n✓ Alle Farbpaare erfüllen ihre Mindestwerte.')
