import { Wrench, ShieldCheck } from 'lucide-react'

export interface PdMCapability {
  id: string
  title: string
  description: string
  accuracy?: string
}

export interface ComplianceCapability {
  id: string
  title: string
  description: string
}

export const predictiveMaintenanceData = {
  title: 'Predictive Maintenance (PdM)',
  subtitle: 'Technische Zuverlässigkeit durch akustische Analyse',
  description: 'Die Basis für zuverlässigen und kosteneffizienten Drohnenbetrieb ist die maximale Verfügbarkeit der Flotte. AaaS ermöglicht vorausschauende Wartung basierend auf akustischen Daten.',
  keyInsight: 'Kritische Komponenten wie Propeller, Lager oder durch Exzentrizität verursachte Unwuchten erzeugen spezifische akustische Signaturen, lange bevor ein Ausfall droht.',
  icon: Wrench
}

export const pdmCapabilities: PdMCapability[] = [
  {
    id: 'defect-detection',
    title: 'Frühzeitige Defekterkennung',
    description: 'Analyse der Geräuschdaten von UAV-Motoren ermöglicht extrem frühzeitige und präzise Erkennung von Defekten.',
    accuracy: '>99%'
  },
  {
    id: 'component-monitoring',
    title: 'Komponenten-Monitoring',
    description: 'Überwachung kritischer Teile: Propeller, Lager, Motor-Exzentrizität und Unwuchten durch akustische Signaturen.'
  },
  {
    id: 'ml-algorithms',
    title: 'ML-Algorithmen',
    description: 'Decision Tree (DT), Support Vector Machines (SVM) und k-Nearest Neighbor (KNN) für hochpräzise Fehlerdiagnose.'
  },
  {
    id: 'multi-sensor',
    title: 'Multi-Sensor-Fusion',
    description: 'Kombination mit Vibrationsanalyse, Thermografie und Motorstromanalyse für eine "filmische Sicht" auf den Maschinenzustand.'
  }
]

export const complianceData = {
  title: 'Regulatorische Compliance',
  subtitle: 'U-Space-Konformität und Lärmschutz',
  description: 'Lärmschutzvorschriften und öffentliche Akzeptanz sind entscheidende Faktoren für die Skalierbarkeit von Drohnenoperationen.',
  quote: '"Der bestmögliche Schutz der Bevölkerung vor dem durch Drohnen verursachten Lärm ist für die zukünftige Entwicklung der Drohnentechnologie und deren Akzeptanz von großer Bedeutung."',
  quoteSource: 'Schweizer Bundesrat',
  icon: ShieldCheck
}

export const complianceCapabilities: ComplianceCapability[] = [
  {
    id: 'emission-documentation',
    title: 'Lückenlose Emissionsdokumentation',
    description: 'Standardisierte und kontinuierliche Messung der Schallemissionen jeder Drohne im realen Betrieb.'
  },
  {
    id: 'certification',
    title: 'Zertifizierungsgrundlage',
    description: 'Technologische Basis für standardisierte UAS-Schallemissionszertifizierung (z.B. UASNoiseCheck-Projekt).'
  },
  {
    id: 'uspace-integration',
    title: 'U-Space-Integration',
    description: 'Lärmprofile für dynamische Routenplanung im definierten U-Space-Luftraum.'
  },
  {
    id: 'future-proof',
    title: 'Zukunftssicher',
    description: 'Nachweis der Einhaltung aktueller und zukünftiger Lärmgrenzwerte.'
  }
]

export const dualEnablerSectionContent = {
  title: 'AaaS als Dualer Enabler',
  subtitle: 'Technische und regulatorische Exzellenz in Symbiose',
  description: 'Acoustics-as-a-Service adressiert zwei kritische Bereiche gleichzeitig und schafft eine untrennbare Synergie zwischen technischer Zuverlässigkeit und regulatorischer Konformität.',
  keyValue: 'Die gleichen Daten, die einen drohenden Lagerschaden vorhersagen, dienen auch als Nachweis für die Einhaltung von Lärmvorschriften.',
  competitiveAdvantage: 'Diese inhärente Dualität – ein einziger Datenstrom sichert Asset-Integrität UND regulatorische Legitimität – schafft einen Effizienz-Vorteil, den Wettbewerber mit Einzwecklösungen nicht überwinden können.'
}

export const mlAlgorithms = [
  { name: 'Decision Tree (DT)', accuracy: '99.2%', useCase: 'Klassifikation von Fehlermustern' },
  { name: 'Support Vector Machines (SVM)', accuracy: '99.5%', useCase: 'Hochdimensionale Signalanalyse' },
  { name: 'k-Nearest Neighbor (KNN)', accuracy: '98.8%', useCase: 'Mustererkennung in Echtzeit' }
]
