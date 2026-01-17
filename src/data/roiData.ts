import { Clock, Package, Wrench } from 'lucide-react'

export interface CostFactor {
  id: string
  icon: typeof Clock
  title: string
  problem: string
  solution: string
  impact: string
}

export interface ComplianceRisk {
  id: string
  type: 'direct' | 'indirect' | 'strategic'
  title: string
  description: string
}

export const roiSectionContent = {
  title: 'ROI & Risikomonetarisierung',
  subtitle: 'Von der Risikoverwaltung zur Risikomonetarisierung',
  description: 'Der strategische Wert von AaaS liegt in der Fähigkeit, unvorhersehbare und potenziell existenzbedrohende Risikokosten in messbare, finanzielle Vorteile umzuwandeln.',
  thesis: 'Der nächste strategische Schritt liegt in der Transformation des Risikomanagements: Unvermeidbare Risiken werden durch AaaS in planbare, quantifizierbare Kostenvorteile umgewandelt.'
}

export const costFactors: CostFactor[] = [
  {
    id: 'downtime',
    icon: Clock,
    title: 'Ungeplante Ausfallzeiten',
    problem: 'Plötzlicher Ausfall während einer Mission führt zu Vertragsstrafen, Reputationsschaden und hohen Kosten für Bergung und Ersatz.',
    solution: 'Transformation der Wartung von reaktiv zu proaktiv und planbar. Maximierung der Flottenverfügbarkeit.',
    impact: '38% weniger Ausfälle'
  },
  {
    id: 'spare-parts',
    icon: Package,
    title: 'Ersatzteilmanagement',
    problem: 'Teure Ersatzteile auf Lager (Kapitalbindung) oder ad-hoc zu überhöhten Preisen beschaffen.',
    solution: 'Just-in-Time-Ersatzteilbeschaffung basierend auf akustischen Prognosen. Drastische Reduktion des gebundenen Kapitals.',
    impact: '180.000$ Einsparung'
  },
  {
    id: 'asset-lifespan',
    icon: Wrench,
    title: 'Asset-Lebensdauer',
    problem: 'Unerkannter Verschleiß führt zu Folgeschäden und verkürzt die Gesamtlebensdauer, was zu verfrühten Re-Investitionen zwingt.',
    solution: 'Optimierte, zustandsbasierte Wartungszyklen minimieren Verschleiß und verlängern die Nutzungsdauer der Flotte.',
    impact: '+40% Lebensdauer'
  }
]

export const complianceRisks: ComplianceRisk[] = [
  {
    id: 'direct',
    type: 'direct',
    title: 'Direkte Kosten',
    description: 'Hohe Bußgelder und Strafzahlungen durch Aufsichtsbehörden bei Nichteinhaltung von Lärmvorschriften.'
  },
  {
    id: 'indirect',
    type: 'indirect',
    title: 'Indirekte Kosten',
    description: 'Anwalts- und Gerichtskosten bei Rechtsstreitigkeiten mit Anwohnern oder Behörden.'
  },
  {
    id: 'strategic',
    type: 'strategic',
    title: 'Strategische Risiken',
    description: 'Vertrauensverlust bei Kunden und Partnern kann zu einem "game-changing loss of market share" führen.'
  }
]

export const roiMetrics = [
  { value: '38%', label: 'Weniger Ausfälle', description: 'Durch Predictive Maintenance' },
  { value: '180k$', label: 'Ersatzteil-Einsparung', description: 'Durch Just-in-Time-Beschaffung' },
  { value: '6.6:1', label: 'ROI', description: 'Return on Investment' },
  { value: '100%', label: 'Compliance-Nachweis', description: 'Automatisierte Dokumentation' }
]

export const roiValueProposition = {
  title: 'Das AaaS-Wertversprechen',
  subtitle: 'Transformation von Unsicherheit in Planbarkeit',
  description: 'AaaS transformiert unkalkulierbare Risikokosten in eine feste, planbare Betriebsausgabe. Das "as-a-Service"-Modell ersetzt unvorhersehbare, hohe Einmalkosten durch eine transparente, wiederkehrende Servicegebühr.',
  benefits: [
    'Planbare monatliche Kosten statt unvorhersehbarer Ausfälle',
    'Proaktiver Compliance-Nachweis statt reaktiver Bußgelder',
    'Maximierte Asset-Nutzung statt verfrühter Re-Investition',
    'Datengestützte Entscheidungen statt Bauchgefühl'
  ]
}

export const complianceStandards = [
  { name: 'DoJ-Guidelines', jurisdiction: 'USA', focus: 'Systematische Risikoanalyse' },
  { name: 'IDW PS 980', jurisdiction: 'Deutschland', focus: 'Compliance-Management-Systeme' }
]
