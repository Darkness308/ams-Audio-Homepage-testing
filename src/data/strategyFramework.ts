import {
  Compass,
  Target,
  RefreshCw,
  Layers,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Eye,
  GitBranch,
  BarChart3
} from 'lucide-react'

// ============================================
// VUCAD-WELT - Die Herausforderung
// ============================================

export const vucadContent = {
  title: 'VUCAD-Welt',
  subtitle: 'Das neue Normal: Ständiger Wandel',
  description: 'VUCAD beschreibt eine Umwelt, die volatil, unsicher, komplex, mehrdeutig und dynamisch ist. Erfolgreiche Unternehmen navigieren diese Herausforderung durch adaptive Management-Methoden.'
}

export interface VucadDimension {
  id: string
  letter: string
  name: string
  nameDe: string
  description: string
  challenge: string
  amsResponse: string
  color: string
}

export const vucadDimensions: VucadDimension[] = [
  {
    id: 'volatility',
    letter: 'V',
    name: 'Volatility',
    nameDe: 'Volatilität',
    description: 'Schnelle und unvorhersehbare Veränderungen',
    challenge: 'Regulatorische Änderungen, Marktdynamik, technologische Disruption',
    amsResponse: 'Modulare Architektur ermöglicht schnelle Anpassung an neue Anforderungen',
    color: 'red'
  },
  {
    id: 'uncertainty',
    letter: 'U',
    name: 'Uncertainty',
    nameDe: 'Unsicherheit',
    description: 'Mangel an Vorhersagbarkeit',
    challenge: 'Unklare Marktentwicklung, Akzeptanzrisiken, Genehmigungsprozesse',
    amsResponse: 'Datengetriebene Entscheidungen durch kontinuierliches Monitoring',
    color: 'orange'
  },
  {
    id: 'complexity',
    letter: 'C',
    name: 'Complexity',
    nameDe: 'Komplexität',
    description: 'Viele vernetzte Variablen',
    challenge: 'Multi-Stakeholder-Umfeld, EU-Regulierung, technische Integration',
    amsResponse: 'Systemischer Ansatz mit klarer Stakeholder-Segmentierung',
    color: 'yellow'
  },
  {
    id: 'ambiguity',
    letter: 'A',
    name: 'Ambiguity',
    nameDe: 'Ambiguität',
    description: 'Mehrdeutige Informationen',
    challenge: 'Subjektive Lärmwahrnehmung, unklare Grenzwerte, kulturelle Unterschiede',
    amsResponse: 'Objektive Messdaten ersetzen subjektive Wahrnehmung',
    color: 'green'
  },
  {
    id: 'dynamik',
    letter: 'D',
    name: 'Dynamik',
    nameDe: 'Dynamik',
    description: 'Permanente Bewegung und Entwicklung',
    challenge: 'Ständig neue Use Cases, wachsende Drohnenflotten, urbane Verdichtung',
    amsResponse: 'Skalierbare SaaS-Plattform wächst mit dem Markt',
    color: 'blue'
  }
]

// ============================================
// EKS - Engpass-Konzentrierte Strategie
// ============================================

export const eksContent = {
  title: 'EKS - Engpass-Konzentrierte Strategie',
  subtitle: 'Fokus auf den systemischen Engpass',
  description: 'Die EKS konzentriert sich darauf, den systemischen Engpass zu identifizieren und zu beseitigen, anstatt lokale Optimierungen vorzunehmen.',
  principle: 'Konzentriere alle Kräfte auf den einen Engpass, der das gesamte System limitiert.'
}

export interface EksStep {
  id: string
  step: number
  name: string
  description: string
  amsApplication: string
  icon: typeof Target
}

