import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ErrorBoundary, SectionLoader } from './components/ui/ErrorBoundary';

// Lazy load the main component for code splitting
const AMSAudioHomepage = lazy(() => import('./components/AMSAudioHomepage'));

// Section wrapper with ErrorBoundary
interface SectionWrapperProps {
  children: React.ReactNode;
  sectionName: string;
  fallback?: React.ReactNode;
}

function SectionWrapper({ children, sectionName, fallback }: SectionWrapperProps) {
  return (
    <ErrorBoundary
      fallback={fallback}
      onError={(error) => {
        console.error(`[${sectionName}] Error:`, error.message);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// Section definitions for modular architecture
const SECTIONS = [
  { id: 'navigation', name: 'Navigation' },
  { id: 'hero', name: 'Hero Section' },
  { id: 'hero-backgrounds', name: 'Hero Backgrounds' },
  { id: 'hero-content', name: 'Hero Content' },
  { id: 'hero-waveform', name: 'Hero Waveform' },
  { id: 'brands-bar', name: 'Brands Bar' },
  { id: 'stats', name: 'Stats Section' },
  { id: 'services-header', name: 'Services Header' },
  { id: 'service-msh-audio', name: 'Service: MSH Audio' },
  { id: 'service-acoustiscan', name: 'Service: AcoustiScan' },
  { id: 'service-drohnen', name: 'Service: Drohnen-Compliance' },
  { id: 'service-bauakustik', name: 'Service: Bauakustik' },
  { id: 'service-industrieakustik', name: 'Service: Industrieakustik' },
  { id: 'service-aaas', name: 'Service: AaaS 2030' },
  { id: 'acoustiscan-feature', name: 'AcoustiScan Feature' },
  { id: 'acoustiscan-demo', name: 'AcoustiScan Demo' },
  { id: 'vision-2030', name: 'Vision 2030' },
  { id: 'vision-2030-stats', name: 'Vision 2030 Stats' },
  { id: 'holzbau', name: 'Holzbau Section' },
  { id: 'holzbau-cards', name: 'Holzbau Cards' },
  { id: 'team', name: 'Team Section' },
  { id: 'cta', name: 'CTA Section' },
  { id: 'footer', name: 'Footer' },
  { id: 'footer-links', name: 'Footer Links' },
] as const;

// Section registry for tracking loaded sections
interface SectionRegistry {
  loaded: Set<string>;
  errors: Map<string, Error>;
}

const sectionRegistry: SectionRegistry = {
  loaded: new Set(),
  errors: new Map(),
};

// Mark section as loaded
function markSectionLoaded(sectionId: string): void {
  sectionRegistry.loaded.add(sectionId);
}

// Get section status
function getSectionStatus(): { total: number; loaded: number; errors: number } {
  return {
    total: SECTIONS.length,
    loaded: sectionRegistry.loaded.size,
    errors: sectionRegistry.errors.size,
  };
}

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

// Section observer for tracking visibility
function useSectionObserver(sectionId: string): void {
  useEffect(() => {
    markSectionLoaded(sectionId);
    return () => {
      // Cleanup if needed
    };
  }, [sectionId]);
}

// Individual section components with ErrorBoundary wrappers
function NavigationSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('navigation');
  return <SectionWrapper sectionName="Navigation">{children}</SectionWrapper>;
}

function HeroSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('hero');
  return <SectionWrapper sectionName="Hero">{children}</SectionWrapper>;
}

function BrandsSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('brands-bar');
  return <SectionWrapper sectionName="Brands">{children}</SectionWrapper>;
}

function StatsSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('stats');
  return <SectionWrapper sectionName="Stats">{children}</SectionWrapper>;
}

function ServicesSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('services-header');
  return <SectionWrapper sectionName="Services">{children}</SectionWrapper>;
}

function AcoustiScanSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('acoustiscan-feature');
  return <SectionWrapper sectionName="AcoustiScan">{children}</SectionWrapper>;
}

function Vision2030Section({ children }: { children: React.ReactNode }) {
  useSectionObserver('vision-2030');
  return <SectionWrapper sectionName="Vision 2030">{children}</SectionWrapper>;
}

function HolzbauSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('holzbau');
  return <SectionWrapper sectionName="Holzbau">{children}</SectionWrapper>;
}

function TeamSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('team');
  return <SectionWrapper sectionName="Team">{children}</SectionWrapper>;
}

function CTASection({ children }: { children: React.ReactNode }) {
  useSectionObserver('cta');
  return <SectionWrapper sectionName="CTA">{children}</SectionWrapper>;
}

function FooterSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('footer');
  return <SectionWrapper sectionName="Footer">{children}</SectionWrapper>;
}

// Export section wrappers for use in AMSAudioHomepage
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
  SECTIONS,
  getSectionStatus,
};

// Main App component with modular architecture
function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Mark app as ready after initial mount
    setIsReady(true);

    // Log section status in development
    if (process.env.NODE_ENV === 'development') {
      const status = getSectionStatus();
      console.log(`[App] Sections: ${status.loaded}/${status.total} loaded`);
    }
  }, []);

  return (
    <AppWrapper>
      <Suspense fallback={<SectionLoader />}>
        {isReady && <AMSAudioHomepage />}
      </Suspense>
    </AppWrapper>
  );
}

export default App;
