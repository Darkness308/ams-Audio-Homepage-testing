import { Plane, Building, Shield, Home, TreePine, MapPin, Check } from 'lucide-react'

export const geographicZonesContent = {
  title: 'Geografische UAS-Zonen',
  subtitle: 'Nationale Umsetzung am Beispiel Deutschland',
  description: 'Die EU-Verordnungen ermächtigen Mitgliedstaaten, geografische UAS-Gebiete festzulegen – Zonen, in denen der Betrieb eingeschränkt oder verboten ist.',
  keyInsight: 'Die nationale Autonomie stellt ein kalkulierbares Risiko für die Skalierbarkeit dar und erfordert eine granulare, regionsspezifische Markteintrittsstrategie.'
}

export interface RestrictionZone {
  id: string
  category: string
  icon: typeof Plane
  zones: string[]
  distance?: string
}

export const restrictionZones: RestrictionZone[] = [
  {
    id: 'infrastructure',
    category: 'Infrastruktur',
    icon: Plane,
    zones: ['Flugplätze', 'Bundesfernstraßen', 'Bundeswasserstraßen', 'Bahnanlagen'],
    distance: '1,5 km (Flugplätze) / 100 m (seitlich)'
  },
  {
    id: 'sensitive',
    category: 'Sensible Einrichtungen',
    icon: Building,
    zones: ['Verfassungsorgane', 'Bundes- und Landesbehörden', 'Polizei- und Militäranlagen', 'Industrieanlagen', 'Krankenhäuser', 'Justizvollzugsanstalten'],
    distance: '100 m seitlich'
  },
  {
    id: 'residential',
    category: 'Wohn- und Erholungsgebiete',
    icon: Home,
    zones: ['Wohngrundstücke', 'Freibäder', 'Badestrände']
  },
  {
    id: 'nature',
    category: 'Naturschutz',
    icon: TreePine,
    zones: ['Naturschutzgebiete', 'Nationalparks']
  }
]

export interface ExceptionRule {
  id: string
  type: string
  icon: typeof Check
  description: string
  examples: string[]
}

export const exceptionRules: ExceptionRule[] = [
  {
    id: 'consent',
    type: 'Zustimmung',
    icon: Check,
    description: 'Betrieb mit ausdrücklicher Zustimmung der zuständigen Stelle oder des Betreibers möglich.',
    examples: ['Industrieanlagen', 'Private Grundstücke']
  },
  {
    id: 'operational',
    type: 'Betriebliche Auflagen',
    icon: Shield,
    description: 'Unter bestimmten Bedingungen erlaubt (z.B. Flughöhe, Gewicht, Ausrüstung).',
    examples: ['Wohngrundstücke: Flughöhe >100m oder Startmasse <0,25kg ohne Aufzeichnungsgeräte', 'Naturschutzgebiete: Höhe >100m, Kenntnis des Schutzzwecks']
  },
  {
    id: 'temporal',
    type: 'Zeitliche Beschränkung',
    icon: MapPin,
    description: 'Betrieb außerhalb bestimmter Zeiten zulässig.',
    examples: ['Freibäder und Badestrände: außerhalb der Betriebs- oder Badezeiten']
  }
]

export const germanAuthorities = {
  title: 'Föderale Zuständigkeitsverteilung in Deutschland',
  description: 'Zwei parallele Genehmigungsstränge schaffen zusätzlichen administrativen Koordinationsaufwand.',
  authorities: [
    {
      name: 'LBA',
      fullName: 'Luftfahrt-Bundesamt',
      responsibility: 'Erteilung der Betriebsgenehmigung in der "Spezifischen" Kategorie',
      level: 'Bund'
    },
    {
      name: 'LLB',
      fullName: 'Landesluftfahrtbehörden',
      responsibility: 'Genehmigung für Betrieb innerhalb geografischer Verbotszonen',
      level: 'Land'
    }
  ],
  practicalExample: 'Nach LBA-Genehmigung war in Iserlohn noch eine lokale bauordnungsrechtliche Genehmigung für den Landeplatz auf einem Dach ausstehend.'
}

export const scalabilityRisk = {
  title: 'Fragmentierungsrisiko',
  description: 'Die Möglichkeit der EU-Mitgliedstaaten, weitreichende geografische Zonen festzulegen, untergräbt die Vision eines vollständig harmonisierten Binnenmarktes.',
  implication: 'Unternehmen mit paneuropäischen Diensten müssen sich mit einem Flickenteppich nationaler und regionaler Flugbeschränkungsgebiete auseinandersetzen.'
}
