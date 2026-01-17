import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import {
  regulationContent,
  euRegulations,
  operationCategories,
  sailLevels,
  transitionPeriod
} from '../data/euRegulation'
import { Globe, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' }
}

export function EURegulation() {
  return (
    <section id="regulation" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={regulationContent.title}
          subtitle={regulationContent.subtitle}
          description={regulationContent.description}
        />

        {/* Key Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center mb-12"
        >
          <Globe className="text-blue-400 mx-auto mb-3" size={32} />
          <p className="text-blue-400 font-medium italic">"{regulationContent.keyPrinciple}"</p>
          <p className="text-xs text-slate-500 mt-2">→ Unmittelbare Geltung in allen 27 EU-Mitgliedstaaten</p>
        </motion.div>

        {/* EU Regulations Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Zentrale EU-Verordnungen</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {euRegulations.map((reg, index) => (
              <Card key={reg.id} delay={index * 0.1}>
                <reg.icon className="text-blue-400 mb-3" size={28} />
                <div className="text-xs text-blue-400 font-mono mb-1">{reg.number}</div>
                <h4 className="font-bold text-sm mb-2">{reg.name}</h4>
                <p className="text-xs text-slate-400 mb-3">{reg.description}</p>
                <div className="bg-slate-800 rounded-lg px-2 py-1 text-xs text-slate-500">
                  {reg.relevance}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Operation Categories */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-2 text-center">Risikobasierte Betriebskategorien</h3>
          <p className="text-slate-400 text-sm text-center mb-8">
            Je höher das Risiko, desto strenger die Anforderungen an Pilot, Technik und Betreiber
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {operationCategories.map((category, index) => {
              const colors = categoryColors[category.color]
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`${colors.bg} rounded-2xl border ${colors.border} p-6`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-2xl font-bold ${colors.text}`}>{category.name}</h4>
                      <p className="text-xs text-slate-500">{category.nameDe}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${colors.bg} ${colors.text} border ${colors.border}`}>
                      Risiko: {category.risk}
                    </div>
                  </div>

                  {/* Authorization */}
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-slate-500 mb-1">Genehmigung</div>
                    <p className="text-sm">{category.authorization}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4">{category.description}</p>

                  {/* Subcategories (for OPEN) */}
                  {category.subcategories && (
                    <div className="space-y-2 mb-4">
                      {category.subcategories.map(sub => (
                        <div key={sub.id} className="bg-slate-900/50 rounded-lg p-2 text-xs">
                          <span className={`font-bold ${colors.text}`}>{sub.name}</span>
                          <span className="text-slate-500"> • {sub.maxWeight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Drone Classes (for SPECIFIC) */}
                  {category.droneClasses && (
                    <div className="flex gap-2 mb-4">
                      {category.droneClasses.map(cls => (
                        <span key={cls} className={`px-2 py-1 rounded text-xs ${colors.bg} ${colors.text}`}>
                          Klasse {cls}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Examples */}
                  <div className="text-xs text-slate-500 mb-4">
                    Beispiele: {category.examples.join(', ')}
                  </div>

                  {/* Implications */}
                  <div className="bg-slate-900 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Info className={colors.text} size={14} />
                      <p className="text-xs text-slate-300">{category.implications}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* SAIL Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-orange-400 mb-2">{sailLevels.title}</h3>
          <p className="text-slate-400 text-sm mb-6">{sailLevels.description}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {sailLevels.levels.map((level, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                <div className="text-orange-400 font-bold mb-1">{level.level}</div>
                <div className="text-xs text-slate-400">{level.description}</div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 bg-slate-900 rounded-lg p-4">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
            <p className="text-sm text-slate-300">{sailLevels.example}</p>
          </div>
        </motion.div>

        {/* Transition Period */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-yellow-400 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-yellow-400 mb-1">Übergangsfrist abgelaufen: {transitionPeriod.deadline}</h4>
              <p className="text-sm text-slate-400 mb-2">{transitionPeriod.impact}</p>
              <p className="text-xs text-slate-500">{transitionPeriod.implication}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
