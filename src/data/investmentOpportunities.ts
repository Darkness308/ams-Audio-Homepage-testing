import { Pickaxe, Target, Heart, AlertTriangle, FileText, Shield, Users } from 'lucide-react'

export const investmentContent = {
  title: 'Investitionschancen & Risiken',
  subtitle: 'Strategische Analyse für Investoren',
  description: 'Der EU-Regulierungsrahmen schafft nicht nur Hürden, sondern fungiert als Katalysator für bestimmte Geschäftsmodelle und klare Wettbewerbsvorteile.',
  thesis: 'Der EU-Regulierungsrahmen kanalisiert den signifikanten kommerziellen Wert absichtlich in zwei Vertikalen: befähigende Technologieplattformen und hochspezialisierte Betreiber.'
}

export interface InvestmentOpportunity {
  id: string
  icon: typeof Pickaxe
  title: string
  subtitle: string
  description: string
  example?: {
    company: string
    highlight: string
  }
  keyPoints: string[]
}

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: 'picks-shovels',
    icon: Pickaxe,
    title: 'Picks and Shovels',
    subtitle: 'Befähigende Technologien',
    description: 'Das größte kurzfristige Potenzial liegt bei Unternehmen, die die technologische Infrastruktur für regulierungskonformen und skalierbaren Betrieb bereitstellen.',
    example: {
      company: 'HHLA Sky',
      highlight: 'Integrated Control Center (ICC) – IIoT-Plattform für automatisierte Steuerung und Überwachung von Drohnenflotten. Zertifiziert nach IEC 62443.'
    },
    keyPoints: [
      'Nicht nur Effizienz-Tools, sondern essenzielle Compliance-Infrastruktur',
      'Skalierbar für "Spezifische" Kategorie und U-Space-Operationen',
      'Wiederkehrende Umsätze durch Plattform-Modell'
    ]
  },
  {
    id: 'specialized-operators',
    icon: Target,
    title: 'Spezialisierte Betreiber',
    subtitle: 'Hohe Eintrittsbarrieren',
    description: 'Unternehmen, die den anspruchsvollen Genehmigungsprozess für die "Spezifische" Kategorie erfolgreich durchlaufen, errichten hohe Markteintrittsbarrieren.',
    example: {
      company: 'Morpheus Logistik',
      highlight: 'Betriebsgenehmigung nach SAIL III – einer der ersten Betreiber in Europa. Bewiesene Fähigkeit, komplexe regulatorische Anforderungen zu meistern.'
    },
    keyPoints: [
      'Wettbewerbsvorteil ("Moat") durch regulatorische Expertise',
      'Nicht replizierbares Asset, das höhere Bewertungen rechtfertigt',
      'Fortlaufende Compliance-Expertise als dauerhafter Vorteil'
    ]
  },
  {
    id: 'high-value-niches',
    icon: Heart,
    title: 'Hochwertige Nischenanwendungen',
    subtitle: 'Dringender Bedarf, hohe Wertschöpfung',
    description: 'Die regulatorischen Hürden und Kosten lassen sich am ehesten in Anwendungsfällen rechtfertigen, die einen dringenden Bedarf decken und eine hohe Wertschöpfung erzielen.',
    example: {
      company: 'Morpheus + Eurofins GeLaMed + St. Elisabeth Krankenhaus Iserlohn',
      highlight: 'Medizinischer Probentransport: Drohnen überwinden städtischen Verkehr, ermöglichen schnellere Diagnosen und bieten umweltfreundlichere Alternative.'
    },
    keyPoints: [
      'Medizinischer Transport als idealer Erstmarkt',
      'Klarer ROI rechtfertigt regulatorischen Aufwand',
      'Gesellschaftliche Akzeptanz durch lebensrettenden Nutzen'
    ]
  }
]

export interface InvestmentRisk {
  id: string
  icon: typeof AlertTriangle
  title: string
  description: string
  dueDiligence: string
}

export const investmentRisks: InvestmentRisk[] = [
  {
    id: 'complexity',
    icon: FileText,
    title: 'Operative Komplexität & Bürokratie',
    description: 'Der Genehmigungsprozess in der "Spezifischen" Kategorie ist langwierig und kapitalintensiv. LBA-Genehmigung ist nur ein Teil – kommunale Zuständigkeiten (Bauämter, LLB) verursachen unvorhersehbare Verzögerungen.',
    dueDiligence: 'Fähigkeit des Teams prüfen, sich in kommunalen und staatlichen Zuständigkeiten zurechtzufinden.'
  },
  {
    id: 'fragmentation',
    icon: Shield,
    title: 'Fragmentierung durch nationale Zonen',
    description: 'Mitgliedstaaten können weitreichende geografische Zonen festlegen, was die Vision eines harmonisierten Binnenmarktes untergräbt.',
    dueDiligence: 'Skalierungsstrategie für Flickenteppich nationaler Flugbeschränkungen prüfen.'
  },
  {
    id: 'acceptance',
    icon: Users,
    title: 'Sicherheits- und Datenschutzbedenken',
    description: 'Öffentliche Akzeptanz ist fragil. Absturzrisiko und DSGVO-Konformität müssen proaktiv adressiert werden.',
    dueDiligence: 'Prüfen, ob Unternehmen diese Themen als Kern ihrer Betriebsstrategie versteht.'
  }
]

export const investmentThesis = {
  shortTerm: {
    title: 'Kurz- bis mittelfristig',
    opportunities: [
      {
        type: 'Technologieanbieter (Enabler)',
        description: 'Unternehmen, die komplexe Anforderungen an Steuerung, Sicherheit und Compliance in skalierbare Plattformlösungen umsetzen – die "Picks and Shovels" der Branche.'
      },
      {
        type: 'Hochspezialisierte Betreiber',
        description: 'Unternehmen, die den regulatorischen Aufwand für die "Spezifische" Kategorie bewältigen und gezielt hochwertige B2B-Nischen mit klarem ROI bedienen.'
      }
    ]
  },
  longTerm: {
    title: 'Langfristig',
    caution: 'Massenmarktfähige Konsumgüterlieferung bleibt regulatorisch bedingt ein hochriskantes Unterfangen.'
  },
  keyQuestion: 'Jede Due Diligence muss eine tiefgehende Prüfung der regulatorischen Strategie und der Fähigkeit des Teams beinhalten, diese umzusetzen.'
}

export const morpheusAsExample = {
  company: 'Morpheus Logistik',
  achievements: [
    'Erste Betriebsgenehmigung nach SAIL III in Europa',
    'Partnerschaft mit HHLA Sky für ICC-Plattform',
    'Medizinischer Probentransport mit Eurofins GeLaMed',
    'Proaktive Adressierung von Sicherheit und Datenschutz'
  ],
  keySuccess: 'Demonstriert, wie regulatorische Expertise zum Wettbewerbsvorteil wird'
}
