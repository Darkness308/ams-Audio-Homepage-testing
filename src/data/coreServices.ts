// ============================================
// AMS AUDIO CORE SERVICES
// Ursprüngliche Geschäftsidee + MSH-audio Integration
// ============================================

export const coreServicesContent = {
  title: 'Unsere Kernleistungen',
  subtitle: 'Präzise Akustik-Messung trifft 3D-Raumerfassung',
  description: 'AMS Audio kombiniert professionelle Raumakustik-Messung nach DIN-Normen mit modernster LiDAR-Technologie für rechtssichere Berichte und präzise 3D-Dokumentation.'
}

// ============================================
// RT60 NACHHALLMESSUNG
// ============================================

export const rt60Service = {
  id: 'rt60-measurement',
  title: 'RT60 Nachhallmessung',
  subtitle: 'Rechtssichere Berichte nach DIN EN ISO 3382-2',
  description: 'Professionelle Messung der Nachhallzeit mit kalibrierten Klasse-1-Mikrofonen und normgerechter Dokumentation.',

  standards: [
    {
      id: 'din-3382-2',
      name: 'DIN EN ISO 3382-2',
      description: 'Messung von Parametern der Raumakustik – Nachhallzeit in gewöhnlichen Räumen',
      requirements: [
        'Standardisiertes Messverfahren',
        'Definierte Messpositionen',
        'Reproduzierbare Ergebnisse',
        'Normgerechter Prüfbericht'
      ]
    },
    {
      id: 'iec-61672',
      name: 'IEC 61672-1',
      description: 'Anforderungen an Schallpegelmesser',
      requirements: [
        'Klasse 1 Genauigkeit',
        'Frequenzbereich 10Hz - 20kHz',
        'Kalibrierte Messmikrofone',
        'Rückführbare Messergebnisse'
      ]
    }
  ],

  accuracyLevels: [
    {
      level: 'Kurzverfahren',
      positions: '1 Sender, 2 Mikrofon-Positionen',
      use: 'Schnelle Beurteilung der Raumabsorption',
      bands: 'Oktavbänder'
    },
    {
      level: 'Standardverfahren',
      positions: '2 Sender, mehrere Mikrofon-Positionen',
      use: 'Überprüfung gegen Spezifikationen',
      bands: 'Oktav-/Terzbandbänder'
    },
    {
      level: 'Präzisionsverfahren',
      positions: 'Mehrere Sender, viele Mikrofon-Positionen',
      use: 'Detaillierte Raumcharakterisierung',
      bands: 'Terzbänder'
    }
  ],

  deliverables: [
    'Prüfbericht nach DIN EN ISO 3382-2',
    'Frequenzabhängige RT60-Werte (125Hz - 4kHz)',
    'EDT, T20, T30 Auswertung',
    'Grafische Darstellung der Nachhallkurven',
    'Bewertung nach VDI 2569 / ASR A3.7'
  ]
}

// ============================================
// LIDAR 3D RAUMSCAN
// ============================================

export const lidarService = {
  id: 'lidar-scan',
  title: 'LiDAR 3D Raumscan',
  subtitle: '3D-Punktwolken mit iPad Pro',
  description: 'Hochpräzise Erfassung der Raumgeometrie mittels LiDAR-Technologie für akustische Simulationen und Dokumentation.',

  technology: {
    device: 'iPad Pro mit LiDAR-Scanner',
    accuracy: '±1-2 cm Genauigkeit',
    range: 'Bis zu 5 Meter Reichweite',
    speed: 'Millionen Punkte pro Sekunde',
    api: 'Apple RoomPlan API (iOS 16+)'
  },

  outputFormats: [
    {
      format: '3D Punktwolke',
      extensions: ['.ply', '.xyz', '.las'],
      use: 'CAD-Import, Akustik-Simulation'
    },
    {
      format: '3D Mesh',
      extensions: ['.obj', '.fbx', '.usdz'],
      use: 'Visualisierung, BIM-Integration'
    },
    {
      format: 'Grundriss',
      extensions: ['.pdf', '.dwg', '.dxf'],
      use: 'Planung, Dokumentation'
    }
  ],

  workflow: [
    {
      step: 1,
      name: 'Raumscan',
      duration: '5-15 Minuten',
      description: 'Systematische Erfassung aller Oberflächen'
    },
    {
      step: 2,
      name: 'Punktwolken-Export',
      duration: '2-5 Minuten',
      description: 'Generierung der 3D-Daten'
    },
    {
      step: 3,
      name: 'CAD-Integration',
      duration: 'Variabel',
      description: 'Import in Simulations-Software'
    },
    {
      step: 4,
      name: 'Akustik-Simulation',
      duration: 'Projektabhängig',
      description: 'Berechnung von RT60, STI, etc.'
    }
  ],

  applications: [
    'Raumakustik-Planung',
    'Beschallungsplanung',
    'Bestandsdokumentation',
    'Schallschutznachweis',
    'Architektur & Innenarchitektur'
  ]
}

