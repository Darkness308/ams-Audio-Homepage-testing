import React, { useState, useEffect, useRef } from 'react';
import {
  Mic, Waves, Building2, Plane, Tablet, Users, ArrowRight,
  ChevronDown, Phone, Mail, MapPin, Play, Volume2, Headphones,
  Scan, Target, Shield, TrendingUp, Clock,
  Database, BarChart3, TreePine, Home, Factory
} from 'lucide-react';

// Soft Flowing Wave Background
const SoftWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full opacity-[0.03]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="softWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d6d3d1" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a8a29e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d6d3d1" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <path className="wave-path-1" fill="url(#softWave1)">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,400 C240,350 480,450 720,400 C960,350 1200,450 1440,400 L1440,800 L0,800 Z;
              M0,400 C240,450 480,350 720,400 C960,450 1200,350 1440,400 L1440,800 L0,800 Z;
              M0,400 C240,350 480,450 720,400 C960,350 1200,450 1440,400 L1440,800 L0,800 Z
            "
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
        </path>

        <path className="wave-path-2" fill="url(#softWave1)" opacity="0.5">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,500 C240,450 480,550 720,500 C960,450 1200,550 1440,500 L1440,800 L0,800 Z;
              M0,500 C240,550 480,450 720,500 C960,550 1200,450 1440,500 L1440,800 L0,800 Z;
              M0,500 C240,450 480,550 720,500 C960,450 1200,550 1440,500 L1440,800 L0,800 Z
            "
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
        </path>

        <path className="wave-path-3" fill="url(#softWave1)" opacity="0.3">
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0,550 C240,520 480,580 720,550 C960,520 1200,580 1440,550 L1440,800 L0,800 Z;
              M0,550 C240,580 480,520 720,550 C960,580 1200,520 1440,550 L1440,800 L0,800 Z;
              M0,550 C240,520 480,580 720,550 C960,520 1200,580 1440,550 L1440,800 L0,800 Z
            "
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
        </path>
      </svg>
    </div>
  );
};

// Gentle Glow Orbs with warm tones
const WarmGlowOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full animate-gentle-float"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(214,211,209,0.04) 0%, transparent 70%)',
          top: '-10%',
          left: '10%',
        }}
      />
      <div
        className="absolute rounded-full animate-gentle-float-delayed"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168,162,158,0.03) 0%, transparent 70%)',
          bottom: '5%',
          right: '5%',
        }}
      />
      <div
        className="absolute rounded-full animate-gentle-float-delayed-2"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245,245,244,0.02) 0%, transparent 70%)',
          top: '40%',
          right: '25%',
        }}
      />
    </div>
  );
};

// Elegant Audio Waveform
interface ElegantWaveformProps {
  className?: string;
  barCount?: number;
}

const ElegantWaveform = ({ className = "", barCount = 32 }: ElegantWaveformProps) => {
  return (
    <div className={`flex items-center justify-center gap-[3px] ${className}`}>
      {[...Array(barCount)].map((_, i) => {
        const centerDistance = Math.abs(i - barCount / 2) / (barCount / 2);
        const baseHeight = (1 - centerDistance * 0.7) * 40 + 8;
        return (
          <div
            key={i}
            className="rounded-full bg-gradient-to-t from-stone-600 to-stone-400 animate-soft-pulse"
            style={{
              width: '2px',
              height: `${baseHeight}px`,
              animationDelay: `${i * 0.06}s`
            }}
          />
        );
      })}
    </div>
  );
};

// Concentric Ripple Effect
interface ConcentricRipplesProps {
  className?: string;
}

