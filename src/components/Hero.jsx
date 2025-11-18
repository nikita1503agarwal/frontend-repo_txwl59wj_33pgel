import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-slate-900/0 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Enterprise-grade security
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Cybersecurity SaaS for modern cloud teams
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Detect threats, secure your cloud, and automate incident response with a unified platform built for speed, scale, and trust.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="px-5 py-3 rounded-lg bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">Book a demo</a>
              <a href="#trial" className="px-5 py-3 rounded-lg bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors">Start free trial</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-400">
              <div className="text-sm">SOC 2 Type II</div>
              <div className="h-1 w-1 rounded-full bg-slate-700" />
              <div className="text-sm">ISO 27001</div>
              <div className="h-1 w-1 rounded-full bg-slate-700" />
              <div className="text-sm">GDPR Ready</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[440px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-900/40 ring-1 ring-white/5">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
