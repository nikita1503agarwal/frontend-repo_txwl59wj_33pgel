import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trust from './components/Trust'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      {/* Subtle grid/pattern background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.12),transparent),radial-gradient(800px_400px_at_90%_-10%,rgba(59,130,246,0.08),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Trust />
      </main>
      <Footer />
    </div>
  )
}

export default App
