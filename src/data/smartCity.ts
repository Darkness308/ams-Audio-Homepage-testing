import { Zap, Car, Building2, Factory } from 'lucide-react'
import type { SmartCityField } from '../types'

export const smartCityFields: SmartCityField[] = [
  {
    id: 'energy',
    icon: Zap,
    title: 'Intelligente Energiekonzepte',
    description: 'Die Energiewende ist ein Kernstück der Smart City. Transformation von zentralisierten, fossilen Stromnetzen hin zu dezentralen, intelligenten Netzen (Smart Grids).',
    solutions: [
      'Dezentrale Smart Grids',
      'Integration erneuerbarer Energien',
      'Intelligente Laststeuerung',
      'CO2-neutrale Versorgung'
    ],
    aiApplication: 'KI ermöglicht die prädiktive Steuerung von Smart Grids und optimiert die Integration von Solar- und Windkraft.'
  },
  {
    id: 'mobility',
    icon: Car,
    title: 'Intelligente Mobilität',
    description: 'Urbane Mobilität steht vor der Herausforderung, Emissionen, Staus und Lärm zu reduzieren. Intelligente Konzepte setzen auf integrierte, multimodale Verkehrslösungen.',
    solutions: [
      'Vernetzter ÖPNV',
      'Carsharing & E-Mobilität',
      'Mikromobilität (Lastenräder)',
      'Autonome Drohnenlogistik'
    ],
    aiApplication: 'KI-Algorithmen optimieren Verkehrsflüsse und koordinieren multimodale Mobilitätsdienste in Echtzeit.'
  },
  {
    id: 'planning',
    icon: Building2,
    title: 'Intelligente Planung & Verwaltung',
    description: 'Die Stadtplanung der Zukunft ist vorausschauend und datengestützt. E-Government-Lösungen fördern Transparenz und ermöglichen neue Formen der Bürgerbeteiligung.',
    solutions: [
      'Datengestützte Stadtplanung',
      'E-Government-Lösungen',
      'Digitale Bürgerbeteiligung',
      'Ressourcenoptimierung'
    ],
    aiApplication: 'Analyse von Verkehrs-, Umwelt- und Sozialdaten für optimierte urbanistische Entscheidungen.'
  },
  {
    id: 'economy',
    icon: Factory,
    title: 'Intelligente Wirtschaft',
    description: 'Transformation zur nachhaltigen Kreislaufwirtschaft mit "grünen" Geschäftsmodellen, die Ressourceneffizienz in den Mittelpunkt stellen und Abfälle als Wertstoffe begreifen.',
    solutions: [
      'Kreislaufwirtschaft',
      'Grüne Geschäftsmodelle',
      'Nachhaltige Arbeitsplätze',
      'Ressourceneffiziente Produktion'
    ],
    aiApplication: 'Digitale Plattformökonomie schafft Grundlage für neue Kreislaufwirtschaftsmodelle und Lieferkettenoptimierung.'
  }
]

export const smartCitySectionContent = {
  title: 'Smart City Handlungsfelder',
  subtitle: 'Vier Säulen der intelligenten Stadt',
  description: 'Das Konzept der Smart City geht weit über die reine Implementierung digitaler Technologien hinaus. Es ist ein urbaner Raum, der durch den intelligenten Einsatz von Technologie und Daten nachhaltiger, effizienter und lebenswerter wird.'
}

export const techEnablers = {
  title: 'Technologische Enabler',
  items: [
    {
      name: 'Industrialisierung Künstlicher Intelligenz',
      description: 'KI-Algorithmen ermöglichen die Analyse großer Datenmengen und prädiktive Steuerung urbaner Systeme.'
    },
    {
      name: 'Digitale Plattformökonomie',
      description: 'Digitale Plattformen koordinieren die Vernetzung verschiedener Akteure und Dienstleistungen.'
    }
  ]
}
