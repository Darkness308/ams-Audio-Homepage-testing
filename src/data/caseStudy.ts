import {
  AlertTriangle,
  Radio,
  Pause,
  Volume2,
  ShieldAlert,
  Eye,
  MessageSquareOff
} from 'lucide-react'
import type { CaseStudyPhase, ConflictCause, CaseStudy } from '../types'

export const caseStudyPhases: CaseStudyPhase[] = [
  {
    id: 'trigger',
    phase: 'Phase 1',
    title: 'Auslöser',
    description: 'Das Projekt sah hochfrequenten Transport von medizinischen Laborproben per Drohne vor, potenziell rund um die Uhr. Kurz nach Betriebsaufnahme formierte sich Widerstand unter Anwohnern entlang der Flugroute.',
    icon: AlertTriangle
  },
  {
    id: 'escalation',
    phase: 'Phase 2',
    title: 'Eskalation',
    description: 'Anstatt formelle Beschwerdewege zu nutzen, wandten sich Anwohner direkt an Radio MK. Die Betreiber erfuhren vom Problem erst aus den Nachrichten – ein fundamentaler "blinder Fleck" im Community Management.',
    icon: Radio
  },
  {
    id: 'consequence',
    phase: 'Phase 3',
    title: 'Konsequenz',
    description: 'Der öffentliche Druck zwang die Stadt Iserlohn zum Handeln. Morpheus stellte den Flugbetrieb proaktiv ein. Diese Kaskade führte zum vollständigen operativen Stillstand des Projekts.',
    icon: Pause
  }
]

export const conflictCauses: ConflictCause[] = [
  {
    id: 'noise',
    icon: Volume2,
    title: 'Lärmbelastung',
    description: 'Die subjektive Störung war besonders hoch – nicht nur wegen des Schallpegels, sondern auch durch Neuartigkeit und Frequenz des Geräuschs. Der geplante 24/7-Stundentakt erzeugte die Wahrnehmung eines permanenten Eingriffs.',
    data: 'Gemessen: 70 dB(A) | TA Lärm Grenzwert: 60 dB(A) Tag / 45 dB(A) Nacht',
    severity: 'critical'
  },
  {
    id: 'safety',
    icon: ShieldAlert,
    title: 'Sicherheitsangst',
    description: 'Die emotionale Sorge vor Abstürzen wurde durch einen medial verbreiteten Vorfall (Kollision mit Baum) massiv verstärkt. Obwohl Betreiber auf zertifizierte Sicherheitssysteme verwiesen, war die Glaubwürdigkeit untergraben.',
    severity: 'high'
  },
  {
    id: 'privacy',
    icon: Eye,
    title: 'Privatsphäre',
    description: 'Die mit Kameras ausgestatteten Drohnen lösten explizit die Befürchtung aus, überwacht zu werden. Das Gefühl, dass private Grundstücke ohne Einwilligung gefilmt werden könnten, schuf tiefes Misstrauen.',
    severity: 'high'
  },
  {
    id: 'transparency',
    icon: MessageSquareOff,
    title: 'Mangel an Transparenz',
    description: 'Der strategische Kardinalfehler und die eigentliche Wurzel des Konflikts. Die Forderung nach "mehr Transparenz über Flugrouten und Genehmigungen" zeigt: Anwohner fühlten sich übergangen und vor vollendete Tatsachen gestellt.',
    severity: 'critical'
  }
]

export const caseStudy: CaseStudy = {
  title: 'Fallstudie Iserlohn',
  location: 'Iserlohn, NRW',
  company: 'Morpheus GmbH',
  phases: caseStudyPhases,
  causes: conflictCauses,
  lesson: 'Die Fallstudie postuliert die Notwendigkeit eines integrierten Lösungsansatzes, der die regulatorischen Anforderungen objektiviert und messbar macht, während er gleichzeitig die soziale Akzeptanz durch proaktives Management sicherstellt.'
}

export const caseStudySectionContent = {
  title: 'Fallstudie Iserlohn',
  subtitle: 'Wenn Innovation auf Realität trifft',
  description: 'Die Fallstudie des Drohnen-Logistikprojekts zeigt exemplarisch die Bruchstellen zwischen technologischer Innovation und gesellschaftlicher Realität. Sie demonstriert, wie nicht-technische Faktoren über Erfolg oder Misserfolg entscheiden.',
  keyInsight: 'Technologieführerschaft allein ist wertlos ohne die Meisterschaft der gesellschaftlichen Integration.'
}
