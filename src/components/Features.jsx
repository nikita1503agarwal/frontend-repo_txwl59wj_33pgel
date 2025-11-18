import { ShieldCheck, Radar, Cloud, Zap, BarChart3, Lock } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Threat Detection',
    desc: 'Continuously monitor endpoints and networks with anomaly detection and behavioral analytics.'
  },
  {
    icon: Radar,
    title: 'Vulnerability Scanning',
    desc: 'Automated scanning across cloud, containers, and code to find and prioritize risks.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Agentless posture management and real-time misconfiguration alerts across AWS, GCP, and Azure.'
  },
  {
    icon: Zap,
    title: 'Incident Response',
    desc: 'Playbooks and automation streamline triage, containment, and remediation at scale.'
  },
  {
    icon: BarChart3,
    title: 'Risk Reporting',
    desc: 'Executive-ready dashboards and KPIs with audit trails and exportable evidence.'
  },
  {
    icon: Lock,
    title: 'Zero Trust',
    desc: 'Policy-as-code and identity-first controls to enforce least privilege by default.'
  }
]

export default function Features() {
  return (
    <section id="platform" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Unified platform, built for security</h2>
          <p className="mt-3 text-slate-300">Everything you need to secure your cloud footprint with confidence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/30 hover:bg-white/[0.07] transition-all">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
