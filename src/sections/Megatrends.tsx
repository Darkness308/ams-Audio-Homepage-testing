import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import { megatrends, megatrendsSectionContent } from '../data'

export function Megatrends() {
  return (
    <section id="megatrends" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={megatrendsSectionContent.title}
          subtitle={megatrendsSectionContent.subtitle}
          description={megatrendsSectionContent.description}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {megatrends.map((trend, index) => (
            <Card key={trend.id} delay={index * 0.2}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <trend.icon className="text-orange-500" size={32} />
                </div>
                {trend.stats && (
                  <span className="text-xs text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">
                    {trend.stats}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{trend.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{trend.description}</p>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-500 text-sm">
                  <span className="text-orange-500 font-medium">Auswirkung:</span>{' '}
                  {trend.impact}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Connection Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 text-slate-500">
            <div className="h-px w-16 bg-slate-700" />
            <span className="text-sm">Diese Treiber erfordern</span>
            <div className="h-px w-16 bg-slate-700" />
          </div>
          <div className="mt-4">
            <span className="text-orange-500 font-bold text-lg">Smart City Lösungen</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
