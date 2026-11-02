// Setzt {{schluessel.pfad}} aus site.json in einen Text ein. Werte dürfen selbst Platzhalter
// enthalten (z. B. texte.einleitung nutzt person.beruf). Unbekannte Schlüssel sind ein Fehler,
// damit keine Lücke unbemerkt online geht. Genutzt von vite.config.ts (HTML-Seiten) und der Startseite.
const PLATZHALTER = /\{\{\s*([\w.]+)\s*\}\}/g

export function lookup(data: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], data)
}

export function fill(template: string, data: unknown, escape: (s: string) => string = (s) => s, tiefe = 0): string {
  if (tiefe > 3) throw new Error(`site.json: Platzhalter zu tief verschachtelt in „${template}“`)
  return template.replace(PLATZHALTER, (_match, key: string) => {
    const value = lookup(data, key)
    if (typeof value !== 'string') throw new Error(`site.json: Schlüssel „${key}“ fehlt oder ist kein Text`)
    return value.includes('{{') ? fill(value, data, escape, tiefe + 1) : escape(value)
  })
}
