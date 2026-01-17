import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import {
  daasIntegrationContent,
  daasFeatures,
  biMaturityLevels,
  biMaturitySectionContent,
  dataStreams,
  partnerIntegration
} from '../data/daasIntegration'
import { ArrowUp, Layers, Cloud } from 'lucide-react'

export function DaaSIntegration() {
  return (
    <section id="daas" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={daasIntegrationContent.title}
          subtitle={daasIntegrationContent.subtitle}
          description={daasIntegrationContent.description}
        />

        {/* DaaS Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {daasFeatures.map((feature, index) => (
            <Card key={feature.id} delay={index * 0.1}>
              <feature.icon className="text-orange-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Data Streams Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-16"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Layers className="text-orange-500" size={24} />
            Datenanreicherung durch AaaS
          </h3>

          <p className="text-slate-400 mb-6">{daasIntegrationContent.keyValue}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {dataStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border ${
                  stream.type === 'Neu'
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : stream.type === 'Angereichert'
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{stream.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    stream.type === 'Neu'
                      ? 'bg-orange-500/20 text-orange-400'
                      : stream.type === 'Angereichert'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {stream.type}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{stream.source}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Integration */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg flex items-center gap-4">
            <Cloud className="text-blue-400" size={24} />
            <div>
              <span className="font-medium text-blue-400">{partnerIntegration.partner}</span>
              <span className="text-slate-500 mx-2">|</span>
              <span className="text-slate-400 text-sm">{partnerIntegration.description}</span>
            </div>
          </div>
        </motion.div>

        {/* BI Maturity Model */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">{biMaturitySectionContent.title}</h3>
            <p className="text-slate-400">{biMaturitySectionContent.description}</p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-700 via-orange-500 to-orange-500 hidden md:block" />

            <div className="space-y-6">
              {biMaturityLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative md:pl-20"
                >
                  {/* Level Indicator */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold hidden md:flex ${
                    index >= 1
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    L{level.level}
                  </div>

                  <Card hover={false} className={index >= 1 ? 'border-orange-500/30' : ''}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        index >= 1 ? 'bg-orange-500/10' : 'bg-slate-800'
                      }`}>
                        <level.icon className={index >= 1 ? 'text-orange-500' : 'text-slate-400'} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold">{level.name}</h4>
                          <span className="text-sm text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full">
                            {level.question}
                          </span>
                          <span className="md:hidden text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">
                            Level {level.level}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{level.description}</p>
                        <div className="bg-slate-800/50 rounded-lg p-3">
                          <span className="text-xs text-orange-400 font-medium">AaaS-Capability:</span>
                          <p className="text-sm text-slate-300 mt-1">{level.aaasCapability}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progression Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
              <ArrowUp className="text-orange-500" size={18} />
              <span className="text-orange-500 text-sm font-medium">{biMaturitySectionContent.progression}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
