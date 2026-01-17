import { motion } from 'framer-motion'
import { SectionHeader, Card, Button } from '../components/ui'
import { stakeholders, stakeholderSectionContent } from '../data'
import { CheckCircle } from 'lucide-react'

export function Stakeholders() {
  return (
    <section id="stakeholders" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={stakeholderSectionContent.title}
          subtitle={stakeholderSectionContent.subtitle}
          description={stakeholderSectionContent.description}
        />

        {/* Stakeholder Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover={false} className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <stakeholder.icon className="text-orange-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{stakeholder.name}</h3>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6">{stakeholder.description}</p>

                {/* Benefits */}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-orange-500 mb-4">Vorteile</h4>
                  <div className="space-y-4">
                    {stakeholder.benefits.map((benefit) => (
                      <div key={benefit.id} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                          <h5 className="font-medium text-sm mb-0.5">{benefit.title}</h5>
                          <p className="text-slate-500 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <Button variant="outline" size="sm" className="w-full">
                    {stakeholder.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