export const eksSteps: EksStep[] = [
  {
    id: 'identify',
    step: 1,
    name: 'Identifizieren',
    description: 'Den systemischen Engpass finden',
    amsApplication: 'Social License to Operate ist DER Engpass für Drohnenlogistik-Skalierung',
    icon: Eye
  },
  {
    id: 'exploit',
    step: 2,
    name: 'Ausnutzen',
    description: 'Maximale Nutzung bestehender Kapazität',
    amsApplication: 'Bestehende Akustik-Expertise für Drohnenmarkt nutzen',
    icon: Zap
  },
  {
    id: 'subordinate',
    step: 3,
    name: 'Unterordnen',
    description: 'Alles andere dem Engpass unterordnen',
    amsApplication: 'Alle Features auf Akzeptanz-Steigerung ausrichten',
    icon: GitBranch
  },
  {
    id: 'elevate',
    step: 4,
    name: 'Heben',
    description: 'Kapazität des Engpasses erhöhen',
    amsApplication: 'UAS-NoiseCheck System entwickeln, Zertifizierungen aufbauen',
    icon: TrendingUp
  },
  {
    id: 'repeat',
    step: 5,
    name: 'Wiederholen',
    description: 'Nächsten Engpass identifizieren',
    amsApplication: 'Kontinuierliche Marktbeobachtung für neue Bottlenecks',
    icon: RefreshCw
  }
]

export const eksBottleneck = {
  identified: 'Social License to Operate',
  description: 'Die gesellschaftliche Akzeptanz ist der kritische Engpass, der die Skalierung der gesamten Drohnenlogistik-Industrie limitiert.',
  evidence: [
    'Iserlohn-Fallstudie: Technisch perfekt, sozial gescheitert',
    '78% der Bürger haben Lärmbedenken bei Drohnen',
    'Keine Regulierung ohne nachgewiesene Akzeptanz',
    'Morpheus-Genehmigung dauerte 2+ Jahre wegen Akzeptanznachweis'
  ],
  solution: 'AMS Audio löst genau diesen Engpass mit objektiver Lärmmessung und Akzeptanzmonitoring',
  impact: 'Wer den Engpass löst, kontrolliert den Marktzugang'
}

// ============================================
// PDCA - Plan-Do-Check-Act
// ============================================

export const pdcaContent = {
  title: 'PDCA - Die Lernende Organisation',
  subtitle: 'Kontinuierliche Verbesserung durch systematisches Lernen',
  description: 'Der PDCA-Zyklus ist die Basis für Agilität und Reaktionsgeschwindigkeit in der VUCAD-Welt.'
}

export interface PdcaPhase {
  id: string
  name: string
  nameDe: string
  description: string
  amsApplication: string
  color: string
  icon: typeof Target
}

export const pdcaPhases: PdcaPhase[] = [
  {
    id: 'plan',
    name: 'Plan',
    nameDe: 'Planen',
    description: 'Ziele definieren, Hypothesen aufstellen',
    amsApplication: 'Marktanalyse, Kundenanforderungen, Feature-Roadmap',
    color: 'blue',
    icon: Target
  },
  {
    id: 'do',
    name: 'Do',
    nameDe: 'Umsetzen',
    description: 'Geplante Maßnahmen durchführen',
    amsApplication: 'Pilotprojekte, MVP-Entwicklung, Kundentests',
    color: 'green',
    icon: Zap
  },
  {
    id: 'check',
    name: 'Check',
    nameDe: 'Prüfen',
    description: 'Ergebnisse messen und analysieren',
    amsApplication: 'Akustikmessungen auswerten, Kundenfeedback analysieren',
    color: 'orange',
    icon: BarChart3
  },
  {
    id: 'act',
    name: 'Act',
    nameDe: 'Handeln',
    description: 'Anpassungen vornehmen, standardisieren',
    amsApplication: 'Produktverbesserungen, Prozessoptimierung, Skalierung',
    color: 'purple',
    icon: RefreshCw
  }
]

// ============================================
// PARETO - Das 80/20 Prinzip
// ============================================

export const paretoContent = {
  title: 'Pareto-Prinzip',
  subtitle: '80% der Wirkung mit 20% des Aufwands',
  description: 'Fokussierung auf die wenigen kritischen Faktoren, die den größten Unterschied machen.',
  principle: '20% der Ursachen sind für 80% der Ergebnisse verantwortlich.'
}

export interface ParetoPriority {
  id: string
  category: string
  highImpact: string[]
  percentage: string
  icon: typeof Target
}

