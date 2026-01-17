import { motion } from 'framer-motion'
import { SectionHeader, Card, FeatureCard, StatGrid } from '../components/ui'
import { aaaSolution, aaaSolutionSectionContent, regulations, statistics } from '../data'
import { CheckCircle, FileCheck, Scale } from 'lucide-react'

export function Solution() {
  return (
    <section id="solution" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={aaaSolutionSectionContent.title}
          subtitle={aaaSolutionSectionContent.subtitle}
          description={aaaSolutionSectionContent.description}
        />

        {/* Market Driver */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 rounded-xl p-6 mb-12 text-center"
        >
          <p className="text-slate-400">
            <span className="text-orange-500 font-medium">Marktbedarf:</span>{' '}
            {aaaSolutionSectionContent.marketDriver}
          </p>
        </motion.div>

        {/* AcoustiScan Module Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-2">{aaaSolution.name}</h3>
          <p className="text-slate-400">{aaaSolution.tagline}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aaaSolution.features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.details}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Tech Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-16"
        >
          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle className="text-orange-500" size={24} />
            Technische Spezifikationen
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aaaSolution.techSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-orange-500 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-500">{spec.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Scale className="text-orange-500" size={24} />
            Regulatorische Abdeckung
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regulations.map((reg, index) => (
              <Card key={index} delay={index * 0.1} hover={false}>
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="text-orange-500" size={18} />
                  <span className="font-bold">{reg.name}</span>
                </div>
                <span className="text-xs text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full">
                  {reg.jurisdiction}
                </span>
                <p className="text-slate-400 text-sm mt-2">{reg.description}</p>
                <p className="text-slate-500 text-xs mt-1">{reg.limits}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="py-8">
          <StatGrid stats={statistics} />
        </div>
      </div>
    </section>
  )
}
