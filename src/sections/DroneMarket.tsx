import { motion } from 'framer-motion'
import { SectionHeader, Card, SeverityBadge } from '../components/ui'
import { marketPotentials, marketRisks, droneMarketSectionContent, industryPartners } from '../data'
import { TrendingUp, AlertTriangle, Building2 } from 'lucide-react'

export function DroneMarket() {
  return (
    <section id="dronemarket" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={droneMarketSectionContent.title}
          subtitle={droneMarketSectionContent.subtitle}
          description={droneMarketSectionContent.description}
        />

        {/* Two Column Layout: Potentials vs Risks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Potentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-500">Potenziale</h3>
            </div>

            <div className="space-y-4">
              {marketPotentials.map((potential, index) => (
                <Card key={potential.id} delay={index * 0.1} hover={false}>
                  <div className="flex items-start gap-4">
                    <potential.icon className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-medium mb-1">{potential.title}</h4>
                      <p className="text-slate-400 text-sm">{potential.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Risks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-500">Risiken & Herausforderungen</h3>
            </div>

            <div className="space-y-4">
              {marketRisks.map((risk, index) => (
                <Card key={risk.id} delay={index * 0.1} hover={false}>
                  <div className="flex items-start gap-4">
                    <risk.icon className="text-red-500 flex-shrink-0" size={24} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{risk.title}</h4>
                        <SeverityBadge severity={risk.severity} />
                      </div>
                      <p className="text-slate-400 text-sm">{risk.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center mb-12"
        >
          <p className="text-lg text-orange-500 font-medium">
            {droneMarketSectionContent.insight}
          </p>
        </motion.div>

        {/* Industry Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="text-orange-500" size={24} />
            Branchenakteure & Forschung
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {industryPartners.map((partner, index) => (
              <Card key={index} delay={index * 0.1}>
                <h4 className="font-bold text-orange-500 mb-1">{partner.name}</h4>
                <p className="text-sm text-slate-500 mb-2">{partner.role}</p>
                <p className="text-sm text-slate-400">{partner.highlight}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
