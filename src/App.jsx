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
    
    setTimeout(() => setIsLoaded(true), 1200)
    return () => lenis.destroy()
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
    <div className="min-h-screen bg-[#1a1816] text-[#e8e6e3] font-sans">
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] bg-[#1a1816]">
          <div className="absolute inset-0">
            <img src="/7x7/image.png" alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-[#1a1816]/50" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <p className="text-6xl md:text-8xl font-bold tracking-widest text-[#e8e6e3]/80">7×7=49</p>
          </div>
        </div>
      )}

      <motion.div style={{ y: bgY }} className="fixed inset-0 -z-10 opacity-[0.04]">
        <img src="/7x7/Screenshot 2026-04-17 234716.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      <header className="fixed top-0 left-0 right-0 z-50 py-5 px-8 bg-[#1a1816]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-3"
          >
            <span className="text-2xl font-bold text-[#e8e6e3] tracking-wide">$49</span>
            <span className="text-xs text-[#e8e6e3]/40 px-2 py-1 bg-white/5 rounded font-medium">SOL</span>
          </div>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('numbers')}
              className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors"
            >
              Numbers
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors"
            >
              Timeline
            </button>
            <a 
              href="https://x.com/49onchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#e8e6e3]/40 hover:text-[#e8e6e3] transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/7x7/Screenshot 2026-04-17 234716.png" 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-[1px] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816]/60 via-[#1a1816]/30 to-[#1a1816]" />
        </div>

        <div className="absolute inset-0 -z-10">
          <video 
            ref={videoRef}
            src="/7x7/tiktok_aascinema_7628095588139126049.mp4"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816]/70 via-[#1a1816]/50 to-[#1a1816]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter mb-4 text-[#e8e6e3]"
          >
            7×7=49
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-[#e8e6e3]/50 font-light"
          >
            The equation that will steal your girl
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 font-mono">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="text-white/20 text-3xl">↓</div>
        </motion.div>
      </section>

      <section id="numbers" className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-center mb-16 text-[#e8e6e3]"
          >
            THE NUMBERS
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-light text-[#e8e6e3]/90 mb-2">{stat.value}</p>
                <p className="text-sm text-[#e8e6e3]/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
            <img src="/7x7/image.png" alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1816]/50 via-transparent to-[#1a1816]/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-5xl font-light text-white/20 tracking-widest">7×7=49</p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-40 px-6 bg-[#141211]">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-center mb-16"
          >
            TIMELINE
          </motion.h2>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-6 py-5 ${item.highlight ? 'border-l-2 border-white/20 pl-6' : 'pl-8'}`}
              >
                <div className="w-28 text-sm text-white/40 shrink-0">{item.date}</div>
                <div className={`text-sm ${item.highlight ? 'text-white/80' : 'text-white/50'}`}>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-7xl md:text-9xl font-bold tracking-tight mb-6">7×7=49</p>
            <p className="text-white/40 text-xl mb-8">Tokenized on Solana</p>

            <div className="mt-8">
              <a 
                href="https://x.com/dilvexed/status/2040175730810876271"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-[#1a1816] border border-white/10 rounded-xl p-6 max-w-lg mx-auto hover:border-white/20 transition-colors text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">dilvexed</p>
                      <p className="text-xs text-white/40">@dilvexed</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/80 mb-2">why is 7×7=49 so fucking hot</p>
                  <p className="text-xs text-white/40">69K likes · April 3, 2026</p>
                </div>
              </a>
            </div>

            <a 
              href="https://www.tiktok.com/search?q=7x7%3D49&t=1776460964757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 text-white/40 hover:text-white/60 transition-colors underline underline-offset-4"
            >
              Check 49's virality →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="text-xs text-white/40 mb-6 tracking-widest uppercase">Token</div>
            <div className="flex gap-3 mb-6">
              <span className="bg-white/5 px-4 py-2 rounded-lg text-white/70">$49</span>
              <span className="bg-white/5 px-4 py-2 rounded-lg text-white/70">SOLANA</span>
            </div>
            <div className="text-xs text-white/30 mb-2">Contract Address</div>
            <p className="text-sm font-mono text-white/50">Coming soon...</p>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-white/20">7×7=49 — The Equation</p>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white">
            X
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App