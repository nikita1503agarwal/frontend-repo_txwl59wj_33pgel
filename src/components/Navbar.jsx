import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-slate-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">AegisSecure</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#platform">Platform</NavLink>
          <NavLink href="#solutions">Solutions</NavLink>
          <NavLink href="#trust">Trust</NavLink>
          <NavLink href="#resources">Resources</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 rounded-lg text-slate-200/80 hover:text-white transition-colors">Book a demo</a>
          <a href="#trial" className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">Start free trial</a>
        </div>

        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/90">
          <div className="px-6 py-4 space-y-4">
            <div className="flex flex-col gap-4">
              <NavLink href="#platform">Platform</NavLink>
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#trust">Trust</NavLink>
              <NavLink href="#resources">Resources</NavLink>
            </div>
            <div className="pt-4 flex flex-col gap-3">
              <a href="#demo" className="px-4 py-2 rounded-lg text-center bg-white/5 text-slate-200 hover:bg-white/10 transition-colors">Book a demo</a>
              <a href="#trial" className="px-4 py-2 rounded-lg text-center bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">Start free trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
