import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import Card from '@/components/ui/card'

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: LucideIcon
  color: 'cyan' | 'green' | 'blue' | 'purple'
}

const colorMap = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
}

export default function StatCard({ title, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="p-6 hover:border-slate-700 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="text-3xl font-bold text-slate-100 mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {change >= 0 ? (
              <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
            )}
            <span className={`text-sm ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {change >= 0 ? '+' : ''}{change}%
            </span>
            <span className="text-sm text-slate-500 ml-1">vs bulan lalu</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl border ${colorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  )
}