export const paretoPriorities: ParetoPriority[] = [
  {
    id: 'customers',
    category: 'Kunden',
    highImpact: [
      'Drohnenbetreiber mit SAIL III+ Genehmigungsbedarf',
      'Kommunen mit aktiven Drohnenprojekten',
      'Regulierungsbehörden (LBA, EASA)'
    ],
    percentage: '20% der Kunden → 80% des Umsatzes',
    icon: Users
  },
  {
    id: 'features',
    category: 'Features',
    highImpact: [
      'Echtzeit-Lärmmonitoring',
      'Regulatorischer Compliance-Report',
      'Stakeholder-Dashboard'
    ],
    percentage: '20% der Features → 80% des Kundennutzens',
    icon: Layers
  },
  {
    id: 'markets',
    category: 'Märkte',
    highImpact: [
      'Deutschland (First Mover, strenge Regulierung)',
      'Benelux (hohe Drohnendichte)',
      'Skandinavien (Innovationsfreudigkeit)'
    ],
    percentage: '20% der Märkte → 80% des Wachstums',
    icon: Compass
  }
]

// ============================================
// HOSHIN KANRI X-MATRIX
// ============================================

export const hoshinKanriContent = {
  title: 'Hoshin Kanri X-Matrix',
  subtitle: 'Strategisches Alignment von Vision zu Aktion',
  description: 'Verbindet langfristige Ziele (3-5 Jahre) mit Jahreszielen, Prioritätsinitiativen und messbaren KPIs.'
}

export interface HoshinElement {
  id: string
  type: 'longterm' | 'annual' | 'initiative' | 'kpi'
  content: string
  connections: string[]
}

export const hoshinMatrix = {
  longTermGoals: [
    { id: 'lt1', content: 'Marktführer für Drohnen-Akustik in DACH', timeframe: '3-5 Jahre' },
    { id: 'lt2', content: 'Standard-Setter für EU-Lärmrichtlinien', timeframe: '3-5 Jahre' },
    { id: 'lt3', content: 'Plattform für 10.000+ Drohnenflüge/Tag', timeframe: '3-5 Jahre' }
  ],
  annualGoals: [
    { id: 'ag1', content: '10 Enterprise-Kunden gewinnen', year: '2025' },
    { id: 'ag2', content: 'EASA-Partnerschaft etablieren', year: '2025' },
    { id: 'ag3', content: 'Series A abschließen', year: '2025' }
  ],
  initiatives: [
    { id: 'in1', content: 'UAS-NoiseCheck Produktlaunch', priority: 'P1' },
    { id: 'in2', content: 'Pilot mit 3 Kommunen', priority: 'P1' },
    { id: 'in3', content: 'Zertifizierungs-Partnerschaften', priority: 'P2' }
  ],
  kpis: [
    { id: 'kpi1', content: 'MRR €50k', target: 'Q4/2025' },
    { id: 'kpi2', content: 'NPS > 50', target: 'ongoing' },
    { id: 'kpi3', content: '99.9% Uptime', target: 'ongoing' }
  ]
}

// ============================================
// VSM - VIABLE SYSTEM MODEL
// ============================================

export const vsmContent = {
  title: 'Viable System Model',
  subtitle: 'Kybernetisches Organisationsmodell',
  description: 'Ein Modell, das die Balance zwischen interner Optimierung (System 3) und externer Anpassung (System 4) unter einer klaren Vision (System 5) gewährleistet.'
}

export interface VsmSystem {
  id: string
  system: number
  name: string
  function: string
  amsImplementation: string
  icon: typeof Shield
}

export const vsmSystems: VsmSystem[] = [
  {
    id: 'system5',
    system: 5,
    name: 'Identität & Vision',
    function: 'Klare Vision und Werte definieren',
    amsImplementation: 'Mission: Akustische Intelligenz für nachhaltige Drohnenlogistik',
    icon: Compass
  },
  {
    id: 'system4',
    system: 4,
    name: 'Externe Anpassung',
    function: 'Umwelt beobachten, Chancen erkennen',
    amsImplementation: 'Marktbeobachtung, Regulierungstracking, Technologie-Scouting',
    icon: Eye
  },
  {
    id: 'system3',
    system: 3,
    name: 'Interne Optimierung',
    function: 'Ressourcen koordinieren, Effizienz steigern',
    amsImplementation: 'Agile Entwicklung, automatisierte Prozesse, Qualitätssicherung',
    icon: RefreshCw
  }
]

// ============================================
// MANAGEMENT CYCLE - 4 Phasen
// ============================================

export const managementCycleContent = {
  title: 'Der adaptive Management-Kreislauf',
  subtitle: 'Navigieren in der VUCAD-Welt',
  description: 'Ein systematischer Ansatz zur strategischen Steuerung unter Unsicherheit.'
}

