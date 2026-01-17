import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import {
  marketAnalysisContent,
  marketSize,
  marketDrivers,
  targetSegments,
  competitiveLandscape,
  inactivityCosts
} from '../data/marketAnalysis'
import { AlertTriangle, Target, Users } from 'lucide-react'

export function MarketAnalysis() {
  return (
    <section id="marketanalysis" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={marketAnalysisContent.title}
          subtitle={marketAnalysisContent.subtitle}
          description={marketAnalysisContent.description}
        />

        {/* Market Size - TAM/SAM/SOM */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Marktgröße</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(marketSize).map(([key, market], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`rounded-xl p-6 border text-center ${
                  index === 2
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <market.icon className={`mx-auto mb-3 ${index === 2 ? 'text-orange-500' : 'text-slate-400'}`} size={32} />
                <div className={`text-2xl font-bold mb-1 ${index === 2 ? 'text-orange-500' : 'text-white'}`}>
                  {market.label}
                </div>
                <div className="text-xs text-slate-500 mb-2">{market.fullName}</div>
                <p className="text-sm text-slate-400">{market.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market Drivers */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Markttreiber</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketDrivers.map((driver, index) => (
              <Card key={driver.id} delay={index * 0.1}>
                <driver.icon className="text-orange-500 mb-3" size={28} />
                <h4 className="font-bold text-sm mb-2">{driver.title}</h4>
                <p className="text-xs text-slate-400 mb-3">{driver.description}</p>
                <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full inline-block">
                  {driver.impact}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Segments */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Zielgruppen</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {targetSegments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl border border-slate-800 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <segment.icon className="text-orange-500" size={24} />
                  </div>
                  <h4 className="font-bold">{segment.name}</h4>
                </div>
                <p className="text-sm text-slate-400 mb-4">{segment.description}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                    <span className="text-xs"><strong>Bedarf:</strong> {segment.need}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={14} />
                    <span className="text-xs"><strong>Pain Point:</strong> {segment.painPoint}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitive Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 to-slate-900 rounded-2xl border border-blue-500/30 p-8 mb-16"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-2">{competitiveLandscape.title}</h3>
          <p className="text-slate-400 text-sm mb-6">{competitiveLandscape.subtitle}: {competitiveLandscape.description}</p>

          {/* Positioning Matrix (simplified) */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-bold text-sm mb-4">Positionierungsmatrix</h4>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-slate-500 mb-2">X: {competitiveLandscape.positioning.xAxis}</div>
                <div className="text-xs text-slate-500 mb-4">Y: {competitiveLandscape.positioning.yAxis}</div>
                <div className="bg-green-500/20 text-green-400 text-sm px-3 py-2 rounded-lg inline-block">
                  AcoustiScan: {competitiveLandscape.positioning.acoustiScanPosition}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Indirekte Wettbewerber</h4>
              <div className="space-y-2">
                {competitiveLandscape.indirectCompetitors.map((competitor, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                    <div className="font-medium text-sm">{competitor.type}</div>
                    <div className="text-xs text-red-400">{competitor.weakness}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="text-blue-400" size={18} />
              <span className="font-bold text-sm text-blue-400">Wettbewerbsvorteil</span>
            </div>
            <p className="text-sm text-slate-300">{competitiveLandscape.competitiveAdvantage}</p>
          </div>
        </motion.div>

        {/* Inactivity Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Kosten der Untätigkeit
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {inactivityCosts.map((cost, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span className="text-sm text-slate-300">{cost}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
