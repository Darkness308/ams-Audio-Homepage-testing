import { motion } from 'framer-motion'
import { SectionHeader, Card, SeverityBadge } from '../components/ui'
import { caseStudy, caseStudySectionContent } from '../data'
import { MapPin, Building2, Lightbulb } from 'lucide-react'

export function CaseStudy() {
  return (
    <section id="casestudy" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={caseStudySectionContent.title}
          subtitle={caseStudySectionContent.subtitle}
          description={caseStudySectionContent.description}
        />

        {/* Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 justify-center mb-12"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin size={18} className="text-orange-500" />
            <span>{caseStudy.location}</span>
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-400">
            <Building2 size={18} className="text-orange-500" />
            <span>{caseStudy.company}</span>
          </div>
        </motion.div>

        {/* Timeline Phases */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Eskalationsverlauf</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < caseStudy.phases.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent z-0" />
                )}

                <Card hover={false} className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <phase.icon size={20} />
                    </div>
                    <span className="text-orange-500 font-medium text-sm">{phase.phase}</span>
                  </div>
                  <h4 className="font-bold mb-2">{phase.title}</h4>
                  <p className="text-slate-400 text-sm">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conflict Causes */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-8 text-center">Ursachenanalyse</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.causes.map((cause, index) => (
              <Card key={cause.id} delay={index * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <cause.icon className="text-red-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold">{cause.title}</h4>
                      <SeverityBadge severity={cause.severity} />
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{cause.description}</p>
                    {cause.data && (
                      <div className="bg-slate-800 rounded-lg px-3 py-2 text-xs text-slate-500 font-mono">
                        {cause.data}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/10 to-slate-900/50 rounded-2xl p-8 border border-orange-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500 rounded-lg">
              <Lightbulb size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Strategische Erkenntnis</h4>
              <p className="text-slate-400">{caseStudy.lesson}</p>
              <p className="text-orange-500 font-medium mt-4">
                {caseStudySectionContent.keyInsight}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
