import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  financialsContent,
  capitalRequirement,
  revenueProjection,
  profitLoss,
  keyMetrics,
  investorHighlights
} from '../data/financials'

export function Financials() {
  return (
    <section id="financials" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={financialsContent.title}
          subtitle={financialsContent.subtitle}
          description={financialsContent.description}
        />

        {/* Investor Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {investorHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-orange-500/10 to-slate-900 rounded-xl border border-orange-500/30 p-4 text-center"
            >
              <highlight.icon className="text-orange-500 mx-auto mb-2" size={28} />
              <div className="text-2xl font-bold text-orange-500">{highlight.metric}</div>
              <div className="text-sm font-medium mb-1">{highlight.label}</div>
              <div className="text-xs text-slate-500">{highlight.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Capital Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-2">Kapitalbedarf: {capitalRequirement.total}</h3>
          <p className="text-slate-400 text-sm mb-6">{capitalRequirement.purpose}</p>

          <div className="space-y-4">
            {capitalRequirement.allocation.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <item.icon className="text-orange-500" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm text-orange-500">{item.amount.toLocaleString()} € ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-orange-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-slate-500">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Projection Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-12 overflow-x-auto"
        >
          <h3 className="text-xl font-bold mb-6">Umsatzprognose</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Umsatzquelle</th>
                {revenueProjection.years.map(year => (
                  <th key={year} className="text-right py-3 text-slate-400">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {revenueProjection.packages.map((pkg, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="py-3">{pkg.name}</td>
                  {pkg.revenue.map((rev, i) => (
                    <td key={i} className="text-right py-3 text-slate-300">
                      {rev.toLocaleString()} €
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-3 text-orange-500">Gesamtumsatz</td>
                {revenueProjection.totalRevenue.map((total, i) => (
                  <td key={i} className="text-right py-3 text-orange-500">
                    {total.toLocaleString()} €
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* P&L Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-12 overflow-x-auto"
        >
          <h3 className="text-xl font-bold mb-6">Gewinn- und Verlustrechnung (in T€)</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Position</th>
                {profitLoss.years.map(year => (
                  <th key={year} className="text-right py-3 text-slate-400">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profitLoss.rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-slate-800 ${
                    row.type === 'total' ? 'font-bold' : ''
                  } ${row.type === 'subtotal' ? 'bg-slate-800/50' : ''}`}
                >
                  <td className={`py-3 ${row.type === 'total' ? 'text-orange-500' : ''}`}>
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`text-right py-3 ${
                        val < 0 ? 'text-red-400' : val > 0 ? 'text-green-400' : ''
                      } ${row.type === 'total' ? 'text-orange-500' : ''}`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-900/20 to-slate-900 rounded-2xl border border-green-500/30 p-8"
        >
          <h3 className="text-xl font-bold text-green-400 mb-4">Return on Investment</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-slate-400 text-sm mb-1">Exit-Bewertung (5 Jahre)</div>
              <div className="text-2xl font-bold">{keyMetrics.roiCalculation.exitValuation.toLocaleString()} €</div>
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-sm mb-1">Seed-Investment</div>
              <div className="text-2xl font-bold">{keyMetrics.roiCalculation.investment.toLocaleString()} €</div>
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-sm mb-1">ROI</div>
              <div className="text-3xl font-bold text-green-400">{keyMetrics.roiCalculation.roi}%</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center">
            {keyMetrics.roiCalculation.basis}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
