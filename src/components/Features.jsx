import { Shield, CreditCard, Wallet, Globe, Cloud, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: CreditCard, title: 'Card issuing', desc: 'Virtual & physical cards, tokenization, 3D Secure, and spend controls.' },
    { icon: Wallet, title: 'Payments', desc: 'Accept, store, and route payments with smart retries and reconciliation.' },
    { icon: Shield, title: 'Compliance', desc: 'KYC/KYB, AML screening, and risk scoring built-in.' },
    { icon: Globe, title: 'Global reach', desc: 'Multi-currency accounts, FX, and cross-border payouts.' },
    { icon: Cloud, title: 'Unified API', desc: 'One modern API for all MVAS capabilities, with clear docs.' },
    { icon: Zap, title: 'Scalable infra', desc: 'Bank-grade reliability, observability, and SLAs.' },
  ]

  return (
    <section id="solutions" className="relative bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship faster</h2>
          <p className="mt-4 text-white/70">Assemble MVAS building blocks to fit your business, from issuing to merchant services.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
              <button className="mt-4 text-sm text-white/80 hover:text-white">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
