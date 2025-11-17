import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur border border-white/50 shadow-sm flex items-center justify-center">
            <img src="/flame-icon.svg" alt="MVAS" className="w-6 h-6" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight text-lg">MVAS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 rounded-xl text-white/90 border border-white/20 hover:border-white/40 hover:text-white transition-colors">Sign in</button>
          <button className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-sm hover:shadow transition">Get started</button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white/90">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
