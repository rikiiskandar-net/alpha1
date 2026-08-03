import Card from '@/components/ui/card'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import { Plus, Search, MoreVertical } from 'lucide-react'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joined: '1 Jan 2026' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', joined: '15 Feb 2026' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'pending', joined: '3 Mar 2026' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'inactive', joined: '20 Mar 2026' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin', status: 'active', joined: '5 Apr 2026' },
  { id: 6, name: 'Diana Evans', email: 'diana@example.com', role: 'Viewer', status: 'active', joined: '12 Apr 2026' },
]

const statusVariant = {
  active: 'success' as const,
  inactive: 'danger' as const,
  pending: 'warning' as const,
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Users</h1>
          <p className="text-slate-400 mt-1">Kelola semua pengguna sistem</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Tambah User
        </Button>
      </div>

      <Card className="p-6">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari user..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">User</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Joined</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-400"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black text-xs font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-400">{user.role}</td>
                  <td className="py-3 px-4">
                    <Badge variant={statusVariant[user.status]}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-400">{user.joined}</td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-1 text-slate-500 hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-800/50">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}