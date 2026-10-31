import React, { useEffect } from 'react';
import { ErrorBoundary } from './ui/ErrorBoundary';

const SECTIONS = [
  { id: 'main-content', name: 'Homepage' },
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

interface SectionRegistry {
  loaded: Set<string>;
  errors: Map<string, Error>;
}

const sectionRegistry: SectionRegistry = {
  loaded: new Set(),
  errors: new Map(),
};

function getSectionStatus(): { total: number; loaded: number; errors: number } {
  return {
    total: SECTIONS.length,
    loaded: sectionRegistry.loaded.size,
    errors: sectionRegistry.errors.size,
  };
}

function logSectionStatus(): void {
  if (process.env.NODE_ENV === 'development') {
    const status = getSectionStatus();
    console.log(`[App] Sections: ${status.loaded}/${status.total} loaded, ${status.errors} errors`);
  }
}

function markSectionLoaded(sectionId: string): void {
  sectionRegistry.loaded.add(sectionId);
  logSectionStatus();
}

function recordSectionError(sectionId: string, error: Error): void {
  sectionRegistry.errors.set(sectionId, error);
  logSectionStatus();
}

interface SectionWrapperProps {
  children: React.ReactNode;
  sectionId: string;
  sectionName: string;
  fallback?: React.ReactNode;
}

export function SectionWrapper({ children, sectionId, sectionName, fallback }: SectionWrapperProps) {
  return (
    <ErrorBoundary
      fallback={fallback}
      onError={(error) => {
        console.error(`[${sectionName}] Error:`, error.message);
        recordSectionError(sectionId, error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

function useSectionObserver(sectionId: string): void {
  useEffect(() => {
    markSectionLoaded(sectionId);
  }, [sectionId]);
}

export function NavigationSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('navigation');
  return <SectionWrapper sectionId="navigation" sectionName="Navigation">{children}</SectionWrapper>;
}

export function HeroSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('hero');
  return <SectionWrapper sectionId="hero" sectionName="Hero">{children}</SectionWrapper>;
}

export function BrandsSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('brands-bar');
  return <SectionWrapper sectionId="brands-bar" sectionName="Brands">{children}</SectionWrapper>;
}

export function StatsSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('stats');
  return <SectionWrapper sectionId="stats" sectionName="Stats">{children}</SectionWrapper>;
}

export function ServicesSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('services-header');
  return <SectionWrapper sectionId="services-header" sectionName="Services">{children}</SectionWrapper>;
}

export function AcoustiScanSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('acoustiscan-feature');
  return <SectionWrapper sectionId="acoustiscan-feature" sectionName="AcoustiScan">{children}</SectionWrapper>;
}

export function Vision2030Section({ children }: { children: React.ReactNode }) {
  useSectionObserver('vision-2030');
  return <SectionWrapper sectionId="vision-2030" sectionName="Vision 2030">{children}</SectionWrapper>;
}

export function HolzbauSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('holzbau');
  return <SectionWrapper sectionId="holzbau" sectionName="Holzbau">{children}</SectionWrapper>;
}

export function TeamSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('team');
  return <SectionWrapper sectionId="team" sectionName="Team">{children}</SectionWrapper>;
}

export function CTASection({ children }: { children: React.ReactNode }) {
  useSectionObserver('cta');
  return <SectionWrapper sectionId="cta" sectionName="CTA">{children}</SectionWrapper>;
}

export function FooterSection({ children }: { children: React.ReactNode }) {
  useSectionObserver('footer');
  return <SectionWrapper sectionId="footer" sectionName="Footer">{children}</SectionWrapper>;
}

export function HomepageWrapper({ children }: { children: React.ReactNode }) {
  useSectionObserver('main-content');
  return <SectionWrapper sectionId="main-content" sectionName="Homepage">{children}</SectionWrapper>;
}
