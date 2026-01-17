import { motion } from 'framer-motion'
import { Volume2, Shield, Users, MapPin, ArrowRight, Phone, Mail } from 'lucide-react'

function App() {
    return (
          <div className="min-h-screen bg-slate-950 text-white">
            {/* Navigation */}
                <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                                  <div className="text-2xl font-bold text-orange-500">AMS Audio</div>div>
                                  <div className="hidden md:flex gap-8">
                                              <a href="#services" className="hover:text-orange-500 transition">Services</a>a>
                                              <a href="#technology" className="hover:text-orange-500 transition">Technologie</a>a>
                                              <a href="#contact" className="hover:text-orange-500 transition">Kontakt</a>a>
                                  </div>div>
                                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition">
                                              Demo
                                  </button>button>
                        </div>div>
                </nav>nav>
          
            {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                        <div className="max-w-7xl mx-auto">
                                  <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center"
                                              >
                                              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                                            <span className="text-orange-500">Lärm verstehen.</span>span>
                                                            <br />
                                                            Compliance garantieren.
                                              </h1>h1>
                                              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                                                            Die Zukunft der urbanen Drohnenlogistik beginnt mit leisem Fliegen.
                                                            Acoustics as a Service für das Ruhrgebiet 2030.
                                              </p>p>
                                              <div className="flex gap-4 justify-center">
                                                            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg flex items-center gap-2 transition">
                                                                            Demo starten <ArrowRight size={20} />
                                                            </button>button>
                                                            <button className="border border-slate-700 hover:border-orange-500 px-8 py-3 rounded-lg transition">
                                                                            Mehr erfahren
                                                            </button>button>
                                              </div>div>
                                  </motion.div>motion.div>
                        </div>div>
                </section>section>
          
            {/* Services */}
                <section id="services" className="py-20 px-6 bg-slate-900/50">
                        <div className="max-w-7xl mx-auto">
                                  <h2 className="text-3xl font-bold text-center mb-12">Unsere Services</h2>h2>
                                  <div className="grid md:grid-cols-3 gap-8">
                                    {[
            { icon: Volume2, title: 'AcoustiScan', desc: 'KI-basierte Lärmprognose und Live-Monitoring' },
            { icon: Shield, title: 'Regulatory Navigation', desc: 'Von TA Lärm bis EASA AltMoC' },
            { icon: Users, title: 'Community Integration', desc: 'Soziale Akzeptanz durch Transparenz' },
                        ].map((service, i) => (
                                        <motion.div
                                                          key={i}
                                                          initial={{ opacity: 0, y: 20 }}
                                                          whileInView={{ opacity: 1, y: 0 }}
                                                          transition={{ delay: i * 0.2 }}
                                                          className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-500 transition"
                                                        >
                                                        <service.icon className="text-orange-500 mb-4" size={40} />
                                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>h3>
                                                        <p className="text-slate-400">{service.desc}</p>p>
                                        </motion.div>motion.div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Stats */}
                <section className="py-20 px-6">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                          {[
            { value: '98%', label: 'Unter Grenzwert' },
            { value: '80%', label: 'Zeitersparnis' },
            { value: '6.6:1', label: 'ROI' },
            { value: '24/7', label: 'Monitoring' },
                      ].map((stat, i) => (
                                    <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                  >
                                                  <div className="text-4xl font-bold text-orange-500">{stat.value}</div>div>
                                                  <div className="text-slate-400">{stat.label}</div>div>
                                    </motion.div>motion.div>
                                  ))}
                        </div>div>
                </section>section>
          
            {/* Contact */}
                <section id="contact" className="py-20 px-6 bg-slate-900/50">
                        <div className="max-w-7xl mx-auto">
                                  <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>h2>
                                  <div className="grid md:grid-cols-2 gap-12">
                                              <div>
                                                            <h3 className="text-xl font-bold mb-4">AMS Audio</h3>h3>
                                                            <div className="space-y-4 text-slate-400">
                                                                            <p className="flex items-center gap-2"><MapPin size={20} /> Ruhrgebiet, Deutschland</p>p>
                                                                            <p className="flex items-center gap-2"><Mail size={20} /> info@ams-audio.com</p>p>
                                                                            <p className="flex items-center gap-2"><Phone size={20} /> +49 XXX XXXXXXX</p>p>
                                                            </div>div>
                                              </div>div>
                                              <form className="space-y-4">
                                                            <input type="text" placeholder="Name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none" />
                                                            <input type="email" placeholder="E-Mail" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none" />
                                                            <textarea placeholder="Nachricht" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-orange-500 outline-none"></textarea>textarea>
                                                            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg transition">
                                                                            Nachricht senden
                                                            </button>button>
                                              </form>form>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Footer */}
                <footer className="py-8 px-6 border-t border-slate-800">
                        <div className="max-w-7xl mx-auto text-center text-slate-500">
                                  <p>© 2026 AMS Audio. Acoustics as a Service.</p>p>
                        </div>div>
                </footer>footer>
          </div>div>
        )
}

export default App</div>
