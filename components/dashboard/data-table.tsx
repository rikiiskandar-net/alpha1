import Badge from '@/components/ui/badge'

interface User {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  joined: string
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joined: '1 Jan 2026' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joined: '15 Feb 2026' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'pending', joined: '3 Mar 2026' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'inactive', joined: '20 Mar 2026' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'active', joined: '5 Apr 2026' },
]

const statusVariant = {
  active: 'success' as const,
  inactive: 'danger' as const,
  pending: 'warning' as const,
}

export default function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Name</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Email</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Joined</th>
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
                  <span className="text-sm text-slate-200">{user.name}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-slate-400">{user.email}</td>
              <td className="py-3 px-4">
                <Badge variant={statusVariant[user.status]}>
                  {user.status}
                </Badge>
              </td>
              <td className="py-3 px-4 text-sm text-slate-400">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}