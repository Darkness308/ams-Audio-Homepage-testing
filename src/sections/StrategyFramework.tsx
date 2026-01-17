import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  vucadContent,
  vucadDimensions,
  eksContent,
  eksSteps,
  eksBottleneck,
  pdcaPhases,
  paretoContent,
  paretoPriorities,
  managementPhases,
  companyDnaContent,
  strategicSynthesis
} from '../data/strategyFramework'
import { ArrowRight, CheckCircle, AlertTriangle, Target } from 'lucide-react'

const vucadColors: Record<string, string> = {
  red: 'bg-red-500/20 border-red-500/30 text-red-400',
  orange: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
  yellow: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
  green: 'bg-green-500/20 border-green-500/30 text-green-400',
  blue: 'bg-blue-500/20 border-blue-500/30 text-blue-400'
}

const phaseColors: Record<string, string> = {
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
  teal: 'from-teal-500/20 to-teal-500/5 border-teal-500/30',
  orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30'
}

const pdcaColors: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500'
}

export function StrategyFramework() {
  return (
    <section id="strategy" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Adaptives Management"
          subtitle="Navigieren in der VUCAD-Welt"
          description="Systematische Strategieentwicklung mit bewährten Management-Frameworks für nachhaltigen Erfolg in volatilen Märkten."
        />

        {/* VUCAD World */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">{vucadContent.title}</h3>
            <p className="text-slate-400">{vucadContent.subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {vucadDimensions.map((dim, index) => (
              <motion.div
                key={dim.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full border ${vucadColors[dim.color]} font-bold text-lg`}
              >
                <span className="text-2xl mr-2">{dim.letter}</span>
                <span className="text-sm opacity-80">{dim.nameDe}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {vucadDimensions.map((dim, index) => (
              <motion.div
                key={dim.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
              >
                <div className={`text-3xl font-bold mb-2 ${vucadColors[dim.color].split(' ')[2]}`}>
                  {dim.letter}
                </div>
                <h4 className="font-semibold text-sm mb-2">{dim.nameDe}</h4>
                <p className="text-xs text-slate-400 mb-3">{dim.description}</p>
                <div className="text-xs">
                  <span className="text-orange-400 font-medium">AMS Antwort:</span>
                  <p className="text-slate-300 mt-1">{dim.amsResponse}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management Cycle - 4 Phases */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Der adaptive Management-Kreislauf</h3>
            <p className="text-slate-400">4 Phasen für systematische Strategieentwicklung</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {managementPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-gradient-to-b ${phaseColors[phase.color]} rounded-xl p-6 border`}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700">
                  <span className="text-orange-500 font-bold">{phase.phase}</span>
                </div>
                <phase.icon className="w-8 h-8 text-white mb-4" />
                <h4 className="font-bold mb-2">{phase.name}</h4>
                <p className="text-sm text-slate-400 mb-4">{phase.description}</p>
                <div className="space-y-1">
                  {phase.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs bg-slate-800/50 px-2 py-1 rounded mr-1 mb-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {index < managementPhases.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* EKS - Bottleneck Strategy */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">{eksContent.title}</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">{eksContent.description}</p>
          </motion.div>

          {/* Identified Bottleneck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-orange-500/30 mb-8"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <div className="text-sm text-orange-400 font-medium mb-1">Identifizierter Engpass</div>
                <h4 className="text-2xl font-bold mb-2">{eksBottleneck.identified}</h4>
                <p className="text-slate-300 mb-4">{eksBottleneck.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-red-400 mb-2">Evidenz:</div>
                    <ul className="space-y-1">
                      {eksBottleneck.evidence.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-400 mb-2">AMS Lösung:</div>
                    <p className="text-slate-300">{eksBottleneck.solution}</p>
                    <div className="mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                      <p className="text-green-400 text-sm font-medium">{eksBottleneck.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EKS 5 Steps */}
          <div className="grid md:grid-cols-5 gap-4">
            {eksSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center"
              >
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">{step.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.name}</h4>
                <p className="text-xs text-slate-400 mb-3">{step.description}</p>
                <p className="text-xs text-orange-300">{step.amsApplication}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PDCA + Pareto Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* PDCA Cycle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4">PDCA-Zyklus</h3>
            <p className="text-sm text-slate-400 mb-6">Kontinuierliche Verbesserung</p>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {pdcaPhases.map((phase) => (
                  <div
                    key={phase.id}
                    className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                  >
                    <div className={`w-3 h-3 ${pdcaColors[phase.color]} rounded-full mb-2`} />
                    <h4 className="font-semibold text-sm">{phase.nameDe}</h4>
                    <p className="text-xs text-slate-400 mt-1">{phase.description}</p>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">
                  <span className="text-2xl">↻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pareto Principle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4">{paretoContent.title}</h3>
            <p className="text-sm text-slate-400 mb-6">{paretoContent.subtitle}</p>

            <div className="space-y-4">
              {paretoPriorities.map((priority) => (
                <div
                  key={priority.id}
                  className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{priority.category}</h4>
                    <span className="text-xs text-orange-400">{priority.percentage}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {priority.highImpact.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Company DNA */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">{companyDnaContent.title}</h3>
            <p className="text-slate-400">{companyDnaContent.subtitle}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {companyDnaContent.strands.map((strand, index) => (
              <motion.div
                key={strand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex-1 max-w-xs p-6 rounded-2xl border ${
                  strand.color === 'orange'
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : strand.color === 'teal'
                    ? 'bg-teal-500/10 border-teal-500/30'
                    : 'bg-green-500/10 border-green-500/30'
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${
                  strand.color === 'orange'
                    ? 'text-orange-500'
                    : strand.color === 'teal'
                    ? 'text-teal-500'
                    : 'text-green-500'
                }`}>
                  {strand.name}
                </div>
                <div className="text-sm font-medium mb-2">{strand.subtitle}</div>
                <p className="text-xs text-slate-400">{strand.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connecting Arrows */}
          <div className="hidden md:flex justify-center mt-4 gap-8">
            <ArrowRight className="w-6 h-6 text-slate-500 rotate-45" />
            <ArrowRight className="w-6 h-6 text-slate-500 -rotate-45" />
          </div>
        </div>

        {/* Strategic Synthesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-2xl p-8 border border-orange-500/20"
        >
          <h3 className="text-xl font-bold mb-2">{strategicSynthesis.title}</h3>
          <p className="text-slate-400 mb-6">{strategicSynthesis.insight}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {strategicSynthesis.applications.map((app, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
              >
                <div className="text-orange-500 font-bold text-lg mb-2">{app.principle}</div>
                <p className="text-sm text-slate-300 mb-2">{app.application}</p>
                <div className="flex items-center gap-2 text-green-400 text-xs">
                  <CheckCircle className="w-3 h-3" />
                  {app.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-green-500" />
              <p className="text-green-300">{strategicSynthesis.conclusion}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