const ConcentricRipples = ({ className = "" }: ConcentricRipplesProps) => {
  return (
    <div className={`relative ${className}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-stone-400/20 animate-concentric-expand"
          style={{
            animationDelay: `${i * 1.5}s`
          }}
        />
      ))}
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative bg-neutral-950/80 backdrop-blur-sm rounded-2xl p-8 h-full
        border border-stone-800/50
        transition-all duration-700 ease-out
        ${isHovered ? 'border-stone-600/50 bg-neutral-900/80' : ''}
      `}>
        <div className={`
          w-14 h-14 rounded-xl flex items-center justify-center mb-6
          bg-gradient-to-br from-stone-800 to-stone-900
          border border-stone-700/50
          transition-all duration-500
          ${isHovered ? 'scale-105 border-stone-500/50' : ''}
        `}>
          <Icon className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-stone-200' : 'text-stone-400'}`} />
        </div>

        <h3 className={`text-xl font-medium mb-4 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-stone-200'}`}>
          {title}
        </h3>
        <p className="text-stone-500 mb-6 leading-relaxed text-sm">{description}</p>

        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-stone-400">
              <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${isHovered ? 'bg-stone-300' : 'bg-stone-600'}`} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className={`
          mt-8 flex items-center gap-2 text-sm font-medium
          transition-all duration-500
          ${isHovered ? 'text-stone-200 gap-4' : 'text-stone-600'}
        `}>
          <span>Mehr erfahren</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// Stats Counter Component
interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

const StatCounter = ({ value, label, suffix = "" }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let start = 0;
          const end = parseInt(value);
          const duration = 3000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extralight text-stone-200 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-stone-600 mt-3 text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
};

// Main Homepage Component
export default function AMSAudioHomepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Mic,
      title: "MSH Audio Freelance",
      description: "Professionelle Veranstaltungstechnik und Ton-Engineering für Events, Studios und Live-Produktionen.",
      features: ["Live-Sound & FOH-Engineering", "Studio-Recording & Mixing", "Beschallungskonzepte & Planung", "Equipment-Beratung & Installation"]
    },
    {
      icon: Tablet,
      title: "AcoustiScan",
      description: "Revolutionäre iPad-App mit LiDAR-Technologie für professionelle Raumakustik-Analyse und RT60-Messungen.",
      features: ["LiDAR 3D-Raumerfassung", "Nachhallzeit-Messung (RT60)", "DIN ISO 3382-1 konform", "Automatisierte PDF-Reports"]
    },
    {
      icon: Plane,
      title: "Drohnen-Compliance",
      description: "TA-Lärm konforme Lärmprognosen und SORA 2.5 Risikobewertung für urbane Drohnenlogistik.",
      features: ["TA-Lärm Immissionsprognose", "SORA 2.5 Compliance-Check", "ISO 9613-2 Berechnung", "Behördenfähige Gutachten"]
    },
    {
      icon: Building2,
      title: "Bauakustik",
      description: "Schallschutz-Beratung für Neubauten und Sanierungen mit Fokus auf moderne Holz-Hybrid-Bauweisen.",
      features: ["Trittschall & Luftschall", "Holzbau-Spezialisierung", "VR/AR-Akustiksimulation", "Energetische Sanierung"]
    },
    {
      icon: Factory,
      title: "Industrieakustik",
      description: "Lärmminderung und Arbeitsschutz für Produktionsstätten gemäß aktueller Normen und Richtlinien.",
      features: ["Arbeitsplatzbewertung", "Maschinenakustik", "Schallschutzkapselung", "Lärmaktionspläne"]
    },
    {
      icon: TrendingUp,
      title: "AaaS 2030",
      description: "Acoustics-as-a-Service: Skalierbare Akustik-Daten-Infrastruktur für Smart Cities im Ruhrgebiet.",
      features: ["Echtzeit-Monitoring-Netzwerk", "Digitale Zwillinge", "KI-gestützte Prognosen", "Open Data Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrollY > 50 ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-stone-900/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-stone-700 to-stone-800 rounded-xl flex items-center justify-center border border-stone-600/30">
                <Waves className="w-5 h-5 text-stone-300" />
              </div>
              <div>
                <div className="text-lg font-medium tracking-wide text-stone-100">AMS AUDIO</div>
                <div className="text-[10px] text-stone-500 tracking-[0.25em] uppercase">360° Akustik</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {['Leistungen', 'AcoustiScan', 'Über uns', 'Kontakt'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="link-underline text-stone-500 hover:text-stone-200 transition-colors duration-300 text-sm">{item}</a>
              ))}
              <button className="bg-stone-100 text-neutral-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors duration-300">Anfrage</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <WarmGlowOrbs />
        <SoftWaveBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] -z-10">
            <ConcentricRipples />
          </div>

          <div className="inline-flex items-center gap-3 bg-stone-900/40 backdrop-blur-sm border border-stone-800/50 rounded-full px-5 py-2.5 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" style={{ animationDuration: '3s' }} />
            <span className="text-xs text-stone-500 tracking-wide">MSH Audio · AcoustiScan · Morpheus Partnership</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-10 leading-[1.1] tracking-tight">
            <span className="text-stone-300">Klang.</span>
            <br />
            <span className="text-gradient-warm font-light">Präzision.</span>
            <br />
            <span className="text-stone-300">Harmonie.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Von der Nachhallmessung bis zur Drohnen-Compliance – wir machen Schall sichtbar, messbar und beherrschbar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button className="group bg-stone-100 text-neutral-900 px-10 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 flex items-center gap-3">
              <Play className="w-4 h-4" />
              <span>Jetzt starten</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border border-stone-700 text-stone-400 px-10 py-4 rounded-full font-medium hover:border-stone-500 hover:text-stone-200 transition-all duration-300 flex items-center gap-3">
              <Volume2 className="w-4 h-4" />
              <span>Demo ansehen</span>
            </button>
          </div>

          <ElegantWaveform barCount={40} />

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-stone-700 animate-bounce" style={{ animationDuration: '2.5s' }} />
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="py-16 border-y border-stone-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
            {[{ name: 'MSH Audio', desc: 'Freelance' }, { name: 'AcoustiScan', desc: 'LiDAR App' }, { name: 'Morpheus', desc: 'Partner' }, { name: 'AMS Audio', desc: 'Consulting' }].map((brand, idx) => (
              <div key={idx} className="text-center group cursor-pointer transition-all duration-500 hover:-translate-y-1">
                <div className="text-xl font-light text-stone-600 group-hover:text-stone-300 transition-colors duration-500">{brand.name}</div>
                <div className="text-[10px] text-stone-700 tracking-[0.2em] uppercase mt-1">{brand.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <StatCounter value="15" suffix="+" label="Jahre Erfahrung" />
            <StatCounter value="500" suffix="+" label="Projekte" />
            <StatCounter value="98" suffix="%" label="Erfolgsquote" />
            <StatCounter value="50" suffix="+" label="Partner" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-stone-800/50 rounded-full px-5 py-2 mb-8">
              <Waves className="w-4 h-4 text-stone-500" />
              <span className="text-xs text-stone-500 tracking-wide">360° Akustik-Kompetenz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight text-stone-200">
              Unsere <span className="text-gradient-warm font-light">Leistungen</span>
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
              Von der Live-Beschallung bis zur Smart-City-Integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (<ServiceCard key={idx} {...service} />))}
          </div>
        </div>
      </section>

      {/* AcoustiScan Feature Section */}
      <section id="acoustiscan" className="py-28 relative overflow-hidden">
        <WarmGlowOrbs />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-stone-800/50 rounded-full px-5 py-2 mb-8">
                <Tablet className="w-4 h-4 text-stone-500" />
                <span className="text-xs text-stone-500 tracking-wide">Flagship</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight leading-tight text-stone-200">
                AcoustiScan<br /><span className="text-gradient-warm font-light">LiDAR meets Akustik</span>
              </h2>
              <p className="text-lg text-stone-500 mb-10 leading-relaxed font-light">
                Die erste iPad-App, die LiDAR mit professioneller Raumakustik vereint. 3D-Erfassung und DIN-konforme RT60-Analyse.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[{ icon: Scan, text: 'LiDAR 3D-Scan' }, { icon: BarChart3, text: 'RT60 Analyse' }, { icon: Database, text: 'Material-DB' }, { icon: Shield, text: 'DIN konform' }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-stone-900/30 border border-stone-800/50 rounded-xl p-5 hover:border-stone-700/50 transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-stone-400" />
                    </div>
                    <span className="text-stone-300 font-light">{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="bg-stone-100 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 flex items-center gap-3">
                <span>Mehr erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-stone-900/80 to-neutral-950 border border-stone-800/50 rounded-3xl p-12 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64"><ConcentricRipples /></div>
                </div>
                <div className="text-center relative z-10">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl rotate-6 shadow-2xl" />
                      <div className="absolute inset-0 bg-stone-900 rounded-2xl flex items-center justify-center border border-stone-700/50">
                        <Tablet className="w-12 h-12 text-stone-400" />
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-light text-stone-300 mb-2">iPad Pro</div>
                  <div className="text-stone-600 text-sm font-light">mit LiDAR Scanner</div>
                  <div className="mt-10"><ElegantWaveform barCount={20} /></div>
                  <div className="mt-10 flex justify-center gap-4">
                    {['RT60', 'dB(A)', 'Hz'].map((label, idx) => (
                      <div key={idx} className="bg-stone-800/50 border border-stone-700/30 rounded-lg px-5 py-2">
                        <div className="text-stone-400 text-sm font-light">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-stone-900/50 to-neutral-950 border border-stone-800/50 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <SoftWaveBackground />
            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 border border-stone-700/50 rounded-full px-5 py-2 mb-8">
                  <Target className="w-4 h-4 text-stone-500" />
                  <span className="text-xs text-stone-500 tracking-wide">Vision 2030</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight leading-tight text-stone-200">
                  Acoustics-as-a-Service<br /><span className="text-gradient-warm font-light">Ruhrgebiet</span>
                </h2>
                <p className="text-lg text-stone-500 mb-10 leading-relaxed font-light">
                  Flächendeckendes Akustik-Monitoring für die Metropole Ruhr. Echtzeit-Daten für Stadtplanung und Smart-City-Initiativen.
                </p>
                <div className="space-y-4">
                  {['Integration in digitale Zwillinge', 'KI-gestützte Lärmprognosen', 'Offene Daten-APIs', 'Bürgerpartizipation'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                      <span className="text-stone-400 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[{ value: '5.1M', label: 'Einwohner', icon: Users }, { value: '53', label: 'Städte', icon: Building2 }, { value: '24/7', label: 'Monitoring', icon: Clock }, { value: '∞', label: 'Datenpunkte', icon: Database }].map((stat, idx) => (
                  <div key={idx} className="bg-stone-900/30 border border-stone-800/50 rounded-2xl p-7 text-center hover:border-stone-700/50 transition-all duration-500 group">
                    <stat.icon className="w-7 h-7 text-stone-600 mx-auto mb-4 group-hover:text-stone-400 transition-colors duration-500" />
                    <div className="text-2xl font-light text-stone-300 mb-1">{stat.value}</div>
                    <div className="text-xs text-stone-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holzbau */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-gradient-to-br from-stone-800/30 to-stone-900/50 border border-stone-700/30 rounded-2xl p-7 row-span-2">
                  <TreePine className="w-10 h-10 text-stone-500 mb-5" />
                  <div className="text-4xl font-extralight text-stone-200 mb-2">-35%</div>
                  <div className="text-sm text-stone-500 font-light">CO₂ vs. Beton</div>
                </div>
                <div className="bg-stone-900/30 border border-stone-800/50 rounded-2xl p-6 hover:border-stone-700/50 transition-all duration-500">
                  <Home className="w-7 h-7 text-stone-500 mb-4" />
                  <div className="text-base font-medium text-stone-300">Holz-Hybrid</div>
                  <div className="text-xs text-stone-600 mt-1">CLT + Dämmung</div>
                </div>
                <div className="bg-stone-900/30 border border-stone-800/50 rounded-2xl p-6 hover:border-stone-700/50 transition-all duration-500">
                  <Headphones className="w-7 h-7 text-stone-500 mb-4" />
                  <div className="text-base font-medium text-stone-300">VR/AR</div>
                  <div className="text-xs text-stone-600 mt-1">Akustik erleben</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 border border-stone-800/50 rounded-full px-5 py-2 mb-8">
                <TreePine className="w-4 h-4 text-stone-500" />
                <span className="text-xs text-stone-500 tracking-wide">Zukunft Bauen</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight leading-tight text-stone-200">
                Schallschutz im<br /><span className="text-gradient-warm font-light">Holzbau</span>
              </h2>
              <p className="text-lg text-stone-500 mb-10 leading-relaxed font-light">
                Nachhaltigkeit und Komfort vereint. KI-optimierte Hybridbausysteme und VR-Simulation.
              </p>
              <div className="space-y-4 mb-10">
                {['KI-gestützte Materialkombination', 'Tieffrequenz-Optimierung', 'Immersive VR-Vorschau', 'DIN-zertifizierte Nachweise'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                    <span className="text-stone-400 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <button className="border border-stone-700 text-stone-400 px-8 py-4 rounded-full font-medium hover:border-stone-500 hover:text-stone-200 transition-all duration-500 flex items-center gap-3">
                <span>Positionspapier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="über-uns" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight text-stone-200">
              Das <span className="text-gradient-warm font-light">Team</span>
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light">Erfahrene Akustiker und strategische Berater.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Marc Schneider-Handrup', role: 'Gründer & Lead Engineer', brand: 'MSH Audio', desc: 'Freelance Ton-Ingenieur mit 15+ Jahren Erfahrung.' },
              { name: 'Steffen', role: 'Partner', brand: 'AMS Audio', desc: 'Akustik-Beratung und Geschäftsentwicklung.' },
              { name: 'SiD Consulting', role: 'Strategischer Berater', brand: 'EKS-Methodik', desc: 'Engpasskonzentrierte Strategie für Wachstum.' }
            ].map((member, idx) => (
              <div key={idx} className="bg-stone-900/30 border border-stone-800/50 rounded-2xl p-10 text-center hover:border-stone-700/50 transition-all duration-700 group hover:-translate-y-1">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-stone-700 to-stone-800 rounded-full flex items-center justify-center text-stone-300 text-xl font-light border border-stone-600/30 group-hover:border-stone-500/50 transition-all duration-500">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="text-[10px] text-stone-600 tracking-[0.2em] uppercase mb-3">{member.brand}</div>
                <h3 className="text-lg font-medium text-stone-200 mb-2">{member.name}</h3>
                <div className="text-sm text-stone-600 mb-5">{member.role}</div>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative bg-gradient-to-br from-stone-900/60 to-neutral-950 border border-stone-800/50 rounded-3xl p-14">
            <WarmGlowOrbs />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight text-stone-200">
                Bereit für<br /><span className="text-gradient-warm font-light">perfekten Klang?</span>
              </h2>
              <p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Ob Veranstaltung, Bauprojekt oder Compliance – wir finden die optimale Lösung.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button className="w-full sm:w-auto bg-stone-100 text-neutral-900 px-10 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>Beratung anfragen</span>
                </button>
                <button className="w-full sm:w-auto border border-stone-700 text-stone-400 px-10 py-4 rounded-full font-medium hover:border-stone-500 hover:text-stone-200 transition-all duration-300 flex items-center justify-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>info@ams-audio.com</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-stone-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-14 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-stone-800 rounded-xl flex items-center justify-center border border-stone-600/30">
                  <Waves className="w-5 h-5 text-stone-400" />
                </div>
                <div className="text-base font-medium text-stone-200">AMS Audio</div>
              </div>
              <p className="text-stone-600 text-sm font-light leading-relaxed">360° Akustik-Kompetenz für alle Anwendungen.</p>
            </div>
            <div>
              <div className="text-xs font-medium text-stone-400 mb-5 tracking-wide uppercase">Leistungen</div>
              <ul className="space-y-3 text-stone-600 text-sm font-light">
                {['MSH Audio', 'AcoustiScan', 'Drohnen', 'Bauakustik'].map((item) => (<li key={item} className="hover:text-stone-300 cursor-pointer transition-colors duration-300">{item}</li>))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium text-stone-400 mb-5 tracking-wide uppercase">Ressourcen</div>
              <ul className="space-y-3 text-stone-600 text-sm font-light">
                {['Wissensbasis', 'Downloads', 'Normen', 'Blog'].map((item) => (<li key={item} className="hover:text-stone-300 cursor-pointer transition-colors duration-300">{item}</li>))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium text-stone-400 mb-5 tracking-wide uppercase">Kontakt</div>
              <ul className="space-y-4 text-stone-600 text-sm font-light">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-stone-600" />Ruhrgebiet, NRW</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-stone-600" />info@ams-audio.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-900/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-stone-700 text-sm font-light">© 2025 AMS Audio Group</div>
            <div className="flex items-center gap-8 text-stone-700 text-sm font-light">
              <span className="hover:text-stone-400 cursor-pointer transition-colors duration-300">Impressum</span>
              <span className="hover:text-stone-400 cursor-pointer transition-colors duration-300">Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
