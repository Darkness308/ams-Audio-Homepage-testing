import { Zap, AlertTriangle, TrendingUp, Shield } from 'lucide-react'

export const swotContent = {
  title: 'SWOT-Analyse',
  subtitle: 'Strategische Positionierung',
  description: 'Eine systematische und ehrliche Einschätzung unserer internen Stärken und Schwächen sowie der externen Chancen und Risiken.'
}

export const swotData = {
  strengths: {
    title: 'Stärken',
    subtitle: 'Intern',
    icon: Zap,
    color: 'green',
    items: [
      {
        title: 'Pionierstatus',
        description: 'UAS-NoiseCheck bietet klaren technologischen Vorsprung mit multimodalem Messsystem'
      },
      {
        title: 'Wissenschaftliche Fundierung',
        description: 'Methodik basiert direkt auf offiziellen EASA-Empfehlungen – höchste Glaubwürdigkeit'
      },
      {
        title: 'Flexibles Geschäftsmodell',
        description: 'AaaS senkt Eintrittsbarrieren und fördert langfristige Kundenbeziehungen'
      },
      {
        title: 'Komplementäres Gründerteam',
        description: 'Tiefgreifende Expertise in Akustik, Luftrecht und Unternehmensführung'
      }
    ]
  },
  weaknesses: {
    title: 'Schwächen',
    subtitle: 'Intern',
    icon: AlertTriangle,
    color: 'yellow',
    items: [
      {
        title: 'Schlüsselpersonen-Abhängigkeit',
        description: 'In der Anfangsphase starke Abhängigkeit vom Know-how des Gründerteams'
      },
      {
        title: 'Fehlende Markenbekanntheit',
        description: 'Als neues Unternehmen muss Vertrauen erst aufgebaut werden'
      },
      {
        title: 'Begrenzte Ressourcen',
        description: 'Initial limitierte finanzielle und personelle Kapazitäten'
      }
    ]
  },
  opportunities: {
    title: 'Chancen',
    subtitle: 'Extern',
    icon: TrendingUp,
    color: 'blue',
    items: [
      {
        title: 'Exponentielles Marktwachstum',
        description: 'Rasant wachsender Markt für zivile Drohnenanwendungen'
      },
      {
        title: 'Regulatorisch getriebener Markt',
        description: 'EU-Gesetzgebung schafft obligatorischen Bedarf für Zertifizierungen'
      },
      {
        title: 'Steigendes öffentliches Bewusstsein',
        description: 'Debatte um Lärmbelästigung erhöht Druck auf Hersteller'
      },
      {
        title: 'Standardsetzung',
        description: 'Möglichkeit, De-facto-Industriestandards mitzugestalten'
      }
    ]
  },
  threats: {
    title: 'Risiken',
    subtitle: 'Extern',
    icon: Shield,
    color: 'red',
    items: [
      {
        title: 'Regulatorische Verzögerungen',
        description: 'Langsame nationale Umsetzung könnte Marktdurchdringung verlangsamen'
      },
      {
        title: 'Technologische Disruption',
        description: 'Extrem leise Antriebssysteme könnten Bedarf langfristig ändern'
      },
      {
        title: 'Markteintritt etablierter Akteure',
        description: 'Große Prüfkonzerne (TÜV, DEKRA) könnten eintreten'
      },
      {
        title: 'Wirtschaftliche Abschwünge',
        description: 'Konjunkturelle Eintrübung könnte Investitionsbereitschaft reduzieren'
      }
    ]
  }
}

export const strategicImplications = [
  {
    category: 'Stärken nutzen',
    action: 'Technologieführerschaft durch kontinuierliche Innovation ausbauen'
  },
  {
    category: 'Schwächen adressieren',
    action: 'Frühe Investition in Teamaufbau und Markenbildung'
  },
  {
    category: 'Chancen ergreifen',
    action: 'Schneller Markteintritt vor Regulierungswelle'
  },
  {
    category: 'Risiken minimieren',
    action: 'Diversifizierung und strategische Partnerschaften'
  }
]
