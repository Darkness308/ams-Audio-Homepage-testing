import { Wallet, TrendingUp, Target, PiggyBank, Users, Briefcase, Megaphone, Building } from 'lucide-react'

export const financialsContent = {
  title: 'Finanzplanung & Investment',
  subtitle: 'Wirtschaftliche Tragfähigkeit und Rentabilität',
  description: 'Eine fundierte Finanzplanung, die die Tragfähigkeit des Geschäftsmodells belegt und das Potenzial für Investoren aufzeigt.'
}

export const capitalRequirement = {
  total: '500.000 €',
  purpose: 'Seed-Finanzierung für Gründungsphase und Markteintritt',
  allocation: [
    {
      category: 'Entwicklung & Aufbau Messtechnik',
      amount: 150000,
      percentage: 30,
      icon: Briefcase,
      description: 'UAS-NoiseCheck System'
    },
    {
      category: 'Personal- & Betriebskosten',
      amount: 200000,
      percentage: 40,
      icon: Users,
      description: 'Erstes Jahr'
    },
    {
      category: 'Marketing & Vertrieb',
      amount: 75000,
      percentage: 15,
      icon: Megaphone,
      description: 'Go-to-Market'
    },
    {
      category: 'Miete (Büro & Testgelände)',
      amount: 50000,
      percentage: 10,
      icon: Building,
      description: 'Infrastruktur'
    },
    {
      category: 'Liquiditätsreserve',
      amount: 25000,
      percentage: 5,
      icon: PiggyBank,
      description: 'Sicherheit'
    }
  ]
}

export const revenueProjection = {
  years: ['Jahr 1', 'Jahr 2', 'Jahr 3'],
  packages: [
    {
      name: 'Zertifizierung Basic',
      pricePerUnit: 15000,
      units: [4, 8, 12],
      revenue: [60000, 120000, 180000]
    },
    {
      name: 'AaaS Professional',
      pricePerUnit: 25000,
      units: [1, 4, 10],
      revenue: [25000, 100000, 250000]
    },
    {
      name: 'AaaS Enterprise',
      pricePerUnit: 60000,
      units: [0, 1, 5],
      revenue: [0, 60000, 300000]
    }
  ],
  totalRevenue: [85000, 280000, 730000]
}

export const profitLoss = {
  years: ['Jahr 1', 'Jahr 2', 'Jahr 3'],
  rows: [
    { label: 'Umsatzerlöse', values: [85, 280, 730], type: 'revenue' },
    { label: 'Materialaufwand', values: [-10, -25, -60], type: 'cost' },
    { label: 'Personalaufwand', values: [-150, -250, -350], type: 'cost' },
    { label: 'Sonstige Aufwendungen', values: [-80, -100, -150], type: 'cost' },
    { label: 'Abschreibungen', values: [-30, -30, -30], type: 'cost' },
    { label: 'EBIT', values: [-185, -125, 140], type: 'subtotal' },
    { label: 'Zinsen & Steuern', values: [-5, -10, -40], type: 'cost' },
    { label: 'Jahresüberschuss', values: [-190, -135, 100], type: 'total' }
  ]
}

export const keyMetrics = {
  breakEvenMonth: 30,
  breakEvenDescription: 'Gewinnschwelle im 3. Geschäftsjahr erreicht',
  roiCalculation: {
    exitValuation: 10000000,
    investment: 500000,
    roi: 1900,
    multiple: '10x',
    basis: 'Konservatives Multiple auf prognostizierten Jahresüberschuss von 1 Mio. € nach 5 Jahren'
  },
  monthlyBreakEven: '3-4 AaaS Professional Kunden'
}

export const investorHighlights = [
  {
    icon: TrendingUp,
    metric: '1.900%',
    label: 'Potenzieller ROI',
    description: 'Bei Exit nach 5 Jahren'
  },
  {
    icon: Target,
    metric: 'Monat 30',
    label: 'Break-Even',
    description: 'Gewinnschwelle erreicht'
  },
  {
    icon: Wallet,
    metric: '730k €',
    label: 'Umsatz Jahr 3',
    description: 'Prognostiziert'
  },
  {
    icon: PiggyBank,
    metric: '500k €',
    label: 'Seed-Finanzierung',
    description: 'Kapitalbedarf'
  }
]

export const fundingUse = {
  title: 'Mittelverwendung',
  description: 'Transparente Allokation der Seed-Finanzierung für maximale Wertschöpfung'
}
