import Link from 'next/link'
import { ShieldCheck, Cpu, Database, Cloud, Zap, Lock, ArrowRight, Code2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Top Security & Navigation Bar */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20">
              <ShieldCheck className="w-6 h-6 text-black" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Alpha1 OS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Secure 2026 Stack Active
            </span>
            <Link
              href="#get-started"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs mb-8 shadow-inner">
          <Zap className="w-3.5 h-3.5" />
          <span>Powered by Termux, Next.js, Supabase & Vercel</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Next-Gen Web Architecture for <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Alpha1 Project</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl font-light">
          Dibangun langsung dari mobile via Termux dengan standar keamanan Zero Trust 2026, integrasi Supabase RLS, dan Vercel Edge Deployment.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#features"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
          >
            <span>Jelajahi Teknologi</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
          >
            <Database className="w-4 h-4 text-cyan-400" />
            <span>Supabase Console</span>
          </a>
        </div>

        {/* Feature Grid */}
        <div id="features" className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-200">Zero Trust Security</h3>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Dilengkapi dengan Content Security Policy (CSP), Zod validation ketat, dan enkripsi data penuh tingkat enterprise.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-200">Supabase & RLS</h3>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Database relasional real-time dengan Row Level Security (RLS) terintegrasi via Server-Side Auth SSR.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cloud className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-200">Vercel Edge Ready</h3>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Optimasi performa tinggi dengan Next.js App Router yang siap dideploy instan ke Vercel Edge Network.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Alpha1 Project. Crafted with ⚡ in Termux & Next.js.</p>
      </footer>
    </div>
  )
}
