import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-slate-900 border border-slate-800 rounded-xl p-6 ${hover ? 'hover:border-orange-500 transition-colors duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  iconColor?: string
}

export function IconCard({ icon: Icon, title, description, delay = 0, iconColor = 'text-orange-500' }: IconCardProps) {
  return (
    <Card delay={delay}>
      <Icon className={`${iconColor} mb-4`} size={40} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Card>
  )
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, features, delay = 0 }: FeatureCardProps) {
  return (
    <Card delay={delay}>
      <Icon className="text-orange-500 mb-4" size={40} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-slate-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}

interface NumberedCardProps {
  number: number
  icon: LucideIcon
  title: string
  description: string
  keyPoints: string[]
  delay?: number
}

export function NumberedCard({ number, icon: Icon, title, description, keyPoints, delay = 0 }: NumberedCardProps) {
  return (
    <Card delay={delay} className="relative">
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-lg font-bold">
        {number}
      </div>
      <div className="pt-4">
        <Icon className="text-orange-500 mb-4" size={36} />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>
        <ul className="space-y-2">
          {keyPoints.map((point, index) => (
            <li key={index} className="text-sm text-slate-500 flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
