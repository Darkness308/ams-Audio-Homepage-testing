import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-slate-900' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-600' : 'text-slate-400'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
