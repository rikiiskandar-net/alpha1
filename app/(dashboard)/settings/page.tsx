import Card from '@/components/ui/card'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { User, Bell, Shield, Globe } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Settings</h1>
        <p className="text-slate-400 mt-1">Kelola pengaturan akun dan aplikasi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Settings */}
        <Card className="p-6 lg:col-span-1">
          <nav className="space-y-1">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Shield, label: 'Security', active: false },
              { icon: Globe, label: 'Language', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </Card>

        {/* Settings Form */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-100 mb-6">Profile Settings</h2>

          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black text-2xl font-bold">
                A
              </div>
              <div>
                <Button variant="secondary" size="sm">Change Avatar</Button>
                <p className="text-xs text-slate-500 mt-2">JPG, GIF atau PNG. Maksimal 2MB.</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Nama Lengkap" defaultValue="Admin" />
              <Input label="Email" type="email" defaultValue="admin@alpha1.dev" />
              <Input label="Phone" type="tel" defaultValue="+62 812 3456 7890" />
              <Input label="Role" defaultValue="Administrator" disabled />
            </div>

            <div className="flex justify-end">
              <Button>Simpan Perubahan</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}