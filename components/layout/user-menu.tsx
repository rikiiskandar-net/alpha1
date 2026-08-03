'use client'

import { useState } from 'react'
import { ChevronDown, LogOut, User, Settings } from 'lucide-react'

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black text-sm font-bold">
          A
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-50 py-2">
            <div className="px-4 py-2 border-b border-slate-800">
              <p className="text-sm font-medium text-slate-200">Admin</p>
              <p className="text-xs text-slate-500">admin@alpha1.dev</p>
            </div>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <div className="border-t border-slate-800 mt-2 pt-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-slate-800/50 transition-colors">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}