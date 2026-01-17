import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import { swotContent, swotData, strategicImplications } from '../data/swotAnalysis'
import { ArrowRight } from 'lucide-react'

const quadrantColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  green: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    icon: 'text-green-500'
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    icon: 'text-yellow-500'
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: 'text-blue-500'
  },
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    icon: 'text-red-500'
  }
}

export function SWOT() {
  const quadrants = [
    swotData.strengths,
    swotData.weaknesses,
    swotData.opportunities,
    swotData.threats
  ]

  return (
    <section id="swot" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={swotContent.title}
          subtitle={swotContent.subtitle}
          description={swotContent.description}
        />

        {/* SWOT Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quadrants.map((quadrant, index) => {
            const colors = quadrantColors[quadrant.color]
            return (
              <motion.div
                key={quadrant.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`${colors.bg} rounded-2xl border ${colors.border} p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-slate-900 rounded-lg ${colors.icon}`}>
                    <quadrant.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold ${colors.text}`}>{quadrant.title}</h3>
                    <p className="text-xs text-slate-500">{quadrant.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {quadrant.items.map((item, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Strategic Implications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8"
        >
          <h3 className="text-xl font-bold text-center mb-6">Strategische Implikationen</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategicImplications.map((impl, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-500 font-bold text-sm mb-2">{impl.category}</div>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <ArrowRight size={14} className="text-orange-500" />
                  <span className="text-xs">{impl.action}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
