import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const bgY = useTransform(scrollY, [0, 2000], [0, 50])

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { value: "38M+", label: "Views on original" },
    { value: "69K+", label: "Likes on viral post" },
    { value: "740K", label: "Comedy video views" },
    { value: "5+", label: "Days to go viral" }
  ]

  const timeline = [
    { date: "April 1, 2026", event: "TikTok @heartzz.kyra posts 'Proof women don't care about looks' with 7×7=49 slideshow", highlight: true },
    { date: "April 3, 2026", event: "@dilvexed posts 'why is 7×7=49 so fucking hot' - gains 69K+ likes in 3 days" },
    { date: "April 5, 2026", event: "Reddit r/PeterExplainsTheJoke asks 'Why do girls find 7×7=49 attractive?'" },
    { date: "April 5, 2026", event: "@ryanversace posts 'equation steals your girl' comedy - 740K views", highlight: true },
    { date: "April 6, 2026", event: "@trevorlarcom posts 'caught her looking at 7×7=49' - 210K views" },
    { date: "NOW", event: "7×7=49. The equation wins. Always has." }
  ]

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-[#e8e6e3] font-sans selection:bg-white/10">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-[9999] bg-[#0d0b0a]"
      >
        <div className="absolute inset-0">
          <img 
            src="/7x7/image.png" 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-[#0d0b0a]/80 to-[#0d0b0a]" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl md:text-9xl font-bold tracking-wider text-white/90"
            >
              7×7=49
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-xs text-white/30 mt-4 tracking-[0.3em] uppercase"
          >
            Loading
          </motion.p>
        </div>
      </motion.div>

      <motion.div style={{ y: bgY }} className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none">
        <img src="/7x7/Screenshot 2026-04-17 234716.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 bg-gradient-to-b from-[#0d0b0a]/90 to-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-4 group"
          >
            <span className="text-2xl font-bold text-white tracking-wide group-hover:text-white/80 transition-colors">$49</span>
            <span className="text-xs text-white/30 px-2.5 py-1 bg-white/5 rounded-md font-medium tracking-wider group-hover:bg-white/10 transition-colors">SOL</span>
          </div>
          
          <nav className="flex items-center gap-1">
            {[
              { label: 'Numbers', id: 'numbers' },
              { label: 'Timeline', id: 'timeline' },
              { label: 'X', url: 'https://x.com/49onchain' }
            ].map((item, i) => (
              item.url ? (
                <a 
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white/40 hover:text-white transition-all hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </a>
              ) : (
                <button 
                  key={i}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm text-white/40 hover:text-white transition-all hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0">
            <img 
              src="/7x7/Screenshot 2026-04-17 234716.png" 
              alt="" 
              className="w-full h-full object-cover opacity-25 blur-[0.5px] scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b0a]/50 via-[#0d0b0a]/30 to-[#0d0b0a]" />
        </motion.div>

        <div className="absolute inset-0 z-0 opacity-30">
          <video 
            ref={videoRef}
            src="/7x7/tiktok_aascinema_7628095588139126049.mp4"
            className="w-full h-full object-cover mix-blend-overlay grayscale"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b0a]/60 via-transparent to-[#0d0b0a]" />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <img src="/7x7/Screenshot 2026-04-17 234852.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl -mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[7rem] lg:text-[9rem] font-bold tracking-tighter text-white mb-2"
          >
            7×7=49
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/40 font-light tracking-wide"
          >
            The equation that will steal your girl
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/8">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              <span className="text-sm text-white/50 font-mono tracking-wide">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/20 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      <section id="numbers" className="py-48 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-white/30 text-center mb-20 tracking-[0.3em] uppercase"
          >
            The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center group"
              >
                <p className="text-5xl md:text-6xl font-light text-white/80 group-hover:text-white transition-colors mb-3">{stat.value}</p>
                <p className="text-sm text-white/30">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden"
          >
            <img src="/7x7/image.png" alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-transparent to-[#0d0b0a]/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-6xl md:text-7xl font-light text-white/10 tracking-[0.5em]">7×7=49</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="timeline" className="py-48 px-6 bg-[#0a0908]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-white/30 text-center mb-20 tracking-[0.3em] uppercase"
          >
            Timeline
          </motion.h2>

          <div className="relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex gap-8 py-6 ${item.highlight ? 'pl-8 border-l-2 border-white/20' : 'pl-12'}`}
              >
                <div className="w-20 text-sm text-white/30 shrink-0">{item.date}</div>
                <div className={`text-sm leading-relaxed ${item.highlight ? 'text-white/80' : 'text-white/50'}`}>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-7xl md:text-9xl font-bold tracking-tight text-white mb-8">7×7=49</p>
            <p className="text-xl text-white/30 mb-16">Tokenized on Solana</p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative inline-block"
            >
              <video 
                src="/7x7/tiktok_aascinema_7628095588139126049.mp4"
                className="w-full max-w-lg mx-auto rounded-2xl opacity-60 hover:opacity-80 transition-opacity"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>

            <a 
              href="https://www.tiktok.com/search?q=7x7%3D49&t=1776460964757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-12 text-sm text-white/30 hover:text-white/50 transition-colors underline underline-offset-4"
            >
              Check 49's virality →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="text-xs text-white/30 mb-6 tracking-[0.2em] uppercase">Token</div>
            <div className="flex gap-3 mb-8">
              <span className="bg-white/5 px-4 py-2 rounded-lg text-white/60 text-sm">$49</span>
              <span className="bg-white/5 px-4 py-2 rounded-lg text-white/60 text-sm">SOLANA</span>
            </div>
            <div className="text-xs text-white/20 mb-2">Contract Address</div>
            <p className="text-sm font-mono text-white/40 select-all">Coming soon...</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-white/20">7×7=49 — The Equation</p>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white transition-colors">
            X
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App