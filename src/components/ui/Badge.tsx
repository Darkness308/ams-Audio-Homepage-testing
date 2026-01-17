import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const variants = {
    default: 'bg-slate-700 text-slate-300',
    success: 'bg-green-900/50 text-green-400 border border-green-800',
    warning: 'bg-yellow-900/50 text-yellow-400 border border-yellow-800',
    danger: 'bg-red-900/50 text-red-400 border border-red-800',
    info: 'bg-blue-900/50 text-blue-400 border border-blue-800'
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}

interface SeverityBadgeProps {
  severity: 'critical' | 'high' | 'medium' | 'low'
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const config = {
    critical: { label: 'Kritisch', variant: 'danger' as const },
    high: { label: 'Hoch', variant: 'warning' as const },
    medium: { label: 'Mittel', variant: 'info' as const },
    low: { label: 'Niedrig', variant: 'success' as const }
  }

  const { label, variant } = config[severity]

  return <Badge variant={variant}>{label}</Badge>
}
