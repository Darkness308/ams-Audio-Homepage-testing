import { LucideIcon } from 'lucide-react'

// ============================================
// CORE TYPES
// ============================================

export interface NavItem {
  label: string
  href: string
}

export interface HeroContent {
  headline: string
  subheadline: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
}

// ============================================
// MEGATRENDS & SMART CITY
// ============================================

export interface Megatrend {
  id: string
  icon: LucideIcon
  title: string
  description: string
  impact: string
  stats?: string
}

export interface SmartCityField {
  id: string
  icon: LucideIcon
  title: string
  description: string
  solutions: string[]
  aiApplication: string
}

// ============================================
// DRONE LOGISTICS MARKET
// ============================================

export interface MarketPotential {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface MarketRisk {
  id: string
  icon: LucideIcon
  title: string
  description: string
  severity: 'high' | 'medium' | 'low'
}

export interface DroneMarketData {
  potentials: MarketPotential[]
  risks: MarketRisk[]
}

// ============================================
// CASE STUDY (ISERLOHN)
// ============================================

export interface CaseStudyPhase {
  id: string
  phase: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ConflictCause {
  id: string
  icon: LucideIcon
  title: string
  description: string
  data?: string
  severity: 'critical' | 'high' | 'medium'
}

export interface CaseStudy {
  title: string
  location: string
  company: string
  phases: CaseStudyPhase[]
  causes: ConflictCause[]
  lesson: string
}

// ============================================
// AAAS SOLUTION
// ============================================

export interface AcoustiScanFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}

export interface TechSpec {
  label: string
  value: string
}

export interface AaaSSolution {
  name: string
  tagline: string
  features: AcoustiScanFeature[]
  techSpecs: TechSpec[]
}

// ============================================
// SUCCESS FACTORS
// ============================================

export interface SuccessFactor {
  id: string
  number: number
  icon: LucideIcon
  title: string
  description: string
  keyPoints: string[]
}

// ============================================
// STAKEHOLDERS & BENEFITS
// ============================================

export interface StakeholderBenefit {
  id: string
  title: string
  description: string
}

export interface Stakeholder {
  id: string
  icon: LucideIcon
  name: string
  description: string
  benefits: StakeholderBenefit[]
  cta: string
}

// ============================================
// STATISTICS & METRICS
// ============================================

export interface Statistic {
  value: string
  label: string
  description?: string
}

// ============================================
// REGULATORY
// ============================================

export interface Regulation {
  id: string
  name: string
  jurisdiction: string
  description: string
  relevance: string
}

// ============================================
// CONTACT & COMPANY
// ============================================

export interface ContactInfo {
  address: string
  email: string
  phone: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}
