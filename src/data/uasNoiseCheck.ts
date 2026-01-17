import { Mic, Camera, Satellite, Cloud, Cpu, Shield, Zap, Target } from 'lucide-react'

export const uasNoiseCheckContent = {
  title: 'UAS-NoiseCheck System',
  subtitle: 'Multimodale Messtechnologie nach EASA-Standard',
  description: 'Das erste kommerzielle Messsystem basierend auf der EASA-Messempfehlung vom Oktober 2022. Durch die Fusion verschiedener Datenströme erreichen wir eine bisher unerreichte Präzision und Reproduzierbarkeit.',
  tagline: 'Vier Sensoren. Ein Standard. Rechtssicherheit.'
}

export const measurementComponents = [
  {
    id: 'acoustic',
    icon: Mic,
    title: 'Akustische Komponente',
    subtitle: 'Multimikrofon-Array',
    description: 'Messung des Schalldruckpegels und präzise Lokalisation der Schallquellen an der Drohne (Motoren, Propeller).',
    benefit: 'Liefert wertvolle Daten für gezielte Lärmreduktion in der Produktentwicklung',
    color: 'orange'
  },
  {
    id: 'visual',
    icon: Camera,
    title: 'Visuelle Komponente',
    subtitle: 'Optische Erfassung',
    description: 'Bestimmung der exakten Position und Flugbahn der Drohne im dreidimensionalen Raum.',
    benefit: 'Korrelation der akustischen Daten mit dem exakten Betriebszustand',
    color: 'blue'
  },
  {
    id: 'gnss',
    icon: Satellite,
    title: 'GNSS-Komponente',
    subtitle: 'GPS, Galileo & mehr',
    description: 'Satellitengestützte Validierung der Flugparameter wie Geschwindigkeit und Höhe.',
    benefit: 'Redundante Positionsbestimmung für maximale Genauigkeit',
    color: 'green'
  },
  {
    id: 'meteorological',
    icon: Cloud,
    title: 'Meteorologische Komponente',
    subtitle: 'Umgebungssensoren',
    description: 'Kontinuierliche Erfassung von Windgeschwindigkeit, Windrichtung, Temperatur und Luftfeuchtigkeit.',
    benefit: 'Normierung der Messergebnisse für vergleichbare Zertifikate',
    color: 'purple'
  }
]

export const systemAdvantages = [
  {
    id: 'easa-compliant',
    icon: Shield,
    title: 'EASA-konform',
    description: 'Erste kommerzielle Implementierung der offiziellen EASA-Messempfehlung'
  },
  {
    id: 'reproducible',
    icon: Target,
    title: 'Reproduzierbar',
    description: 'Standardisierte Verfahren für vergleichbare, rechtssichere Ergebnisse'
  },
  {
    id: 'multimodal',
    icon: Cpu,
    title: 'Multimodal',
    description: 'Datenfusion aus 4 Sensortypen für höchste Präzision'
  },
  {
    id: 'fast',
    icon: Zap,
    title: 'Effizient',
    description: 'Ziel: < 8 Stunden pro Standardzertifizierung'
  }
]

export const technicalSpecs = {
  accuracy: '>99%',
  measurementTime: '< 8 Stunden',
  dataPoints: '50+ Drohnentypen in Datenbank',
  certification: 'LBA/BAZL akkreditiert (Ziel)'
}
