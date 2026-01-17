import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import {
  uasNoiseCheckContent,
  measurementComponents,
  systemAdvantages,
  technicalSpecs
} from '../data/uasNoiseCheck'
import { CheckCircle } from 'lucide-react'

const colorClasses: Record<string, string> = {
  orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
  green: 'from-green-500/20 to-green-500/5 border-green-500/30',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30'
}

const iconColorClasses: Record<string, string> = {
  orange: 'text-orange-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500'
}

export function UASNoiseCheck() {
  return (
    <section id="uasnoisecheck" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={uasNoiseCheckContent.title}
          subtitle={uasNoiseCheckContent.subtitle}
          description={uasNoiseCheckContent.description}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-orange-500 font-medium text-lg mb-12"
        >
          {uasNoiseCheckContent.tagline}
        </motion.p>

        {/* Four Components Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {measurementComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${colorClasses[component.color]} rounded-2xl p-6 border`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-slate-900 rounded-xl ${iconColorClasses[component.color]}`}>
                  <component.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{component.title}</h3>
                  <p className={`text-sm ${iconColorClasses[component.color]} mb-2`}>{component.subtitle}</p>
                  <p className="text-slate-400 text-sm mb-3">{component.description}</p>
                  <div className="flex items-start gap-2 bg-slate-900/50 rounded-lg p-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-xs text-slate-300">{component.benefit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Advantages */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {systemAdvantages.map((advantage, index) => (
            <Card key={advantage.id} delay={index * 0.1}>
              <advantage.icon className="text-orange-500 mb-3" size={28} />
              <h4 className="font-bold text-sm mb-1">{advantage.title}</h4>
              <p className="text-slate-400 text-xs">{advantage.description}</p>
            </Card>
          ))}
        </div>

        {/* Technical Specs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-xl border border-slate-800 p-6"
        >
          <h3 className="text-center font-bold mb-6">Technische Spezifikationen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500">{technicalSpecs.accuracy}</div>
              <div className="text-xs text-slate-400">Genauigkeit ML-Algorithmen</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500">{technicalSpecs.measurementTime}</div>
              <div className="text-xs text-slate-400">Pro Standardzertifizierung</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500">{technicalSpecs.dataPoints}</div>
              <div className="text-xs text-slate-400">Ziel: Drohnentypen</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">LBA/BAZL</div>
              <div className="text-xs text-slate-400">{technicalSpecs.certification}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
