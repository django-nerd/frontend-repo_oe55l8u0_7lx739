export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to launch your MVAS?</h3>
              <p className="mt-3 text-white/70">Talk to our solutions team to scope your use case and get started with a sandbox.</p>
            </div>
            <form className="grid sm:grid-cols-2 gap-3">
              <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
              <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Company" />
              <button className="sm:col-span-2 mt-1 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-sm hover:shadow transition">Request a demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
