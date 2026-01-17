import {
  Radio,
  Map,
  Calculator,
  Scale,
  FileText,
  Activity
} from 'lucide-react'
import type { AcoustiScanFeature, TechSpec, AaaSSolution } from '../types'

export const acoustiScanFeatures: AcoustiScanFeature[] = [
  {
    id: 'drone-definition',
    icon: Radio,
    title: 'Drohnendefinition',
    description: 'Erfassung des spezifischen Schallleistungspegels (LWA) der Drohne und Tonalitäts-Bewertung zur Identifikation störender Frequenzen.',
    details: [
      'Schallleistungspegel (LWA) Messung',
      'Tonalitäts-Analyse',
      'Lästigkeitszuschlag 3-6 dB nach TA Lärm',
      'Frequenzspektrum-Dokumentation'
    ]
  },
  {
    id: 'environment',
    icon: Map,
    title: 'Umgebungserfassung',
    description: 'Nutzung von LiDAR-Scans und Geodaten für präzise 3D-Karten der Umgebung mit Gebäuden, Fassaden und kritischen Immissionsorten.',
    details: [
      'LiDAR-basierte 3D-Erfassung',
      'OpenStreetMap Integration',
      'Gebäude & Fassaden-Mapping',
      'Fenster als Immissionsorte'
    ]
  },
  {
    id: 'prediction',
    icon: Calculator,
    title: 'Schallimmissionsprognose',
    description: 'Berechnung des erwarteten Schalldruckpegels am Immissionsort unter Berücksichtigung physikalischer Effekte nach DIN ISO 9613-2.',
    details: [
      'Entfernungsdämpfung',
      'Luft- und Bodenabsorption',
      'Reflexionsberechnung',
      'DIN ISO 9613-2 konform'
    ]
  },
  {
    id: 'compliance',
    icon: Scale,
    title: 'Regulatorische Bewertung',
    description: 'Automatischer Abgleich der Prognoseergebnisse mit gesetzlichen Grenzwerten der TA Lärm. Ampelsystem visualisiert Konformität.',
    details: [
      'TA Lärm Tag/Nacht-Grenzwerte',
      'Ampel-Visualisierung',
      'Flugrouten-Optimierung',
      'Betriebszeiten-Bewertung'
    ]
  },
  {
    id: 'reporting',
    icon: FileText,
    title: 'Behördenkonformes Reporting',
    description: 'Erstellung von PDF-Berichten, die den Anforderungen an schalltechnische Gutachten entsprechen und direkt bei Genehmigungsverfahren eingereicht werden können.',
    details: [
      'Gutachten-konforme Struktur',
      'PDF-Export',
      'Genehmigungsreif',
      'Förderantrags-tauglich'
    ]
  },
  {
    id: 'monitoring',
    icon: Activity,
    title: 'Live-Monitoring',
    description: '24/7 Echtzeit-Überwachung der Schallimmissionen während des Betriebs mit automatischen Alerts bei Grenzwertüberschreitungen.',
    details: [
      '24/7 Echtzeitdaten',
      'Automatische Alerts',
      'Historische Analysen',
      'Dashboard-Visualisierung'
    ]
  }
]

export const techSpecs: TechSpec[] = [
  { label: 'Messgenauigkeit', value: '±0.5 dB' },
  { label: 'Prognosereichweite', value: 'bis 2 km' },
  { label: 'Datenaktualisierung', value: 'Echtzeit' },
  { label: 'Normkonformität', value: 'DIN ISO 9613-2' },
  { label: 'Regulatorik', value: 'TA Lärm + EASA' },
  { label: 'Export-Formate', value: 'PDF, CSV, API' }
]

export const aaaSolution: AaaSSolution = {
  name: 'AcoustiScan Drohnen-Modul',
  tagline: 'Von der Datenerfassung bis zum behördenkonformen Reporting',
  features: acoustiScanFeatures,
  techSpecs: techSpecs
}

export const aaaSolutionSectionContent = {
  title: 'Acoustic-as-a-Service',
  subtitle: 'Die integrierte Lösung für die leise Smart City',
  description: 'Der von AMS Audio entwickelte Ansatz verbindet innovative Messtechnologie, tiefgreifende regulatorische Expertise und ein serviceorientiertes Geschäftsmodell, um die Lärm-Compliance rechtssicher, planbar und akzeptiert zu gestalten.',
  marketDriver: 'Der Marktbedarf wird durch die EU-Umgebungslärmrichtlinie getrieben, umgesetzt durch § 47 BImSchG, der Kommunen zur Erstellung von Lärmaktionsplänen (LAPs) verpflichtet.'
}

export const regulations = [
  {
    name: 'TA Lärm',
    jurisdiction: 'Deutschland',
    description: 'Technische Anleitung zum Schutz gegen Lärm',
    limits: 'Mischgebiet: 60 dB Tag / 45 dB Nacht'
  },
  {
    name: 'EASA AltMoC',
    jurisdiction: 'EU',
    description: 'Alternative Means of Compliance für UAS',
    limits: 'Spezifische Risikoklassen'
  },
  {
    name: 'SORA',
    jurisdiction: 'EU',
    description: 'Specific Operations Risk Assessment',
    limits: 'Risikobasierte Kategorisierung'
  },
  {
    name: 'DIN ISO 9613-2',
    jurisdiction: 'International',
    description: 'Schallausbreitung im Freien',
    limits: 'Berechnungsnorm'
  }
]
