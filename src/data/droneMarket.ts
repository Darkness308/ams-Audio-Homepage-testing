import {
  Clock,
  TrendingDown,
  Lightbulb,
  Mountain,
  Volume2,
  ShieldAlert,
  Eye,
  FileText,
  Users
} from 'lucide-react'
import type { MarketPotential, MarketRisk, DroneMarketData } from '../types'

export const marketPotentials: MarketPotential[] = [
  {
    id: 'efficiency',
    icon: Clock,
    title: 'Effizienzsteigerung & Zeitersparnis',
    description: 'Insbesondere in der medizinischen Notfall-Logistik: Transport von Laborproben im Stundentakt zwischen Laboren und Krankenhäusern beschleunigt kritische Lieferketten.'
  },
  {
    id: 'emission',
    icon: TrendingDown,
    title: 'Reduzierung von Verkehr & Emissionen',
    description: 'Entlastung des bodengebundenen Verkehrs auf der "letzten Meile" reduziert Staus, Emissionen und Lärmbelastung in urbanen Räumen.'
  },
  {
    id: 'business',
    icon: Lightbulb,
    title: 'Neue Geschäftsmodelle',
    description: 'Erschließung innovativer Dienstleistungen und Geschäftsfelder durch die dritte Dimension des Warentransports.'
  },
  {
    id: 'terrain',
    icon: Mountain,
    title: 'Umgehung von Hindernissen',
    description: 'Überwindung von Verkehrsstaus und topografischen Hindernissen. Unterstützung bei Katastrophenlogistik und schwer zugänglichen Gebieten.'
  }
]

export const marketRisks: MarketRisk[] = [
  {
    id: 'noise',
    icon: Volume2,
    title: 'Lärmbelästigung',
    description: 'Psychoakustische Wirkung der neuartigen Geräusche. Anwohner melden bis zu 70 dB(A) - deutlich über den TA Lärm Grenzwerten (60/45 dB für Mischgebiete).',
    severity: 'high'
  },
  {
    id: 'safety',
    icon: ShieldAlert,
    title: 'Sicherheitsbedenken',
    description: 'Emotionale Sorge vor Abstürzen über bewohntem Gebiet. Zwischenfälle, auch kleinere, untergraben schnell die öffentliche Glaubwürdigkeit.',
    severity: 'high'
  },
  {
    id: 'privacy',
    icon: Eye,
    title: 'Privatsphäre & Überwachung',
    description: 'Kameras an Drohnen lösen Befürchtungen aus, überwacht zu werden. Das Gefühl, ohne Einwilligung gefilmt zu werden, schafft tiefes Misstrauen.',
    severity: 'medium'
  },
  {
    id: 'regulation',
    icon: FileText,
    title: 'Komplexe Regulatorik',
    description: 'Überlappende Rechtsgebiete: EASA-Luftrecht, nationale TA Lärm, SORA-Methodik. Simultane Beherrschung ist entscheidender Wettbewerbsvorteil.',
    severity: 'high'
  },
  {
    id: 'acceptance',
    icon: Users,
    title: 'Mangelnde soziale Akzeptanz',
    description: 'Fehlende Transparenz und Partizipation führen zu Widerstand. Die "Social Operating License" muss aktiv gemanagt werden.',
    severity: 'high'
  }
]

export const droneMarketData: DroneMarketData = {
  potentials: marketPotentials,
  risks: marketRisks
}

export const droneMarketSectionContent = {
  title: 'Urbane Drohnenlogistik',
  subtitle: 'Potenziale und Risiken im Spannungsfeld',
  description: 'Die urbane Logistik, insbesondere der KEP-Sektor, ist das Rückgrat der städtischen Versorgung. Drohnentechnologie rückt als disruptive Lösung in den Fokus – mit vielversprechenden Potenzialen und signifikanten Risiken.',
  insight: 'Die größten Hürden sind nicht technischer Natur, sondern liegen in Akzeptanz und Regulatorik.'
}

export const industryPartners = [
  {
    name: 'Fraunhofer IML',
    role: 'Forschung & Drohnenschwärme',
    highlight: '20-Drohnen-Schwarm für autonome Logistikaufgaben'
  },
  {
    name: 'Morpheus GmbH',
    role: 'Medizinische Drohnenlogistik',
    highlight: 'Laborproben-Transport im Stundentakt'
  },
  {
    name: 'HHLA Sky',
    role: 'Skalierung Betriebskonzepte',
    highlight: 'Kommerzielle Drohnenlogistik-Infrastruktur'
  }
]
