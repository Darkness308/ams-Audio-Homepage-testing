import {
  Navigation,
  Hero,
  Megatrends,
  SmartCity,
  DroneMarket,
  CaseStudy,
  Solution,
  SuccessFactors,
  Stakeholders,
  Contact,
  Footer
} from './sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Megatrends - Die globalen Treiber */}
      <Megatrends />

      {/* Smart City - Die vier Handlungsfelder */}
      <SmartCity />

      {/* Drone Market - Potenziale und Risiken */}
      <DroneMarket />

      {/* Case Study - Fallstudie Iserlohn */}
      <CaseStudy />

      {/* Solution - Acoustic-as-a-Service */}
      <Solution />

      {/* Success Factors - Strategische Erfolgsfaktoren */}
      <SuccessFactors />

      {/* Stakeholders - Vorteile für alle */}
      <Stakeholders />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
