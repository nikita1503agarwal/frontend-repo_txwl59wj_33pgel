import { Shield, CheckCircle2, Server, KeyRound } from 'lucide-react'

export default function Trust() {
  return (
    <section id="trust" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <Shield className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-medium">Security & Compliance</h3>
            </div>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC 2 Type II, ISO 27001</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Data encryption in transit and at rest</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> SSO, SAML, SCIM provisioning</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Granular RBAC and audit logs</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <Server className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-medium">Reliability</h3>
            </div>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 99.99% uptime SLA</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Global edge network</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Automated backups and disaster recovery</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Real-time status and incident comms</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 ring-1 ring-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-medium">Ready to see it in action?</h3>
              <p className="text-slate-300">Book a live demo with our security engineers or start a free 14-day trial.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#demo" className="px-5 py-3 rounded-lg bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">Book a demo</a>
              <a href="#trial" className="px-5 py-3 rounded-lg bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors">Start free trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
