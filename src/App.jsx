import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ca, setCa] = useState('')
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const bgY = useTransform(scrollY, [0, 2000], [0, 50])

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000)
  }, [])

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

  const formatCa = (value) => {
    if (!value) return ''
    if (value.length <= 44) return value
    return value.slice(0, 44)
  }

  return (
    <div className="min-h-screen bg-[#1a1816] text-[#e8e6e3] font-sans overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[2000] bg-[#1a1816] flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold tracking-widest text-[#e8e6e3]/80"
        >
          7×7=49
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
      >
        <img src="/7x7/Screenshot 2026-04-17 234716.png" alt="" className="w-full h-full object-cover" />
      </motion.div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#1a1816]/90 backdrop-blur-md border-b border-[#e8e6e3]/5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xl font-semibold tracking-wide text-[#e8e6e3]">$49</span>
            <span className="text-xs text-[#e8e6e3]/30 px-2 py-0.5 bg-[#e8e6e3]/5 rounded">SOL</span>
          </div>

          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Paste CA here..."
              value={ca}
              onChange={(e) => setCa(formatCa(e.target.value))}
              className="w-full bg-[#e8e6e3]/5 border border-[#e8e6e3]/10 rounded-lg px-4 py-2 text-sm text-[#e8e6e3] placeholder:text-[#e8e6e3]/30 focus:outline-none focus:border-[#e8e6e3]/30 transition-colors text-center font-mono"
            />
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <a href="#numbers" className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors">Numbers</a>
            <a href="#timeline" className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors">Timeline</a>
            <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-sm text-[#e8e6e3]/40 hover:text-[#e8e6e3] transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </motion.nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0">
            <img 
              src="/7x7/Screenshot 2026-04-17 234716.png" 
              alt="" 
              className="w-full h-full object-cover opacity-20 blur-[1px] scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816]/60 via-[#1a1816]/30 to-[#1a1816]" />
        </motion.div>

        <div className="absolute inset-0 z-10">
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

        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <img src="/7x7/Screenshot 2026-04-17 234852.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl -mt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tight mb-3 text-[#e8e6e3]"
          >
            7×7=49
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-[#e8e6e3]/50 font-light"
          >
            The equation that will steal your girl
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#e8e6e3]/5 rounded-full border border-[#e8e6e3]/10">
              <span className="w-2 h-2 bg-[#e8e6e3]/60 rounded-full" />
              <span className="text-sm text-[#e8e6e3]/60 font-mono">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#e8e6e3]/20 text-2xl">
            ↓
          </motion.div>
        </motion.div>
      </section>

      <section id="numbers" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-20 tracking-wide text-[#e8e6e3]"
          >
            THE NUMBERS
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <p className="text-4xl md:text-5xl font-light text-[#e8e6e3]/90 mb-2">{stat.value}</p>
                <p className="text-sm text-[#e8e6e3]/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[2/1] rounded-2xl overflow-hidden"
          >
            <img 
              src="/7x7/image.png" 
              alt="The meme" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1816]/30 via-transparent to-[#1a1816]/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-4xl md:text-5xl font-light text-[#e8e6e3]/30 tracking-widest">7×7=49</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="timeline" className="py-32 px-6 bg-[#141211]">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-16 tracking-wide"
          >
            TIMELINE
          </motion.h2>

          <div className="space-y-1">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-6 py-4 ${item.highlight ? 'border-l-2 border-[#e8e6e3]/20 pl-6' : 'pl-8'}`}
              >
                <div className="w-24 text-sm text-[#e8e6e3]/40 shrink-0">{item.date}</div>
                <div className={`text-sm ${item.highlight ? 'text-[#e8e6e3]/80' : 'text-[#e8e6e3]/50'}`}>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              7×7=49
            </p>
            <p className="text-[#e8e6e3]/40 text-lg">Tokenized on Solana</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#e8e6e3]/5 border border-[#e8e6e3]/10 p-8 rounded-xl"
          >
            <div className="text-xs text-[#e8e6e3]/40 mb-4 tracking-widest">TOKEN</div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#e8e6e3]/5 px-4 py-2 rounded-lg text-[#e8e6e3]/70">$49</span>
              <span className="bg-[#e8e6e3]/5 px-4 py-2 rounded-lg text-[#e8e6e3]/70">SOLANA</span>
            </div>
            <div className="text-xs text-[#e8e6e3]/30 mb-2">CONTRACT ADDRESS</div>
            <p className="text-sm font-mono text-[#e8e6e3]/50 select-all">{ca || 'Coming soon...'}</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#e8e6e3]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8e6e3]/20">7×7=49 — The Equation</p>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-xs text-[#e8e6e3]/30 hover:text-[#e8e6e3] transition-colors">
            X
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App