// ============================================
// KLASSE 1 MESSMIKROFON
// ============================================

export const measurementEquipment = {
  id: 'measurement-equipment',
  title: 'Professionelle Messtechnik',
  subtitle: 'Klasse 1 USB-Messmikrofone nach IEC 61672',

  microphones: [
    {
      type: 'Klasse 1 Präzisionsmikrofon',
      standard: 'IEC 61672-1',
      frequency: '20 Hz - 20 kHz',
      dynamic: '20 dBA - 130 dB',
      connection: 'USB 3.0',
      calibration: 'Rückführbar kalibriert'
    }
  ],

  advantages: [
    'Plug & Play über USB',
    'Keine externe Stromversorgung',
    'Werkskalibrierung inklusive',
    'Rechtssicher nach DIN/IEC',
    'Direkte Software-Integration'
  ],

  software: [
    'REW (Room EQ Wizard)',
    'EASERA',
    'DIRAC',
    'Smaart',
    'Eigenentwicklung AMS Audio'
  ]
}

// ============================================
// KLATSCHTEST & IMPULSANTWORT
// ============================================

export const impulseResponse = {
  id: 'impulse-response',
  title: 'Impulsantwort-Messung',
  subtitle: 'Vom Klatschtest zur professionellen Analyse',

  methods: [
    {
      name: 'Klatschtest (Quick Check)',
      description: 'Schnelle Vor-Ort-Einschätzung der Raumakustik',
      accuracy: 'Orientierend',
      equipment: 'iPad/iPhone mit App',
      use: 'Erstbegehung, Grobe Einschätzung'
    },
    {
      name: 'Swept Sine (Professionell)',
      description: 'Logarithmischer Sinussweep für präzise Impulsantwort',
      accuracy: 'Hoch (T20/T30)',
      equipment: 'Dodekaeder-Lautsprecher + Klasse 1 Mikrofon',
      use: 'Normgerechte Messung'
    },
    {
      name: 'MLS (Maximum Length Sequence)',
      description: 'Pseudozufalls-Rauschsignal für Impulsantwort',
      accuracy: 'Hoch',
      equipment: 'Professionelles Setup',
      use: 'Störgeräuschunterdrückung'
    }
  ],

  derivedParameters: [
    { name: 'RT60', description: 'Nachhallzeit (60 dB Abfall)' },
    { name: 'EDT', description: 'Early Decay Time (früher Abfall)' },
    { name: 'C50/C80', description: 'Klarheitsmaß (Sprache/Musik)' },
    { name: 'D50', description: 'Deutlichkeitsgrad' },
    { name: 'STI/STIPA', description: 'Sprachverständlichkeitsindex' },
    { name: 'G', description: 'Stärkemaß' }
  ]
}

// ============================================
// MSH-AUDIO SERVICES (Veranstaltungstechnik)
// ============================================

