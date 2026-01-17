import {
  Navigation,
  Hero,
  Megatrends,
  SmartCity,
  DroneMarket,
  CaseStudy,
  Solution,
  DualEnabler,
  ROI,
  DaaSIntegration,
  SocialLicense,
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

      {/* === MARKT & KONTEXT === */}

      {/* Megatrends - Die globalen Treiber */}
      <Megatrends />

      {/* Smart City - Die vier Handlungsfelder */}
      <SmartCity />

      {/* Drone Market - Potenziale und Risiken */}
      <DroneMarket />

      {/* Case Study - Fallstudie Iserlohn */}
      <CaseStudy />

      {/* === AAAS LÖSUNG === */}

      {/* Solution - Acoustic-as-a-Service Grundlagen */}
      <Solution />

      {/* Dual Enabler - Technische + Regulatorische Exzellenz */}
      <DualEnabler />

      {/* ROI - Risikomonetarisierung */}
      <ROI />

      {/* DaaS Integration - Data-as-a-Service & BI Maturity */}
      <DaaSIntegration />

      {/* Social License - Gesellschaftliche Akzeptanz */}
      <SocialLicense />

      {/* === STRATEGIE & STAKEHOLDER === */}

      {/* Success Factors - Strategische Erfolgsfaktoren */}
      <SuccessFactors />

      {/* Stakeholders - Vorteile für alle */}
      <Stakeholders />

      {/* === KONTAKT === */}

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
