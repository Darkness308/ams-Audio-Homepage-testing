import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  description?: string
  delay?: number
}

export function StatCard({ value, label, description, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{value}</div>
      <div className="text-white font-medium mb-1">{label}</div>
      {description && (
        <div className="text-slate-500 text-sm">{description}</div>
      )}
    </motion.div>
  )
}

interface StatGridProps {
  stats: Array<{
    value: string
    label: string
    description?: string
  }>
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          description={stat.description}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}
