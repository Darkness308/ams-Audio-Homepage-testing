import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import { smartCityFields, smartCitySectionContent, techEnablers } from '../data'
import { Cpu, Globe } from 'lucide-react'

export function SmartCity() {
  return (
    <section id="smartcity" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={smartCitySectionContent.title}
          subtitle={smartCitySectionContent.subtitle}
          description={smartCitySectionContent.description}
        />

        {/* Four Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {smartCityFields.map((field, index) => (
            <Card key={field.id} delay={index * 0.15}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <field.icon className="text-orange-500" size={28} />
                </div>
                <h3 className="text-xl font-bold">{field.title}</h3>
              </div>

              <p className="text-slate-400 text-sm mb-4">{field.description}</p>

              {/* Solutions List */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {field.solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="text-xs text-slate-500 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {solution}
                  </div>
                ))}
              </div>

              {/* AI Application */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-start gap-2">
                  <Cpu className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-slate-500">{field.aiApplication}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Enablers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/10 to-slate-900/50 rounded-2xl p-8 border border-orange-500/20"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Globe className="text-orange-500" size={24} />
            {techEnablers.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {techEnablers.items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium mb-1">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
