import {
  Database,
  Cloud,
  BarChart3,
  Brain,
  Lightbulb,
  TrendingUp,
  Layers,
  Zap
} from 'lucide-react'

export interface BIMaturityLevel {
  level: number
  name: string
  question: string
  description: string
  aaasCapability: string
  icon: typeof BarChart3
}

export const daasIntegrationContent = {
  title: 'DaaS-Integration',
  subtitle: 'Nahtlose Erweiterung der Datenkompetenz',
  description: 'Data-as-a-Service (DaaS) ist ein cloud-basiertes Modell, das On-Demand-Zugriff auf Daten ermöglicht. AaaS integriert sich nahtlos als neue, extrem wertvolle Datenquelle.',
  keyValue: 'Die akustischen Daten ergänzen bestehende Datenströme (Fluglage, Batteriezustand, GPS) und schaffen ein vollständigeres, hochauflösendes digitales Abbild jeder Drohne.'
}

export const daasFeatures = [
  {
    id: 'cloud-based',
    icon: Cloud,
    title: 'Cloud-basiert',
    description: 'On-Demand-Zugriff auf akustische Daten von überall, jederzeit.'
  },
  {
    id: 'data-enrichment',
    icon: Layers,
    title: 'Datenanreicherung',
    description: 'Akustische Daten ergänzen Fluglage, Batteriezustand und GPS-Daten.'
  },
  {
    id: 'real-time',
    icon: Zap,
    title: 'Echtzeit-Analyse',
    description: 'Sofortige Verarbeitung und Auswertung der Akustikdaten.'
  },
  {
    id: 'differentiation',
    icon: TrendingUp,
    title: 'Differenzierung',
    description: 'Einzigartiges Serviceangebot, das Wettbewerber nicht replizieren können.'
  }
]

export const biMaturityLevels: BIMaturityLevel[] = [
  {
    level: 2,
    name: 'Deskriptive Analyse',
    question: 'Was ist passiert?',
    description: 'Rückblickende Analyse vergangener Ereignisse und Metriken.',
    aaasCapability: 'Historische Lärmprofile und Wartungsprotokolle',
    icon: BarChart3
  },
  {
    level: 3,
    name: 'Ad-hoc-Analyse',
    question: 'Warum ist es passiert?',
    description: 'Gezielte Abfragen zum Zustand spezifischer Komponenten.',
    aaasCapability: 'Zeige akustische Signatur der Lager von Drohne X der letzten 50 Flugstunden',
    icon: Database
  },
  {
    level: 4,
    name: 'Predictive Analytics',
    question: 'Was wird passieren?',
    description: 'Vorhersage des Zeitpunkts eines wahrscheinlichen Komponentenausfalls.',
    aaasCapability: 'Algorithmen prognostizieren Ausfall basierend auf historischen Akustikdaten',
    icon: Brain
  },
  {
    level: 5,
    name: 'Prescriptive Analytics',
    question: 'Was sollten wir tun?',
    description: 'Konkrete Handlungsempfehlungen über die reine Vorhersage hinaus.',
    aaasCapability: 'Automatische Wartungsanweisungen oder optimierte, leisere Flugrouten',
    icon: Lightbulb
  }
]

export const biMaturitySectionContent = {
  title: 'Business Intelligence Maturity',
  subtitle: 'Beschleunigung der BI-Reifegrade',
  description: 'Die Integration von AaaS-Daten wirkt als Katalysator für die Weiterentwicklung der Business Intelligence-Fähigkeiten.',
  progression: 'AaaS ermöglicht den Aufstieg von rein deskriptiven Analysen zu höheren, wertschöpfenderen Reifegraden.'
}

export const dataStreams = [
  { name: 'Akustische Daten', source: 'AaaS', type: 'Neu' },
  { name: 'Fluglage', source: 'IIoT-Plattform', type: 'Bestehend' },
  { name: 'Batteriezustand', source: 'Drohnen-Telemetrie', type: 'Bestehend' },
  { name: 'GPS-Daten', source: 'Navigation', type: 'Bestehend' },
  { name: 'Lärmemissionen', source: 'AaaS', type: 'Neu' },
  { name: 'Komponentenzustand', source: 'AaaS + Sensoren', type: 'Angereichert' }
]

export const partnerIntegration = {
  partner: 'HHLA Sky',
  platform: 'IIoT-Plattform',
  description: 'AaaS integriert sich nahtlos in die bestehende Partnerschaft und erweitert das Datenökosystem.'
}
