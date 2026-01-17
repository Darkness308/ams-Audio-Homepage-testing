import { Users, Thermometer, Recycle } from 'lucide-react'
import type { Megatrend } from '../types'

export const megatrends: Megatrend[] = [
  {
    id: 'demographic',
    icon: Users,
    title: 'Demografischer Wandel & Urbanisierung',
    description: 'Die fortschreitende Urbanisierung führt zu einem unaufhaltsamen Wachstum der Städte. Dieser Prozess, gepaart mit Veränderungen in der Bevölkerungsstruktur durch Migration, erzeugt enormen Druck auf städtische Systeme.',
    impact: 'Steigender Flächenbedarf, höhere Belastung der Infrastruktur und wachsende soziale Herausforderungen erfordern ein Überdenken traditioneller Stadtplanung.',
    stats: '68% der Weltbevölkerung werden 2050 in Städten leben'
  },
  {
    id: 'climate',
    icon: Thermometer,
    title: 'Globaler Klimawandel',
    description: 'Städte nehmen eine Doppelrolle im Klimawandel ein: Mit rund 70% der weltweiten CO2-Emissionen sind sie Hauptverursacher, durch ihre hohe Bevölkerungs- und Infrastrukturdichte aber auch besonders vulnerabel.',
    impact: 'Diese Vulnerabilität macht Städte zu entscheidenden Akteuren im globalen Klimaschutz und zwingt sie, innovative Maßnahmen zur Emissionsreduktion und Klimaanpassung zu ergreifen.',
    stats: '70% der globalen CO2-Emissionen stammen aus Städten'
  },
  {
    id: 'resources',
    icon: Recycle,
    title: 'Ressourcenknappheit & Rohstoffwende',
    description: 'Der Wohlstand moderner Industriegesellschaften basiert auf der Nutzung endlicher Rohstoffe. Die absehbare Verknappung erfordert eine grundlegende Transformation der Wirtschaftssysteme.',
    impact: 'Der Wandel hin zu einer Kreislaufwirtschaft nach dem "Cradle-to-Cradle"-Prinzip ist nicht nur ökologische Notwendigkeit, sondern auch ökonomische Überlebensstrategie.',
    stats: 'Bis 2050 verdreifacht sich der globale Ressourcenverbrauch'
  }
]

export const megatrendsSectionContent = {
  title: 'Globale Megatrends',
  subtitle: 'Die Treiber urbaner Transformation',
  description: 'Diese globalen Treiber haben das Leitbild der "Smart City" als strategische Antwort auf die komplexen Herausforderungen der urbanen Zukunft hervorgebracht.'
}
