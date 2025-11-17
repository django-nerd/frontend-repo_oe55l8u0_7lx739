import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-white/10 text-white/60">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="MVAS" className="w-6 h-6" />
            <span>MVAS Platform</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
