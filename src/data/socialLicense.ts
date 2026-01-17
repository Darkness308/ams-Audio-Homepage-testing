import { Users, Map, Route, Volume2, TrendingUp, Building, Heart } from 'lucide-react'

export interface NoiseManagementFeature {
  id: string
  icon: typeof Map
  title: string
  description: string
}

export interface StakeholderBenefit {
  id: string
  stakeholder: string
  benefit: string
}

export const socialLicenseContent = {
  title: 'Social License to Operate',
  subtitle: 'Gesellschaftliche Akzeptanz als strategischer Vorteil',
  description: 'Die "Social License to Operate" beschreibt die gesellschaftliche Akzeptanz, die über die rein rechtliche Genehmigung hinausgeht. Für Drohnenlogistik in besiedelten Gebieten ist Lärmbelästigung die größte Hürde.',
  keyInsight: 'Die Sicherung der gesellschaftlichen Betriebserlaubnis ist kein "Soft-Faktor", sondern ein hart kalkulierbarer, langfristiger strategischer Vorteil.'
}

export const noiseManagementFeatures: NoiseManagementFeature[] = [
  {
    id: 'emission-control',
    icon: Volume2,
    title: 'Emissionskontrolle',
    description: 'Präzise Messung des von der Drohne erzeugten Schalls in Echtzeit.'
  },
  {
    id: 'immission-mapping',
    icon: Map,
    title: 'Dynamische Immissionskarten',
    description: 'Modellierung des tatsächlich am Boden auftreffenden Schallpegels unter Berücksichtigung von Topografie und Architektur.'
  },
  {
    id: 'adaptive-routing',
    icon: Route,
    title: 'Adaptive Routenplanung',
    description: 'Dynamische Anpassung der Flugrouten basierend auf Echtzeit-Lärmdaten und sensiblen Gebieten.'
  },
  {
    id: 'altitude-optimization',
    icon: TrendingUp,
    title: 'Höhenoptimierung',
    description: 'Geringere Flughöhe in unkritischen Gebieten (Energieeinsparung), größere Höhe über lärmempfindlichen Zonen.'
  }
]

export const sensitiveAreas = [
  { type: 'Krankenhäuser', icon: Building, priority: 'Höchste' },
  { type: 'Schulen', icon: Users, priority: 'Hoch' },
  { type: 'Wohngebiete', icon: Heart, priority: 'Hoch' },
  { type: 'Naturschutzgebiete', icon: Map, priority: 'Mittel' }
]

export const stakeholderManagement = {
  title: 'Proaktives Stakeholder-Management',
  description: 'Anstatt auf Beschwerden zu reagieren, kann transparent und datengestützt nachgewiesen werden, dass Lärmschutz proaktiv mit höchster Präzision gemanagt wird.',
  benefits: [
    {
      id: 'residents',
      stakeholder: 'Anwohner',
      benefit: 'Transparenter Nachweis, dass Lärmgrenzen eingehalten werden'
    },
    {
      id: 'municipalities',
      stakeholder: 'Kommunen',
      benefit: 'Datengestützte Grundlage für Genehmigungsentscheidungen'
    },
    {
      id: 'regulators',
      stakeholder: 'Regulierungsbehörden',
      benefit: 'Lückenlose Compliance-Dokumentation'
    }
  ]
}

export const scalabilityAdvantage = {
  title: 'Schlüssel zur Skalierung',
  description: 'Proaktive Lärmsteuerung verhindert, dass Anwohnerwiderstand oder regulatorische Verschärfungen das Wachstum bremsen.',
  points: [
    'Reibungslose Expansion in urbane und suburbane Räume',
    'Vermeidung von Betriebsunterbrechungen durch Beschwerden',
    'Schutz vor plötzlichen regulatorischen Verschärfungen',
    'Langfristige Absicherung des Geschäftsmodells'
  ]
}

export const transformationSteps = [
  {
    from: 'Technische Messung',
    to: 'Management gesellschaftlicher Auswirkungen',
    description: 'Der entscheidende Wandel vom reinen Messen zum aktiven Steuern'
  },
  {
    from: 'Reaktives Beschwerdemanagement',
    to: 'Proaktive Lärmvermeidung',
    description: 'Probleme verhindern statt darauf reagieren'
  },
  {
    from: 'Pauschale Genehmigungen',
    to: 'Dynamische Routenoptimierung',
    description: 'Flexible Anpassung an aktuelle Bedingungen'
  }
]
