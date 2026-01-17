import {
  ShieldCheck,
  Users,
  TrendingUp,
  Network
} from 'lucide-react'
import type { SuccessFactor } from '../types'

export const successFactors: SuccessFactor[] = [
  {
    id: 'risk-assessment',
    number: 1,
    icon: ShieldCheck,
    title: 'Ganzheitliche Risikobewertung & regulatorische Kompetenz',
    description: 'Die technische Machbarkeit ist nur eine Dimension des Erfolgs. Eine systematische Risikobewertung nach SORA-Methodik ist unerlässlich – mit Expertise in überlappenden Rechtsgebieten.',
    keyPoints: [
      'SORA-Methodik (Specific Operations Risk Assessment)',
      'Simultane Beherrschung von EASA-Luftrecht und TA Lärm',
      'Über technische Aspekte hinausdenken',
      'Regulatorische Vorausschau als Wettbewerbsvorteil'
    ]
  },
  {
    id: 'stakeholder',
    number: 2,
    icon: Users,
    title: 'Proaktives Stakeholder-Management & soziale Akzeptanz',
    description: 'Die soziale Akzeptanz ist keine "weicher Faktor", sondern eine harte Voraussetzung für den operativen Betrieb. Vertrauen wird durch Transparenz, Kommunikation und echte Bürgerbeteiligung aufgebaut.',
    keyPoints: [
      'Frühzeitige und verständliche Kommunikation',
      'Echte Bürgerbeteiligung statt Information',
      'Objektive Daten für Bedenken (Lärm, Sicherheit, Privatsphäre)',
      'Social Operating License aktiv managen'
    ]
  },
  {
    id: 'business-model',
    number: 3,
    icon: TrendingUp,
    title: 'Nachhaltige & skalierbare Geschäftsmodelle',
    description: 'Innovative Technologien müssen für Kommunen und Unternehmen zugänglich und finanzierbar sein. Service-basierte Modelle wie AaaS wandeln hohe Anfangsinvestitionen in planbare Betriebskosten um.',
    keyPoints: [
      'Von CAPEX zu OPEX transformieren',
      'Förderantragsreifes Reporting bereitstellen',
      'Klaren, messbaren Mehrwert bieten',
      'Finanzielle Hürden für Adoption senken'
    ]
  },
  {
    id: 'ecosystem',
    number: 4,
    icon: Network,
    title: 'Technologische Ökosysteme & Partnerschaften',
    description: 'Kein Akteur kann die komplexen Herausforderungen der Smart City allein bewältigen. Der Erfolg liegt in der Orchestrierung eines Ökosystems aus Hardware, IoT, Software und Beratung.',
    keyPoints: [
      'Forschungspartnerschaften (z.B. Fraunhofer IML)',
      'Logistikakteure zur Skalierung (z.B. HHLA Sky)',
      'Hardware- und Softwareentwickler',
      'Synergien für nachhaltigen Markterfolg'
    ]
  }
]

export const successFactorsSectionContent = {
  title: 'Strategische Erfolgsfaktoren',
  subtitle: 'Universelle Leitplanken für Smart-City-Projekte',
  description: 'Diese vier erfolgskritischen Faktoren sind essentielle Werkzeuge für den Aufbau von Resilienz gegenüber einer unvorhersehbaren Zukunft.',
  conclusion: 'Diese Erfolgsfaktoren bilden zusammen ein strategisches Gerüst für die Planung, Implementierung und Skalierung von Smart-City-Initiativen.'
}

export const futureScenarios = [
  {
    name: 'Ungebremstes Wachstum',
    description: 'Fortgesetzte Expansion urbaner Logistik'
  },
  {
    name: 'Individualisierung der Lebensstile',
    description: 'Zunehmende On-Demand-Anforderungen'
  },
  {
    name: 'Protektionismus',
    description: 'Regionale Abschottung und lokale Wertschöpfung'
  }
]
