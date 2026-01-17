import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  certificationContent,
  certificationPackages,
  xaasAdvantages
} from '../data/certificationPackages'
import { Check, ArrowRight } from 'lucide-react'

export function CertificationPackages() {
  return (
    <section id="certification" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={certificationContent.title}
          subtitle={certificationContent.subtitle}
          description={certificationContent.description}
        />

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certificationPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 border ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-orange-500/10 to-slate-900 border-orange-500/50'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                  EMPFOHLEN
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${pkg.highlighted ? 'bg-orange-500/20' : 'bg-slate-800'}`}>
                  <pkg.icon className={pkg.highlighted ? 'text-orange-500' : 'text-slate-400'} size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{pkg.name}</h3>
                  <p className="text-xs text-slate-500">{pkg.priceModel}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{pkg.price}</span>
              </div>

              <p className="text-sm text-slate-400 mb-6">{pkg.description}</p>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-slate-500 mb-4">{pkg.targetCustomer}</div>

              <button
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition ${
                  pkg.highlighted
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                Anfragen <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* XaaS Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8"
        >
          <h3 className="text-xl font-bold text-center mb-2">Warum "Acoustics as a Service"?</h3>
          <p className="text-slate-400 text-center text-sm mb-8">
            Im Einklang mit dem "Everything as a Service" (XaaS)-Trend
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {xaasAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-orange-500 mb-2">{advantage.title}</h4>
                <p className="text-sm text-slate-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
