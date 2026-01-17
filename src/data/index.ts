// Central data exports for AMS Audio Homepage

// Market & Context
export * from './megatrends'
export * from './smartCity'
export * from './droneMarket'
export * from './caseStudy'

// AaaS Solution
export * from './aaaSolution'
export * from './dualEnabler'
export * from './roiData'
export * from './daasIntegration'
export * from './socialLicense'

// UAS-NoiseCheck & Certification
export * from './uasNoiseCheck'
export * from './certificationPackages'

// Market & Business Analysis
export * from './marketAnalysis'
export * from './swotAnalysis'
export * from './financials'

// EU Regulation & Investment
export * from './euRegulation'
export * from './geographicZones'
export * from './investmentOpportunities'

// Strategy & Stakeholders
export * from './strategyFramework'
export * from './successFactors'
export * from './stakeholders'

// Navigation items - Complete navigation structure
export const navItems = [
  { label: 'Markt', href: '#megatrends', group: 'context' },
  { label: 'Smart City', href: '#smartcity', group: 'context' },
  { label: 'EU-Regulierung', href: '#euregulation', group: 'regulation' },
  { label: 'Lösung', href: '#solution', group: 'solution' },
  { label: 'UAS-NoiseCheck', href: '#uasnoisecheck', group: 'product' },
  { label: 'Strategie', href: '#strategy', group: 'strategy' },
  { label: 'Marktanalyse', href: '#marketanalysis', group: 'business' },
  { label: 'Investment', href: '#investment', group: 'investor' },
  { label: 'Kontakt', href: '#contact', group: 'contact' }
]

// Navigation groups for dropdown menus (optional future use)
export const navGroups = {
  context: { label: 'Markt & Kontext', order: 1 },
  regulation: { label: 'Regulierung', order: 2 },
  solution: { label: 'AaaS Lösung', order: 3 },
  product: { label: 'Produkte', order: 4 },
  business: { label: 'Business', order: 5 },
  investor: { label: 'Investoren', order: 6 },
  contact: { label: 'Kontakt', order: 7 }
}

// Hero content
export const heroContent = {
  headline: 'Lärm verstehen.',
  subheadline: 'Compliance garantieren.',
  description: 'Die Zukunft der urbanen Drohnenlogistik beginnt mit leisem Fliegen. Acoustic-as-a-Service für die Smart City der Zukunft.',
  ctaPrimary: 'Demo starten',
  ctaSecondary: 'Mehr erfahren'
}

// Statistics
export const statistics = [
  { value: '98%', label: 'Unter Grenzwert', description: 'Aller Flüge erfüllen TA Lärm' },
  { value: '80%', label: 'Zeitersparnis', description: 'Bei Genehmigungsverfahren' },
  { value: '6.6:1', label: 'ROI', description: 'Return on Investment' },
  { value: '24/7', label: 'Monitoring', description: 'Echtzeit-Überwachung' }
]

// Contact info
export const contactInfo = {
  company: 'AMS Audio Group',
  address: 'Ruhrgebiet, Deutschland',
  email: 'info@ams-audio.com',
  phone: '+49 XXX XXXXXXX',
  tagline: 'Acoustics as a Service'
}

// Footer
export const footerContent = {
  copyright: '© 2026 AMS Audio. Acoustics as a Service.',
  tagline: 'Die Brücke zwischen technologischer Innovation und gesellschaftlicher Akzeptanz.'
}