export const eventServices = {
  id: 'event-services',
  title: 'Veranstaltungstechnik',
  subtitle: 'Beschallung & Sound Design für Events',
  heritage: 'Aufbauend auf der Expertise von MSH-audio',

  services: [
    {
      id: 'sound-reinforcement',
      name: 'Beschallungsplanung',
      description: 'Konzeption und Umsetzung von PA-Systemen',
      examples: ['Konferenzen', 'Konzerte', 'Open-Air Events', 'Messen']
    },
    {
      id: 'sound-design',
      name: 'Sound Design',
      description: 'Akustische Gestaltung für Theater und Events',
      examples: ['Musicals', 'Operetten', 'Theater', 'Firmenpräsentationen']
    },
    {
      id: 'multilingual',
      name: 'Mehrsprachige Events',
      description: 'Simultandolmetschen und Übertragungstechnik',
      examples: ['IOC Sessions', 'Internationale Konferenzen', 'EU-Events']
    },
    {
      id: 'broadcast',
      name: 'Broadcast Audio',
      description: 'Audio für TV und Streaming',
      examples: ['Eurovision Song Contest', 'Sportübertragungen', 'Live-Streaming']
    }
  ],

  references: [
    {
      event: 'Olympische Winterspiele PyeongChang 2018',
      role: 'IOC Sessions Beschallung',
      highlight: 'Simultanübersetzung in 6 Sprachen'
    },
    {
      event: 'Eurovision Song Contest 2011',
      role: 'Tontechnik',
      location: 'Düsseldorf'
    },
    {
      event: 'Leichtathletik-EM Zürich 2014',
      role: 'Audio-Team',
      award: 'Xaver Award für Best Supplier Services'
    }
  ]
}

// ============================================
// COMBINED SERVICE PACKAGES
// ============================================

export const servicePackages = [
  {
    id: 'quick-check',
    name: 'Quick Check',
    price: 'Ab 290€',
    description: 'Schnelle akustische Einschätzung vor Ort',
    includes: [
      'Klatschtest mit App',
      'LiDAR-Grundriss (iPad Pro)',
      'Orientierender RT60-Wert',
      'Mündliche Einschätzung',
      'Kurzbericht (1 Seite)'
    ],
    turnaround: '1 Tag',
    suitable: ['Erstbegehung', 'Machbarkeitsprüfung', 'Budgetplanung']
  },
  {
    id: 'standard',
    name: 'Standard Messung',
    price: 'Ab 890€',
    description: 'Normgerechte RT60-Messung mit Prüfbericht',
    includes: [
      'RT60-Messung nach DIN EN ISO 3382-2',
      'Klasse 1 Messmikrofon',
      'LiDAR 3D-Raumscan',
      '3D-Punktwolke Export',
      'Prüfbericht (rechtssicher)',
      'Grafische Auswertung'
    ],
    turnaround: '3-5 Tage',
    suitable: ['Bauabnahme', 'Sanierungsplanung', 'Schallschutznachweis']
  },
  {
    id: 'premium',
    name: 'Premium Analyse',
    price: 'Ab 1.890€',
    description: 'Vollständige raumakustische Analyse mit Simulation',
    includes: [
      'Alles aus Standard',
      'Erweiterte Parameter (EDT, C50, STI)',
      'Akustik-Simulation',
      'Optimierungsvorschläge',
      'Maßnahmenkatalog',
      'Nachkontrolle inklusive'
    ],
    turnaround: '7-10 Tage',
    suitable: ['Konferenzräume', 'Studios', 'Veranstaltungsräume']
  }
]

// ============================================
// UNIQUE VALUE PROPOSITION
// ============================================

export const uniqueValueProposition = {
  title: 'Einzigartige Kombination',
  subtitle: 'LiDAR + Akustik = Vollständige Raumdokumentation',

  traditional: {
    title: 'Traditionelle Messung',
    problems: [
      'Nur akustische Daten',
      'Keine Raumgeometrie',
      'Manuelle Dokumentation',
      'Zeitaufwändige Nachbearbeitung'
    ]
  },

  amsApproach: {
    title: 'AMS Audio Ansatz',
    solutions: [
      'Akustik + 3D-Geometrie kombiniert',
      'Automatische Raumerfassung',
      'CAD-fähige Punktwolken',
      'Sofortige Simulation möglich'
    ]
  },

  keyBenefit: 'Ein Termin. Alle Daten. Rechtssicher dokumentiert.'
}
