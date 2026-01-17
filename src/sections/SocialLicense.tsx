import { motion } from 'framer-motion'
import { SectionHeader, Card } from '../components/ui'
import {
  socialLicenseContent,
  noiseManagementFeatures,
  sensitiveAreas,
  stakeholderManagement,
  scalabilityAdvantage,
  transformationSteps
} from '../data/socialLicense'
import { ArrowRight, CheckCircle, Shield, Map, Heart } from 'lucide-react'

export function SocialLicense() {
  return (
    <section id="sociallicense" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={socialLicenseContent.title}
          subtitle={socialLicenseContent.subtitle}
          description={socialLicenseContent.description}
        />

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center mb-12"
        >
          <Heart className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-orange-500 font-medium">{socialLicenseContent.keyInsight}</p>
        </motion.div>

        {/* Noise Management Features */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Map className="text-orange-500" size={24} />
            Dynamische Lärmkartierung & Adaptive Routenplanung
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noiseManagementFeatures.map((feature, index) => (
              <Card key={feature.id} delay={index * 0.1}>
                <feature.icon className="text-orange-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sensitive Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-16"
        >
          <h3 className="text-xl font-bold mb-6">Sensible Gebiete - Automatische Berücksichtigung</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sensitiveAreas.map((area, index) => (
              <motion.div
                key={area.type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-lg p-4 text-center"
              >
                <area.icon className="text-orange-500 mx-auto mb-2" size={28} />
                <h4 className="font-medium text-sm mb-1">{area.type}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  area.priority === 'Höchste'
                    ? 'bg-red-500/20 text-red-400'
                    : area.priority === 'Hoch'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {area.priority} Priorität
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transformation Steps */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6">Die Transformation</h3>
          <div className="space-y-4">
            {transformationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-slate-900 rounded-xl p-4 border border-slate-800"
              >
                <div className="flex-1 text-right">
                  <span className="text-red-400 text-sm font-medium">{step.from}</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="text-orange-500" size={24} />
                </div>
                <div className="flex-1">
                  <span className="text-green-400 text-sm font-medium">{step.to}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stakeholder Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 to-slate-900 rounded-2xl p-8 border border-blue-500/30 mb-16"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-2">{stakeholderManagement.title}</h3>
          <p className="text-slate-400 mb-6">{stakeholderManagement.description}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {stakeholderManagement.benefits.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-medium text-sm text-blue-400">{item.stakeholder}</span>
                  <p className="text-xs text-slate-400">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scalability Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-900/20 to-slate-900 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-xl font-bold text-green-400 mb-2">{scalabilityAdvantage.title}</h3>
          <p className="text-slate-400 mb-6">{scalabilityAdvantage.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {scalabilityAdvantage.points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <Shield className="text-green-400 flex-shrink-0" size={18} />
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
