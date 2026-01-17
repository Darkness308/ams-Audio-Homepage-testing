import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui'
import {
  coreServicesContent,
  rt60Service,
  lidarService,
  measurementEquipment,
  impulseResponse,
  servicePackages,
  uniqueValueProposition
} from '../data/coreServices'

export function CoreServices() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={coreServicesContent.title}
          subtitle={coreServicesContent.subtitle}
          description={coreServicesContent.description}
        />

        {/* RT60 + LiDAR Combo Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-8 border border-orange-500/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{uniqueValueProposition.title}</h3>
            <p className="text-orange-400">{uniqueValueProposition.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-4">{uniqueValueProposition.traditional.title}</h4>
              <ul className="space-y-2">
                {uniqueValueProposition.traditional.problems.map((problem, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-red-400">✗</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-4">{uniqueValueProposition.amsApproach.title}</h4>
              <ul className="space-y-2">
                {uniqueValueProposition.amsApproach.solutions.map((solution, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-green-400">✓</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-white">{uniqueValueProposition.keyBenefit}</p>
          </div>
        </motion.div>

        {/* RT60 Measurement Service */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{rt60Service.title}</h3>
                <p className="text-orange-400 text-sm">{rt60Service.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6">{rt60Service.description}</p>

            {/* Standards */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {rt60Service.standards.map((standard) => (
                <div key={standard.id} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-orange-400 mb-1">{standard.name}</h4>
                  <p className="text-xs text-slate-400 mb-3">{standard.description}</p>
                  <ul className="space-y-1">
                    {standard.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="text-green-400">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Accuracy Levels */}
            <h4 className="font-semibold mb-4">Messgenauigkeitsstufen nach ISO 3382</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {rt60Service.accuracyLevels.map((level, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <h5 className="font-semibold text-sm mb-2">{level.level}</h5>
                  <p className="text-xs text-slate-400 mb-2">{level.positions}</p>
                  <p className="text-xs text-slate-300">{level.use}</p>
                  <span className="inline-block mt-2 text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">
                    {level.bands}
                  </span>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <h4 className="font-semibold mb-3">Lieferergebnisse</h4>
            <div className="flex flex-wrap gap-2">
              {rt60Service.deliverables.map((item, i) => (
                <span key={i} className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* LiDAR Service */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{lidarService.title}</h3>
                <p className="text-blue-400 text-sm">{lidarService.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6">{lidarService.description}</p>

            {/* Technology Specs */}
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 mb-6">
              <h4 className="font-semibold mb-3">Technologie</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <span className="text-xs text-slate-400">Gerät</span>
                  <p className="text-sm font-medium">{lidarService.technology.device}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Genauigkeit</span>
                  <p className="text-sm font-medium text-green-400">{lidarService.technology.accuracy}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Reichweite</span>
                  <p className="text-sm font-medium">{lidarService.technology.range}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Geschwindigkeit</span>
                  <p className="text-sm font-medium">{lidarService.technology.speed}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">API</span>
                  <p className="text-sm font-medium">{lidarService.technology.api}</p>
                </div>
              </div>
            </div>

            {/* Workflow */}
            <h4 className="font-semibold mb-4">Workflow</h4>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {lidarService.workflow.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold text-sm">{step.step}</span>
                    </div>
                    <h5 className="font-semibold text-sm mb-1">{step.name}</h5>
                    <p className="text-xs text-blue-400 mb-2">{step.duration}</p>
                    <p className="text-xs text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Output Formats */}
            <h4 className="font-semibold mb-3">Export-Formate</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {lidarService.outputFormats.map((format) => (
                <div key={format.format} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <h5 className="font-semibold text-sm mb-2">{format.format}</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {format.extensions.map((ext) => (
                      <span key={ext} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                        {ext}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">{format.use}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Measurement Equipment */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎤</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{measurementEquipment.title}</h3>
                <p className="text-green-400 text-sm">{measurementEquipment.subtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Microphone Specs */}
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                <h4 className="font-semibold mb-4">Klasse 1 USB-Messmikrofon</h4>
                {measurementEquipment.microphones.map((mic, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Standard</span>
                      <span className="text-green-400">{mic.standard}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Frequenzbereich</span>
                      <span>{mic.frequency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Dynamik</span>
                      <span>{mic.dynamic}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Anschluss</span>
                      <span>{mic.connection}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Kalibrierung</span>
                      <span className="text-green-400">{mic.calibration}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advantages */}
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                <h4 className="font-semibold mb-4">Vorteile</h4>
                <ul className="space-y-2">
                  {measurementEquipment.advantages.map((adv, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impulse Response Methods */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👏</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{impulseResponse.title}</h3>
                <p className="text-purple-400 text-sm">{impulseResponse.subtitle}</p>
              </div>
            </div>

            {/* Methods */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {impulseResponse.methods.map((method) => (
                <div key={method.name} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-sm mb-2">{method.name}</h4>
                  <p className="text-xs text-slate-400 mb-3">{method.description}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Genauigkeit</span>
                      <span className={method.accuracy === 'Hoch' ? 'text-green-400' : 'text-yellow-400'}>
                        {method.accuracy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Equipment</span>
                      <span className="text-right">{method.equipment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Derived Parameters */}
            <h4 className="font-semibold mb-3">Abgeleitete Parameter</h4>
            <div className="flex flex-wrap gap-2">
              {impulseResponse.derivedParameters.map((param) => (
                <div key={param.name} className="bg-slate-700/50 px-3 py-2 rounded-lg">
                  <span className="text-purple-400 font-mono text-sm">{param.name}</span>
                  <span className="text-xs text-slate-400 ml-2">{param.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Service Packages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Service-Pakete</h3>
            <p className="text-slate-400">Wählen Sie das passende Paket für Ihre Anforderungen</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-6 border ${
                  index === 1
                    ? 'bg-gradient-to-b from-orange-500/20 to-slate-800/50 border-orange-500/30'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                {index === 1 && (
                  <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                    Empfohlen
                  </span>
                )}
                <h4 className="text-xl font-bold mb-1">{pkg.name}</h4>
                <p className="text-2xl font-bold text-orange-400 mb-2">{pkg.price}</p>
                <p className="text-sm text-slate-400 mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-4">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Lieferzeit</span>
                    <span>{pkg.turnaround}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Geeignet für: {pkg.suitable.join(', ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
