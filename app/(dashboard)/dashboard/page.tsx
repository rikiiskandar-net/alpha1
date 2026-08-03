import { Users, DollarSign, ShoppingCart, Activity } from 'lucide-react'
import StatCard from '@/components/dashboard/stat-card'
import Card from '@/components/ui/card'
import DataTable from '@/components/dashboard/data-table'
import Chart from '@/components/dashboard/chart'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Dashboard</h1>
        <p className="text-slate-400 mt-1">Selamat datang di panel admin Alpha1</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,234" change={12} icon={Users} color="cyan" />
        <StatCard title="Revenue" value="$45,678" change={8} icon={DollarSign} color="green" />
        <StatCard title="Orders" value="890" change={-3} icon={ShoppingCart} color="blue" />
        <StatCard title="Active Now" value="56" change={24} icon={Activity} color="purple" />
      </div>

      {/* Chart & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-100 mb-4">Analytics</h2>
          <Chart />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-100 mb-4">Recent Users</h2>
          <DataTable />
        </Card>
      </div>
    </div>
  )
}