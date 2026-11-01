import React, { Suspense, lazy } from 'react';
import { ErrorBoundary, SectionLoader } from './components/ui/ErrorBoundary';
import { HomepageWrapper } from './components/SectionWrappers';

// Lazy load the main component for code splitting
const AMSAudioHomepage = lazy(() => import('./components/AMSAudioHomepage'));

// App wrapper with global error boundary
function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-red-500 text-6xl mb-4">⚠</div>
            <h1 className="text-2xl font-light text-stone-200 mb-4">
              Anwendungsfehler
            </h1>
            <p className="text-stone-500 mb-6">
              Die Anwendung konnte nicht geladen werden.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-stone-100 text-neutral-900 rounded-full hover:bg-white transition-colors"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

export {
  SectionWrapper,
  NavigationSection,
  HeroSection,
  BrandsSection,
  StatsSection,
  ServicesSection,
  AcoustiScanSection,
  Vision2030Section,
  HolzbauSection,
  TeamSection,
  CTASection,
  FooterSection,
} from './components/SectionWrappers';

// Main App component with modular architecture
function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<SectionLoader />}>
        <HomepageWrapper>
          <AMSAudioHomepage />
        </HomepageWrapper>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
