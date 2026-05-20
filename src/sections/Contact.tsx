import { motion } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { SectionHeader, Button } from '../components/ui'
import { contactInfo } from '../data'
import { MapPin, Mail, Phone } from 'lucide-react'
import { queryChromaPipeline } from '../lib/chromaApi'

export function Contact() {
  // Contact form state (controlled)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  // AI pipeline state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pipelineQuestion, setPipelineQuestion] = useState('')
  const [pipelineAnswer, setPipelineAnswer] = useState('')
  const [pipelineError, setPipelineError] = useState('')

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent('Kontaktanfrage über AMS Audio Homepage')
    const body = encodeURIComponent(
      `Vorname: ${firstName}\nNachname: ${lastName}\nUnternehmen: ${company}\nRolle: ${role}\n\nNachricht:\n${message}`
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
  }

  const handlePipelineSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setPipelineAnswer('')
    setPipelineError('')

    try {
      const result = await queryChromaPipeline(pipelineQuestion)
      setPipelineAnswer(result.answer)
    } catch (error) {
      setPipelineError(error instanceof Error ? error.message : 'Unbekannter Pipeline-Fehler')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Kontakt"
          subtitle="Starten Sie jetzt"
          description="Bereit für die Zukunft der leisen Smart City? Kontaktieren Sie uns für eine Demo oder Beratung."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-6">{contactInfo.company}</h3>
            <p className="text-slate-400 mb-8">
              Die Brücke zwischen technologischer Innovation und gesellschaftlicher Akzeptanz.
              Wir helfen Ihnen, die Herausforderungen der urbanen Drohnenlogistik zu meistern.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Standort</p>
                  <p className="font-medium">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">E-Mail</p>
                  <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-orange-500 transition">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Telefon</p>
                  <p className="font-medium">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 p-6 bg-orange-500/10 rounded-xl border border-orange-500/20">
              <h4 className="font-bold mb-2">Kostenlose Demo</h4>
              <p className="text-slate-400 text-sm mb-4">
                Erleben Sie AcoustiScan live und sehen Sie, wie wir Ihre
                Lärmprognose-Herausforderungen lösen können.
              </p>
              <Button variant="primary" size="sm" showArrow>
                Demo anfragen
              </Button>
            </div>
          </motion.div>

          {/* Right column: Contact Form + AI Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Kontaktformular */}
            <div>
              <h3 className="text-xl font-bold mb-6">Kontaktformular</h3>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Vorname</label>
                    <input
                      type="text"
                      placeholder="Max"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Nachname</label>
                    <input
                      type="text"
                      placeholder="Mustermann"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">E-Mail</label>
                  <input
                    type="email"
                    placeholder="max@beispiel.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Unternehmen / Organisation</label>
                  <input
                    type="text"
                    placeholder="Ihr Unternehmen"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Ich bin...</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="operator">Drohnenbetreiber</option>
                    <option value="municipality">Kommune / Behörde</option>
                    <option value="researcher">Forscher / Akademiker</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    placeholder="Wie können wir Ihnen helfen?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Nachricht senden (mailto)
                </Button>
              </form>
            </div>

            {/* KI-Fragen stellen */}
            <div>
              <h3 className="text-xl font-bold mb-2">KI-Fragen stellen</h3>
              <p className="text-slate-400 text-sm mb-6">
                Stellen Sie unserer KI eine Frage zu Akustik, Drohnenlärm oder Compliance.
              </p>
              <form className="space-y-4" onSubmit={handlePipelineSubmit}>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Ihre Frage</label>
                  <textarea
                    rows={3}
                    placeholder="z.B. Welche TA-Lärm Grenzwerte gelten für Drohnen im Wohngebiet?"
                    value={pipelineQuestion}
                    onChange={(e) => setPipelineQuestion(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none transition resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Antwort wird geladen…' : 'Frage stellen'}
                </Button>

                {(pipelineAnswer || pipelineError) && (
                  <div className={`rounded-lg border p-4 text-sm ${pipelineError ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-green-500/30 bg-green-500/10 text-green-300'}`}>
                    <p className="mb-1 font-semibold">
                      {pipelineError ? 'Chroma-Pipeline Fehler' : 'Chroma-Pipeline Antwort'}
                    </p>
                    <p>{pipelineError || pipelineAnswer}</p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
