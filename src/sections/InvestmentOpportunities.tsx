import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  investmentContent,
  investmentOpportunities,
  investmentRisks,
  investmentThesis,
  morpheusAsExample
} from '../data/investmentOpportunities'
import {
  geographicZonesContent,
  restrictionZones,
  exceptionRules,
  germanAuthorities
} from '../data/geographicZones'
import { TrendingUp, AlertTriangle, CheckCircle, Target, MapPin, Shield } from 'lucide-react'

export function InvestmentOpportunities() {
  return (
    <section id="investment" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={investmentContent.title}
          subtitle={investmentContent.subtitle}
          description={investmentContent.description}
        />

        {/* Investment Thesis Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/30 p-8 mb-16"
        >
          <TrendingUp className="text-green-400 mb-4" size={32} />
          <p className="text-lg text-slate-200 mb-4">{investmentContent.thesis}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {investmentThesis.shortTerm.opportunities.map((opp, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">{opp.type}</h4>
                <p className="text-sm text-slate-400">{opp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Investment Opportunities */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Identifizierte Investitionschancen</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentOpportunities.map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
              >
                <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-4">
                  <opp.icon className="text-green-400" size={28} />
                </div>
                <h4 className="font-bold text-lg mb-1">{opp.title}</h4>
                <p className="text-green-400 text-sm mb-3">{opp.subtitle}</p>
                <p className="text-sm text-slate-400 mb-4">{opp.description}</p>

                {opp.example && (
                  <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-slate-500 mb-1">Beispiel</div>
                    <div className="font-medium text-sm text-orange-400">{opp.example.company}</div>
                    <p className="text-xs text-slate-400 mt-1">{opp.example.highlight}</p>
                  </div>
                )}

                <div className="space-y-2">
                  {opp.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-xs text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Geographic Zones Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-orange-500" size={28} />
            <div>
              <h3 className="text-xl font-bold">{geographicZonesContent.title}</h3>
              <p className="text-sm text-slate-500">{geographicZonesContent.subtitle}</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6">{geographicZonesContent.description}</p>

          {/* Restriction Zones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {restrictionZones.map((zone) => (
              <div key={zone.id} className="bg-slate-800/50 rounded-lg p-4">
                <zone.icon className="text-red-400 mb-2" size={20} />
                <h4 className="font-bold text-sm mb-2">{zone.category}</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  {zone.zones.slice(0, 3).map((z, i) => (
                    <li key={i}>• {z}</li>
                  ))}
                  {zone.zones.length > 3 && (
                    <li className="text-slate-500">+ {zone.zones.length - 3} weitere</li>
                  )}
                </ul>
                {zone.distance && (
                  <div className="mt-2 text-xs text-orange-400">{zone.distance}</div>
                )}
              </div>
            ))}
          </div>

          {/* Exception Rules */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
              <Shield size={18} />
              Ausnahmeregelungen eröffnen Chancen
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {exceptionRules.map((rule) => (
                <div key={rule.id} className="text-sm">
                  <div className="font-medium text-green-400">{rule.type}</div>
                  <p className="text-xs text-slate-400 mt-1">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* German Authorities */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="text-yellow-400 font-bold text-sm mb-2">{germanAuthorities.title}</h4>
            <p className="text-xs text-slate-400 mb-3">{germanAuthorities.description}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {germanAuthorities.authorities.map((auth) => (
                <div key={auth.name} className="bg-slate-900/50 rounded p-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-sm">{auth.name}</span>
                    <span className="text-xs text-slate-500">({auth.level})</span>
                  </div>
                  <p className="text-xs text-slate-400">{auth.responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investment Risks */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Zu bewertende regulatorische Risiken</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentRisks.map((risk, index) => (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
              >
                <risk.icon className="text-red-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">{risk.title}</h4>
                <p className="text-sm text-slate-400 mb-4">{risk.description}</p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Due Diligence</div>
                  <p className="text-xs text-slate-300">{risk.dueDiligence}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Morpheus Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-900/20 to-slate-900 rounded-2xl border border-orange-500/30 p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-orange-500" size={28} />
            <h3 className="text-xl font-bold">Fallbeispiel: {morpheusAsExample.company}</h3>
          </div>
          <p className="text-slate-400 mb-6">{morpheusAsExample.keySuccess}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {morpheusAsExample.achievements.map((achievement, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                <span className="text-sm text-slate-300">{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-slate-900 rounded-xl border border-slate-800 p-8"
        >
          <AlertTriangle className="text-yellow-400 mx-auto mb-4" size={32} />
          <p className="text-lg text-slate-200">{investmentThesis.keyQuestion}</p>
          <p className="text-sm text-slate-500 mt-4">
            Dies ist der entscheidende Faktor für den Erfolg in diesem aufstrebenden und hochregulierten Markt.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
