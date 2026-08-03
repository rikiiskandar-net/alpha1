'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User, ShieldCheck } from 'lucide-react'
import { registerSchema, type RegisterInput } from '@/lib/validations/auth'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = RegisterInput ? useState<RegisterInput>({
    fullName: '',
    email: '',
    password: '',
  }) : useState({ fullName: '', email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const result = registerSchema.safeParse(form)
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Registrasi gagal')
        return
      }

      setSuccess('Registrasi berhasil! Silakan cek email untuk verifikasi akun.')
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-3 mb-8">
        <div className="p-2.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20">
          <ShieldCheck className="w-7 h-7 text-black" />
        </div>
        <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Alpha1 OS
        </span>
      </div>

      <h1 className="text-xl font-semibold text-slate-100 text-center mb-1">Buat Akun</h1>
      <p className="text-sm text-slate-400 text-center mb-6">Daftar untuk mengakses dashboard</p>

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Success */}
      {success && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nama Lengkap"
          type="text"
          placeholder="Masukkan nama lengkap"
          icon={<User className="w-4 h-4" />}
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        <Input
          label="Email"
          type="email"
          placeholder="admin@alpha1.dev"
          icon={<Mail className="w-4 h-4" />}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Minimal 8 karakter"
          icon={<Lock className="w-4 h-4" />}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button type="submit" loading={loading} className="w-full">
          Daftar
        </Button>
      </form>

      <p className="text-sm text-slate-400 text-center mt-6">
        Sudah punya akun?{' '}
        <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Masuk
        </Link>
      </p>
    </div>
  )
}