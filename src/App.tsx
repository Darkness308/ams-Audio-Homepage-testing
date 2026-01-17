import {
  Navigation,
  Hero,
  CoreServices,
  Megatrends,
  SmartCity,
  DroneMarket,
  CaseStudy,
  Solution,
  DualEnabler,
  ROI,
  DaaSIntegration,
  SocialLicense,
  UASNoiseCheck,
  CertificationPackages,
  MarketAnalysis,
  SWOT,
  Financials,
  EURegulation,
  InvestmentOpportunities,
  StrategyFramework,
  SuccessFactors,
  Stakeholders,
  Contact,
  Footer
} from './sections'
import { ErrorBoundary } from './components/ui'

// Section configuration for scalable rendering
const sectionGroups = {
  core: {
    id: 'core-services',
    sections: [{ Component: CoreServices, key: 'services' }]
  },
  market: {
    id: 'market-context',
    sections: [
      { Component: Megatrends, key: 'megatrends' },
      { Component: SmartCity, key: 'smartcity' },
      { Component: DroneMarket, key: 'dronemarket' },
      { Component: CaseStudy, key: 'casestudy' }
    ]
  },
  regulation: {
    id: 'eu-regulation',
    sections: [{ Component: EURegulation, key: 'euregulation' }]
  },
  solution: {
    id: 'aaas-solution',
    sections: [
      { Component: Solution, key: 'solution' },
      { Component: DualEnabler, key: 'dualenabler' },
      { Component: ROI, key: 'roi' },
      { Component: DaaSIntegration, key: 'daas' },
      { Component: SocialLicense, key: 'sociallicense' }
    ]
  },
  product: {
    id: 'uas-noisecheck',
    sections: [
      { Component: UASNoiseCheck, key: 'uasnoisecheck' },
      { Component: CertificationPackages, key: 'certification' }
    ]
  },
  strategy: {
    id: 'strategy-framework',
    sections: [{ Component: StrategyFramework, key: 'strategy' }]
  },
  business: {
    id: 'business-analysis',
    sections: [
      { Component: MarketAnalysis, key: 'marketanalysis' },
      { Component: SWOT, key: 'swot' },
      { Component: Financials, key: 'financials' }
    ]
  },
  investor: {
    id: 'investment',
    sections: [{ Component: InvestmentOpportunities, key: 'investment' }]
  },
  stakeholders: {
    id: 'stakeholder-success',
    sections: [
      { Component: SuccessFactors, key: 'successfactors' },
      { Component: Stakeholders, key: 'stakeholders' }
    ]
  }
} as const

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation - Always visible */}
      <Navigation />

      {/* Hero - Critical above-fold content */}
      <Hero />

      {/* Dynamic Section Rendering with Error Boundaries */}
      {Object.values(sectionGroups).map(group => (
        <ErrorBoundary key={group.id}>
          {group.sections.map(({ Component, key }) => (
            <Component key={key} />
          ))}
        </ErrorBoundary>
      ))}

      {/* Contact & Footer - Always rendered */}
      <ErrorBoundary>
        <Contact />
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App
