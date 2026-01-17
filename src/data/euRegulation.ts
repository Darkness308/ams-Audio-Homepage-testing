import { Shield, Scale, Plane, Radio } from 'lucide-react'

export const regulationContent = {
  title: 'EU-Regulierungsrahmen',
  subtitle: 'Harmonisierter Markt für 450 Millionen Menschen',
  description: 'Der einheitliche EU-Regulierungsansatz ersetzt fragmentierte nationale Vorschriften und schafft die Grundlage für skalierbare, grenzüberschreitende Geschäftsmodelle.',
  keyPrinciple: 'Diese Verordnung ist in allen ihren Teilen verbindlich und gilt unmittelbar in jedem Mitgliedstaat.'
}

export interface EURegulation {
  id: string
  name: string
  number: string
  description: string
  relevance: string
  icon: typeof Plane
}

export const euRegulations: EURegulation[] = [
  {
    id: 'eu-2019-947',
    name: 'Durchführungsverordnung',
    number: '(EU) 2019/947',
    description: 'Definiert die Regeln und Verfahren für den Betrieb von UAS.',
    relevance: 'Operatives Kernstück für jeden Drohnenbetreiber',
    icon: Plane
  },
  {
    id: 'eu-2019-945',
    name: 'Delegierte Verordnung',
    number: '(EU) 2019/945',
    description: 'Legt technische Anforderungen an Drohnen fest (C-Klassifizierung) und regelt Drittlandstatus.',
    relevance: 'Technische Produktanforderungen',
    icon: Shield
  },
  {
    id: 'eu-2018-1139',
    name: 'Basisverordnung',
    number: '(EU) 2018/1139',
    description: 'Übergeordneter europäischer Rechtsrahmen für die gesamte Zivilluftfahrt.',
    relevance: 'Rechtliche Grundlage',
    icon: Scale
  },
  {
    id: 'eu-2021-664',
    name: 'U-Space Verordnung',
    number: '(EU) 2021/664',
    description: 'Rechtlicher Rahmen für U-Space – zukünftiges Verkehrsmanagementsystem für Drohnen.',
    relevance: 'Zukünftige Hochdichte-Operationen',
    icon: Radio
  }
]

export interface OperationCategory {
  id: string
  name: string
  nameDe: string
  risk: string
  color: string
  authorization: string
  description: string
  implications: string
  subcategories?: {
    id: string
    name: string
    maxWeight: string
    flightArea: string
    pilotRequirement: string
  }[]
  droneClasses?: string[]
  examples: string[]
}

export const operationCategories: OperationCategory[] = [
  {
    id: 'open',
    name: 'OPEN',
    nameDe: 'Offen',
    risk: 'Gering',
    color: 'green',
    authorization: 'Keine vorherige Genehmigung erforderlich',
    description: 'Risikoarme Einsätze für Massenmarkt und einfache kommerzielle Anwendungen.',
    implications: 'Ermöglicht Massenmarktanwendungen wie Fotografie oder einfache Inspektionen, jedoch ungeeignet für komplexe Logistikdienste.',
    subcategories: [
      {
        id: 'a1',
        name: 'A1',
        maxWeight: 'C0: <0,25kg / C1: <0,90kg',
        flightArea: 'Über unbeteiligten Personen (C0) / Möglichst nicht über unbeteiligten Personen (C1)',
        pilotRequirement: 'Vertrautheit mit Handbuch (C0) / Online-Prüfung (C1)'
      },
      {
        id: 'a2',
        name: 'A2',
        maxWeight: 'C2: <4kg',
        flightArea: 'Sicherer Abstand zu unbeteiligten Personen',
        pilotRequirement: 'Zusätzliches Fernpiloten-Zeugnis'
      }
    ],
    examples: ['Fotografie', 'Einfache Inspektionen', 'Hobby-Flüge']
  },
  {
    id: 'specific',
    name: 'SPECIFIC',
    nameDe: 'Spezifisch',
    risk: 'Erhöht',
    color: 'orange',
    authorization: 'Betriebsgenehmigung durch LBA erforderlich',
    description: 'Der entscheidende Bereich für die meisten professionellen und kommerziellen Anwendungen mit mittlerem Risiko.',
    implications: 'Wichtigste Kategorie für innovative B2B-Anwendungen. Genehmigungsprozess fungiert als Filter und schafft Wettbewerbsvorteile ("Moat").',
    droneClasses: ['C5', 'C6'],
    examples: ['Logistik', 'Energie-Inspektion', 'Medizinischer Transport']
  },
  {
    id: 'certified',
    name: 'CERTIFIED',
    nameDe: 'Zertifiziert',
    risk: 'Hoch',
    color: 'red',
    authorization: 'Vollständige Zertifizierung (Luftfahrzeug, Betreiber, Piloten)',
    description: 'Einsätze mit Risiko vergleichbar zur bemannten Luftfahrt: Personentransport, schwere Lasten, gefährliche Güter.',
    implications: 'Hochrisiko-, High-Capital- und Langzeit-Investitionsfeld. Eher traditionelle Luft- und Raumfahrt als typisches VC-Profil.',
    examples: ['Flugtaxis', 'Autonome Schwerlast-Flüge', 'Gefahrguttransport']
  }
]

export const sailLevels = {
  title: 'SAIL - Specific Assurance and Integrity Level',
  description: 'Das SAIL-Risikolevel erfordert eine umfassende Sicherheitsbewertung durch die Behörden und stellt eine der höchsten Hürden für den kommerziellen Betrieb dar.',
  levels: [
    { level: 'SAIL I-II', description: 'Niedrigeres Risiko, vereinfachte Genehmigung' },
    { level: 'SAIL III-IV', description: 'Mittleres Risiko, umfassende Dokumentation' },
    { level: 'SAIL V-VI', description: 'Höchstes Risiko, behördliche Prüfung erforderlich' }
  ],
  example: 'Morpheus Logistik erhielt als einer der ersten Betreiber in Europa eine Betriebsgenehmigung nach SAIL III.'
}

export const transitionPeriod = {
  deadline: '31.12.2023',
  impact: 'Seit dem 1. Januar 2024 unterliegen Bestandsdrohnen ohne C-Klassifizierung strengeren Betriebseinschränkungen.',
  implication: 'Erhöht die Relevanz von Drohnen mit neuer C-Klassifizierung für den kommerziellen Einsatz.'
}
