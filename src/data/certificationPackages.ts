import { FileCheck, Repeat, Building2 } from 'lucide-react'

export const certificationContent = {
  title: 'Zertifizierungspakete',
  subtitle: 'Flexible Lösungen für jeden Bedarf',
  description: 'Von der einmaligen Typenzertifizierung bis zur kontinuierlichen F&E-Partnerschaft – unser "Acoustics as a Service" Modell passt sich Ihren Anforderungen an.'
}

export interface CertificationPackage {
  id: string
  name: string
  icon: typeof FileCheck
  price: string
  priceModel: string
  description: string
  features: string[]
  targetCustomer: string
  highlighted?: boolean
}

export const certificationPackages: CertificationPackage[] = [
  {
    id: 'basic',
    name: 'Zertifizierung Basic',
    icon: FileCheck,
    price: '15.000 €',
    priceModel: 'Einmalzahlung',
    description: 'Einmalige, standardisierte Schallemissionsmessung und Ausstellung eines Zertifikats gemäß EASA-Empfehlung für eine einzelne Drohnenkonfiguration.',
    features: [
      'Standardisierte EASA-konforme Messung',
      'Offizielles Lärmzertifikat',
      'Detaillierter Messbericht',
      'Behördenkonforme Dokumentation',
      'Einmalige Beratung'
    ],
    targetCustomer: 'Ideal für einzelne Typenzulassungen'
  },
  {
    id: 'professional',
    name: 'AaaS Professional',
    icon: Repeat,
    price: '25.000 €',
    priceModel: 'Jährlich',
    description: 'Jährliches Abonnement mit Erstzertifizierung, jährlicher Re-Validierung und Zugang zur anonymisierten Akustik-Datenbank für Benchmarking.',
    features: [
      'Alles aus Basic',
      'Jährliche Re-Validierung inklusive',
      'Zugang zur Akustik-Datenbank',
      'Benchmarking gegen Wettbewerber',
      'Prioritäts-Support',
      'Software-Update Nachzertifizierung'
    ],
    targetCustomer: 'Ideal für Flottenbetreiber',
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'AaaS Enterprise',
    icon: Building2,
    price: '60.000 €+',
    priceModel: 'Projektbasiert + Abo',
    description: 'Maßgeschneidertes Paket für OEMs mit intensivem F&E-Bedarf. Kontinuierlicher Mess-Support, Lärmsimulation und beratende Begleitung.',
    features: [
      'Alles aus Professional',
      'Unbegrenzte Messungen',
      'Kontinuierlicher F&E-Support',
      'Lärmsimulationsdienste',
      'Akustische Designberatung',
      'Dedicated Account Manager',
      'On-Site Messungen möglich'
    ],
    targetCustomer: 'Ideal für Drohnenhersteller (OEMs)'
  }
]

export const packageComparison = {
  features: [
    { name: 'EASA-konforme Messung', basic: true, professional: true, enterprise: true },
    { name: 'Offizielles Zertifikat', basic: true, professional: true, enterprise: true },
    { name: 'Jährliche Re-Validierung', basic: false, professional: true, enterprise: true },
    { name: 'Akustik-Datenbank Zugang', basic: false, professional: true, enterprise: true },
    { name: 'Benchmarking', basic: false, professional: true, enterprise: true },
    { name: 'Unbegrenzte Messungen', basic: false, professional: false, enterprise: true },
    { name: 'F&E-Beratung', basic: false, professional: false, enterprise: true },
    { name: 'Lärmsimulation', basic: false, professional: false, enterprise: true }
  ]
}

export const xaasAdvantages = [
  {
    title: 'Flexibilität',
    description: 'Dienstleistungspakete nach Bedarf – von einmalig bis kontinuierlich'
  },
  {
    title: 'Kosteneffizienz',
    description: 'Planbare Gebühren statt hoher Einmalinvestitionen in eigenes Equipment'
  },
  {
    title: 'Partnerschaft',
    description: 'Begleitung über den gesamten Produktlebenszyklus'
  }
]
