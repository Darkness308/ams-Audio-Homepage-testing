import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white',
    outline: 'border border-slate-700 hover:border-orange-500 text-white hover:text-orange-500'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
    </button>
  )
}
