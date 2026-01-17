import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  predictiveMaintenanceData,
  pdmCapabilities,
  complianceData,
  complianceCapabilities,
  dualEnablerSectionContent,
  mlAlgorithms
} from '../data/dualEnabler'
import { Wrench, ShieldCheck, Zap, CheckCircle } from 'lucide-react'

export function DualEnabler() {
  return (
    <section id="dualenabler" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={dualEnablerSectionContent.title}
          subtitle={dualEnablerSectionContent.subtitle}
          description={dualEnablerSectionContent.description}
        />

        {/* Two Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Predictive Maintenance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Wrench className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">{predictiveMaintenanceData.title}</h3>
                <p className="text-sm text-slate-400">{predictiveMaintenanceData.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-6">{predictiveMaintenanceData.description}</p>

            <div className="space-y-4 mb-6">
              {pdmCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{cap.title}</span>
                      {cap.accuracy && (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                          {cap.accuracy}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ML Algorithms */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-400 mb-3">ML-Algorithmen Genauigkeit</h4>
              <div className="grid grid-cols-3 gap-2">
                {mlAlgorithms.map((algo) => (
                  <div key={algo.name} className="text-center">
                    <div className="text-lg font-bold text-blue-400">{algo.accuracy}</div>
                    <div className="text-xs text-slate-500">{algo.name.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regulatory Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-slate-900 rounded-2xl p-8 border border-green-500/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <ShieldCheck className="text-green-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">{complianceData.title}</h3>
                <p className="text-sm text-slate-400">{complianceData.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-6">{complianceData.description}</p>

            <div className="space-y-4 mb-6">
              {complianceCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="font-medium text-sm">{cap.title}</span>
                    <p className="text-xs text-slate-500">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400 italic mb-2">{complianceData.quote}</p>
              <p className="text-xs text-green-400">— {complianceData.quoteSource}</p>
            </div>
          </motion.div>
        </div>

        {/* Synergy Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3">
            <Zap className="text-orange-500" size={24} />
            <span className="text-orange-500 font-medium">Synergie: Ein Datenstrom, zwei Ziele</span>
            <Zap className="text-orange-500" size={24} />
          </div>
        </motion.div>

        {/* Key Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/10 to-slate-900/50 rounded-2xl p-8 border border-orange-500/20 text-center"
        >
          <p className="text-lg text-white mb-4">{dualEnablerSectionContent.keyValue}</p>
          <p className="text-slate-400">{dualEnablerSectionContent.competitiveAdvantage}</p>
        </motion.div>
      </div>
    </section>
  )
}
