import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Now live: MVAS for fintech & digital banking
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Build modern value-added services on a unified platform
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-xl">
            Launch card issuing, payments, subscriptions, rewards, and merchant services with a single API. Designed for startups and enterprise fintech.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-sm hover:shadow transition">
              Start building
            </button>
            <button className="px-5 py-3 rounded-xl text-white/90 border border-white/20 hover:border-white/40 hover:text-white transition">
              View docs
            </button>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex items-center gap-8 opacity-80">
            <img src="/logos/visa.svg" className="h-6" alt="Visa" />
            <img src="/logos/mastercard.svg" className="h-6" alt="Mastercard" />
            <img src="/logos/shopify.svg" className="h-5" alt="Shopify" />
            <img src="/logos/stripe.svg" className="h-5" alt="Stripe" />
          </div>
        </div>
      </div>
    </section>
  );
}
