import { Building, Landmark, Users } from 'lucide-react'
import type { Stakeholder } from '../types'

export const stakeholders: Stakeholder[] = [
  {
    id: 'operators',
    icon: Building,
    name: 'Betreiber',
    description: 'Drohnenlogistik-Unternehmen wie Morpheus, HHLA Sky und andere Innovatoren der urbanen Mobilität.',
    benefits: [
      {
        id: 'legal-security',
        title: 'Rechtssichere Planung',
        description: 'Flugrouten und Betriebszeiten auf Basis validierter Schallprognosen planen – vor dem ersten Flug.'
      },
      {
        id: 'data-foundation',
        title: 'Objektive Datengrundlage',
        description: 'Kommunikation mit Behörden und Anwohnern auf Basis nachvollziehbarer, wissenschaftlicher Messungen.'
      },
      {
        id: 'faster-approval',
        title: 'Beschleunigte Genehmigung',
        description: 'Behördenkonforme Gutachten reduzieren Rückfragen und verkürzen Genehmigungsverfahren erheblich.'
      },
      {
        id: 'community-trust',
        title: 'Community-Vertrauen',
        description: 'Transparente Daten und proaktive Kommunikation bauen die "Social Operating License" auf.'
      }
    ],
    cta: 'Demo für Betreiber'
  },
  {
    id: 'municipalities',
    icon: Landmark,
    name: 'Kommunen & Behörden',
    description: 'Städte, Gemeinden und Genehmigungsbehörden, die innovative Mobilität ermöglichen und regulieren.',
    benefits: [
      {
        id: 'capex-opex',
        title: 'Von CAPEX zu OPEX',
        description: 'Hohe Investitionsausgaben für Messtechnik werden zu planbaren, budgetfreundlichen Betriebsausgaben.'
      },
      {
        id: 'funding-ready',
        title: 'Förderantragsreifes Reporting',
        description: 'Berichte, die direkt für Förderanträge nutzbar sind – Zugang zu komplexen Förderströmen erleichtern.'
      },
      {
        id: 'lap-compliance',
        title: 'LAP-Konformität',
        description: 'Erfüllung der Lärmaktionsplan-Anforderungen nach § 47 BImSchG mit kontinuierlichem Monitoring.'
      },
      {
        id: 'citizen-transparency',
        title: 'Bürger-Transparenz',
        description: 'Objektive Daten für die Bürgerkommunikation – Vertrauen durch Nachvollziehbarkeit.'
      }
    ],
    cta: 'Lösungen für Kommunen'
  },
  {
    id: 'citizens',
    icon: Users,
    name: 'Bürger & Anwohner',
    description: 'Die Menschen, die mit den Auswirkungen urbaner Drohnenlogistik leben – und deren Akzeptanz entscheidend ist.',
    benefits: [
      {
        id: 'noise-protection',
        title: 'Lärmschutz-Garantie',
        description: 'Verbindliche Einhaltung der TA Lärm Grenzwerte – messbar und nachprüfbar.'
      },
      {
        id: 'transparency',
        title: 'Transparenz über Flugrouten',
        description: 'Einsicht in geplante Routen, Flugzeiten und Lärmprognosen – keine vollendeten Tatsachen mehr.'
      },
      {
        id: 'participation',
        title: 'Echte Beteiligung',
        description: 'Möglichkeit zur Stellungnahme vor Genehmigung – Bedenken werden gehört und adressiert.'
      },
      {
        id: 'quality-of-life',
        title: 'Lebensqualität erhalten',
        description: 'Innovation und Ruhe müssen kein Widerspruch sein – mit intelligenter Planung.'
      }
    ],
    cta: 'Mehr erfahren'
  }
]

export const stakeholderSectionContent = {
  title: 'Vorteile für alle Stakeholder',
  subtitle: 'Wertschöpfung entlang der gesamten Wertschöpfungskette',
  description: 'AaaS schafft Mehrwert für Betreiber, Kommunen und Bürger – durch objektive Daten, rechtssichere Prozesse und transparente Kommunikation.'
}

export const valueProposition = {
  forOperators: 'Rechtssichere Planung und beschleunigte Genehmigungen',
  forMunicipalities: 'Planbare Kosten und förderantragsreifes Reporting',
  forCitizens: 'Lärmschutz-Garantie und echte Transparenz'
}
