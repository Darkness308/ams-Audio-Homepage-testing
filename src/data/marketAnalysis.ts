import { TrendingUp, Users, Globe, FileText, Building, Plane, Radio } from 'lucide-react'

export const marketAnalysisContent = {
  title: 'Markt- & Wettbewerbsanalyse',
  subtitle: 'Ein regulatorisch geschaffener Bedarfsmarkt',
  description: 'Der Markt für zivile Drohnenanwendungen wächst exponentiell. Die EU-Verordnungen transformieren die Lärmzertifizierung von einem "Nice-to-have" zu einem "Must-have".'
}

export const marketSize = {
  tam: {
    label: 'TAM',
    fullName: 'Total Addressable Market',
    description: 'Alle Zertifizierungs- und Akustik-Dienstleistungen für UAS in Europa',
    icon: Globe
  },
  sam: {
    label: 'SAM',
    fullName: 'Serviceable Addressable Market',
    description: 'Hersteller und professionelle Betreiber im DACH-Raum',
    icon: Building
  },
  som: {
    label: 'SOM',
    fullName: 'Serviceable Obtainable Market',
    description: 'Führende Position bei Logistikdrohnen und neuen Herstellern (3 Jahre)',
    icon: TrendingUp
  }
}

export const marketDrivers = [
  {
    id: 'regulatory',
    icon: FileText,
    title: 'Regulatorischer Druck',
    description: 'EU-Verordnungen (2019/945, 2019/947) fordern Nachweise über Lärmemissionen für höhere Risikoklassen.',
    impact: 'Obligatorischer Bedarfsmarkt'
  },
  {
    id: 'acceptance',
    icon: Users,
    title: 'Gesellschaftliche Akzeptanz',
    description: 'Lärmschutz ist Voraussetzung für Drohnenbetrieb in besiedelten Gebieten. Ohne Nachweis keine Akzeptanz.',
    impact: 'Social License to Operate'
  },
  {
    id: 'technology',
    icon: Plane,
    title: 'Technologischer Fortschritt',
    description: 'Kommerzielle Nutzung wird vielfältiger: Last-Mile-Delivery, Inspektion, Landwirtschaft.',
    impact: 'Exponentielles Wachstum'
  },
  {
    id: 'political',
    icon: Radio,
    title: 'Politische Unterstützung',
    description: 'U-Space Aufbau (z.B. Zürich bis 2025) signalisiert starke politische Förderung.',
    impact: 'Verdichtung des Drohnenverkehrs'
  }
]

export const targetSegments = [
  {
    id: 'oems',
    name: 'Drohnenhersteller (OEMs)',
    icon: Building,
    description: 'Unternehmen jeder Größe, die Drohnen für den europäischen Markt entwickeln.',
    need: 'Normgerechte Lärmzertifizierung als Teil der Typenzulassung',
    painPoint: 'Unsicherheit in F&E, Risiko kostspieliger Nachbesserungen'
  },
  {
    id: 'operators',
    name: 'Professionelle Betreiber',
    icon: Plane,
    description: 'Unternehmen mit Drohnenflotten für Logistik, Inspektion, etc.',
    need: 'Betriebsgenehmigungen für "spezielle Kategorie" (höheres Risiko)',
    painPoint: 'Existenzielle Abhängigkeit von Lizenzen und Bevölkerungsakzeptanz'
  }
]

export const competitiveLandscape = {
  title: 'Wettbewerbslandschaft',
  subtitle: 'Ein "weißer Fleck" auf dem Markt',
  description: 'Aufgrund fehlender Normen und unseres einzigartigen multimodalen Ansatzes existiert derzeit kein direkter Wettbewerber.',

  positioning: {
    xAxis: 'Spezialisierung auf UAS-Akustik',
    yAxis: 'Flexibilität des Service-Modells',
    acoustiScanPosition: 'Hoch / Hoch'
  },

  indirectCompetitors: [
    {
      type: 'Allgemeine Akustik-Ingenieurbüros',
      weakness: 'Fehlendes Know-how über Flugdynamik und Luftfahrtnormen',
      quadrant: 'Niedrig / Niedrig'
    },
    {
      type: 'Universitäre Forschungsinstitute',
      weakness: 'Nicht auf schnelle, skalierbare Zertifizierung ausgerichtet',
      quadrant: 'Hoch / Niedrig'
    },
    {
      type: 'Interne Testabteilungen',
      weakness: 'Hohe Kosten, kein Wert unabhängiger Drittzertifizierung',
      quadrant: 'Hoch / Niedrig'
    }
  ],

  competitiveAdvantage: 'Strategische Kombination aus hochspezialisierter, standardkonformer Technologie (UAS-NoiseCheck) und kundenorientiertem, skalierbarem Geschäftsmodell (AaaS).'
}

export const inactivityCosts = [
  'Gehemmte Innovation: Kein klarer ROI für leisere Technologien',
  'Verzögerte Markteinführung: Genehmigungsverfahren scheitern',
  'Investitionsrisiken: Investoren meiden unregulierte Branche',
  'Gesellschaftliche Ablehnung: "Anti-Drohnen"-Stimmung'
]
