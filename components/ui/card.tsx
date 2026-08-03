import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient'
}

export default function Card({ className = '', variant = 'default', children, ...props }: CardProps) {
  const variants = {
    default: 'bg-slate-900/60 border border-slate-800',
    glass: 'bg-slate-900/40 backdrop-blur-xl border border-slate-800/50',
    gradient: 'bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50'
  }

  return (
    <div
      className={`rounded-2xl ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}