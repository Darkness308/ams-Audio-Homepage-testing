/**
 * SSOT Content Schema — AMS Audio
 *
 * Dieses Schema definiert die Pflichtstruktur für alle publizierten Inhalte.
 * Jeder Datenpunkt, der auf www.ams-audio.com erscheint, MUSS diesem Schema entsprechen.
 *
 * Verweis: ADR-0003, SOP-003
 * Version: 1.0.0
 * Stand: 2026-08-04
 */

/**
 * Typ-Klassifizierung für jeden Content-Claim.
 * Verhindert, dass Ziele als Messungen dargestellt werden.
 */
export type ContentClaimType =
  | 'measured'    // Gemessener, validierter Wert (Messprotokoll vorhanden)
  | 'projection'  // Prognose / Schätzung (Modell und Annahmen dokumentiert)
  | 'target'      // Roadmap-Ziel (noch nicht erreicht)
  | 'regulatory'  // Regulatorische Referenz (offizielle Quelle erforderlich)
  | 'marketing'   // Allgemeines Marketing-Statement (keine Zahlenwerte erlaubt)

/**
 * Basis-Struktur für jeden auditierungspflichtigen Datenpunkt.
 */
export interface ContentClaim {
  /** Der eigentliche Wert (Zahl, Text, Prozentsatz) */
  value: string | number

  /** Klassifizierung — bestimmt welche Validierungsanforderungen gelten */
  type: ContentClaimType

  /** Vollständige Quellenangabe inkl. Paragraf/Abschnitt wo zutreffend */
  source: string

  /** Optionaler direkter Link zur Quelle */
  sourceUrl?: string

  /** ISO-Datum der letzten Validierung gegen aktuelle Quellen */
  validatedAt: string

  /** Person oder System, die/das die Validierung durchgeführt hat */
  validatedBy: string

  /** Optionale Notiz: Einschränkungen, Annahmen, Kontext */
  note?: string
}

/**
 * Statistik-Kacheln auf der Homepage.
 * Alle vier Statistiken müssen vom Typ 'measured' oder 'projection' sein.
 */
export interface StatisticClaim extends ContentClaim {
  label: string
  description?: string
}

/**
 * Technische Spezifikation (z.B. für UAS-NoiseCheck).
 */
export interface TechSpecClaim extends ContentClaim {
  label: string
  unit?: string
}

/**
 * Finanz-Kennzahl (Umsatz, ROI, Break-Even).
 * Immer 'projection' oder 'measured' — nie 'marketing'.
 */
export interface FinancialClaim extends ContentClaim {
  label: string
  currency?: 'EUR' | 'USD' | 'CHF'
  period?: string  // z.B. "Jahr 1", "Q3 2026"
}

/**
 * Regulatorische Referenz.
 * Muss eine offizielle Quelle haben (type: 'regulatory' erzwungen).
 */
export interface RegulatoryClaim {
  type: 'regulatory'
  regulation: string     // z.B. "EU (EU) 2019/947"
  paragraph?: string     // z.B. "Art. 4 Abs. 1 lit. b"
  jurisdiction: string   // z.B. "EU", "DE", "CH"
  description: string
  source: string
  sourceUrl?: string
  validatedAt: string
  validatedBy: string
}

/**
 * Hilfsfunktion: Validiert zur Laufzeit ob ein ContentClaim vollständig ist.
 * Wird von Zod-Schemas in M4 ersetzt — bis dahin manuelle Validierung.
 */
export function validateContentClaim(claim: ContentClaim): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!claim.value && claim.value !== 0) errors.push('value ist erforderlich')
  if (!claim.type) errors.push('type ist erforderlich')
  if (!claim.source) errors.push('source ist erforderlich')
  if (!claim.validatedAt) errors.push('validatedAt ist erforderlich')
  if (!claim.validatedBy) errors.push('validatedBy ist erforderlich')

  // Datum-Format prüfen (ISO: YYYY-MM-DD)
  if (claim.validatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(claim.validatedAt)) {
    errors.push('validatedAt muss ISO-Format haben (YYYY-MM-DD)')
  }

  // 'measured' Claims müssen eine detaillierte Quelle haben
  if (claim.type === 'measured' && claim.source.length < 20) {
    errors.push('measured Claims benötigen eine detaillierte Quellenangabe')
  }

  // 'marketing' Claims dürfen keine Zahlenwerte enthalten
  if (claim.type === 'marketing' && typeof claim.value === 'number') {
    errors.push('marketing Claims dürfen keine numerischen Werte enthalten')
  }

  return { valid: errors.length === 0, errors }
}