export interface ManagementPhase {
  id: string
  phase: number
  name: string
  description: string
  tools: string[]
  amsApplication: string
  icon: typeof Target
  color: string
}

export const managementPhases: ManagementPhase[] = [
  {
    id: 'analyze',
    phase: 1,
    name: 'Analysieren & Verstehen',
    description: 'Fundierte Situationsanalyse als Basis jeder Strategie',
    tools: ['SWOT-Analyse', 'Porter\'s Five Forces', 'TAM/SAM/SOM'],
    amsApplication: 'Marktanalyse durchgeführt, SWOT erstellt, Wettbewerb analysiert',
    icon: Eye,
    color: 'blue'
  },
  {
    id: 'align',
    phase: 2,
    name: 'Ausrichten & Fokussieren',
    description: 'Strategie visualisieren und auf kritischen Punkt konzentrieren',
    tools: ['Hoshin Kanri X-Matrix', 'EKS (Engpass-Strategie)'],
    amsApplication: 'Social License als Engpass identifiziert, alle Ressourcen darauf ausgerichtet',
    icon: Target,
    color: 'teal'
  },
  {
    id: 'execute',
    phase: 3,
    name: 'Umsetzen & Steuern',
    description: 'Strategie in agilen, messbaren Zielen umsetzen',
    tools: ['OKRs (Objectives & Key Results)', 'Pareto-Prinzip'],
    amsApplication: 'Quartals-OKRs definiert, 80/20 für Feature-Priorisierung',
    icon: Zap,
    color: 'orange'
  },
  {
    id: 'learn',
    phase: 4,
    name: 'Lernen & Verbessern',
    description: 'Ergebnisse prüfen und Prozesse optimieren',
    tools: ['PDCA-Zyklus (Plan-Do-Check-Act)'],
    amsApplication: 'Wöchentliche Retros, monatliche KPI-Reviews, kontinuierliche Verbesserung',
    icon: RefreshCw,
    color: 'purple'
  }
]

// ============================================
// UNTERNEHMENS-DNA
// ============================================

export const companyDnaContent = {
  title: 'Unternehmens-DNA',
  subtitle: 'Die drei Stränge erfolgreicher Navigation',
  description: 'EKS, PSP und PDCA bilden die DNA-Doppelhelix erfolgreicher Unternehmen in der VUCAD-Welt.',
  strands: [
    {
      id: 'eks',
      name: 'EKS',
      subtitle: 'Fokus auf Engpässe',
      description: 'Konzentration aller Kräfte auf den systemischen Engpass',
      color: 'orange'
    },
    {
      id: 'psp',
      name: 'PSP',
      subtitle: 'Struktur & Module',
      description: 'Modulare Architektur für Flexibilität und Skalierbarkeit',
      color: 'teal'
    },
    {
      id: 'pdca',
      name: 'PDCA',
      subtitle: 'Lernen & Anpassen',
      description: 'Kontinuierliche Verbesserung durch systematisches Lernen',
      color: 'green'
    }
  ]
}

// ============================================
// STRATEGIC SYNTHESIS
// ============================================

export const strategicSynthesis = {
  title: 'Strategische Synthese',
  subtitle: 'AMS Audio im VUCAD-Kontext',
  insight: 'AMS Audio wendet diese Management-Prinzipien konsequent an:',
  applications: [
    {
      principle: 'EKS',
      application: 'Social License als Engpass erkannt → AaaS als Lösung',
      impact: 'Alleinstellungsmerkmal im Markt'
    },
    {
      principle: 'Pareto',
      application: '20% der Features (Echtzeit-Monitoring) → 80% des Wertes',
      impact: 'Fokussierte Produktentwicklung'
    },
    {
      principle: 'PDCA',
      application: 'Iterative Produktentwicklung mit Kundenfeedback',
      impact: 'Schnelle Marktanpassung'
    },
    {
      principle: 'Hoshin Kanri',
      application: 'Vision → Jahresziele → OKRs → KPIs durchgängig verknüpft',
      impact: 'Strategische Klarheit'
    }
  ],
  conclusion: 'Diese systematische Herangehensweise reduziert das Investitionsrisiko und maximiert die Erfolgschancen in einem volatilen Markt.'
}
