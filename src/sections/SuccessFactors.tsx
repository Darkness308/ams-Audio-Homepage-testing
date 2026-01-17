import { motion } from 'framer-motion'
import { SectionHeader, NumberedCard } from '../components/ui'
import { successFactors, successFactorsSectionContent, futureScenarios } from '../data'
import { Target } from 'lucide-react'

export function SuccessFactors() {
  return (
    <section id="successfactors" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={successFactorsSectionContent.title}
          subtitle={successFactorsSectionContent.subtitle}
          description={successFactorsSectionContent.description}
        />

        {/* Success Factors Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {successFactors.map((factor, index) => (
            <NumberedCard
              key={factor.id}
              number={factor.number}
              icon={factor.icon}
              title={factor.title}
              description={factor.description}
              keyPoints={factor.keyPoints}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Future Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800"
        >
          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Target className="text-orange-500" size={24} />
            Zukunftsszenarien bis 2050
          </h4>
          <p className="text-slate-400 mb-6">
            Die Bandbreite möglicher Zukunftsszenarien illustriert den hohen Grad an Unsicherheit,
            unter dem strategische Entscheidungen getroffen werden müssen:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {futureScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
              >
                <h5 className="font-medium text-orange-500 mb-1">{scenario.name}</h5>
                <p className="text-slate-500 text-sm">{scenario.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {successFactorsSectionContent.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
