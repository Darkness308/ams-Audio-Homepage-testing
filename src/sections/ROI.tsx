import { motion } from 'framer-motion'
import { SectionHeader, Card, StatGrid } from '../components/ui'
import {
  roiSectionContent,
  costFactors,
  complianceRisks,
  roiMetrics,
  roiValueProposition
} from '../data/roiData'
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp, DollarSign } from 'lucide-react'

export function ROI() {
  const riskTypeColors = {
    direct: 'text-red-400 bg-red-500/10 border-red-500/30',
    indirect: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    strategic: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  }

  return (
    <section id="roi" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={roiSectionContent.title}
          subtitle={roiSectionContent.subtitle}
          description={roiSectionContent.description}
        />

        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center mb-12"
        >
          <TrendingUp className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-orange-500 font-medium">{roiSectionContent.thesis}</p>
        </motion.div>

        {/* Cost Factors Table */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="text-green-500" size={24} />
            Quantifizierbare Kosteneinsparungen
          </h3>

          <div className="grid gap-6">
            {costFactors.map((factor, index) => (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Icon & Title */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <div className="p-3 bg-red-500/10 rounded-lg">
                      <factor.icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">{factor.title}</h4>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        {factor.impact}
                      </span>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="md:col-span-4">
                    <div className="flex items-start gap-2 mb-1">
                      <AlertTriangle className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-xs text-red-400 font-medium">Ohne AaaS</span>
                    </div>
                    <p className="text-sm text-slate-400">{factor.problem}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex md:col-span-1 items-center justify-center h-full">
                    <ArrowRight className="text-orange-500" size={24} />
                  </div>

                  {/* Solution */}
                  <div className="md:col-span-4">
                    <div className="flex items-start gap-2 mb-1">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-xs text-green-400 font-medium">Mit AaaS</span>
                    </div>
                    <p className="text-sm text-slate-400">{factor.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance Risks */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-500" size={24} />
            Kostenvermeidung durch Compliance
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceRisks.map((risk, index) => (
              <Card key={risk.id} delay={index * 0.1}>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 border ${riskTypeColors[risk.type]}`}>
                  {risk.title}
                </div>
                <p className="text-slate-400 text-sm">{risk.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="mb-16">
          <StatGrid stats={roiMetrics} />
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-900/20 to-slate-900 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-xl font-bold text-green-400 mb-2">{roiValueProposition.title}</h3>
          <p className="text-sm text-slate-400 mb-6">{roiValueProposition.subtitle}</p>
          <p className="text-slate-300 mb-6">{roiValueProposition.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {roiValueProposition.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                <span className="text-sm text-slate-400">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
