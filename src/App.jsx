import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1])

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

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[2000] bg-[#fafafa] flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold tracking-widest text-[#1a1a1a]/80"
        >
          7×7=49
        </motion.div>
      </motion.div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-5 px-8 bg-[#fafafa]/80 backdrop-blur-md border-b border-[#1a1a1a]/5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-lg font-medium tracking-widest text-[#1a1a1a]/70">7×7=49</span>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">
            X
          </a>
        </div>
      </motion.nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1, scale: heroScale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0">
            <img 
              src="/7x7/Screenshot 2026-04-17 234716.png" 
              alt="" 
              className="w-full h-full object-cover opacity-30 blur-[2px] scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/40 via-transparent to-[#fafafa]" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#1a1a1a]/5 blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-[#1a1a1a]/5 blur-[120px]" />
        </motion.div>

        <div className="absolute inset-0 z-10">
          <video 
            ref={videoRef}
            src="/7x7/tiktok_aascinema_7628095588139126049.mp4"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/60 via-[#fafafa]/30 to-[#fafafa]" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter mb-4 text-[#1a1a1a]"
          >
            7×7=49
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#1a1a1a]/50 font-light"
          >
            The equation with more aura than you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a]/5 rounded-full border border-[#1a1a1a]/10">
              <span className="w-2 h-2 bg-[#1a1a1a]/60 rounded-full" />
              <span className="text-sm text-[#1a1a1a]/60 font-mono">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#1a1a1a]/20 text-2xl">
            ↓
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-20 tracking-wide text-[#1a1a1a]"
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
                <p className="text-4xl md:text-5xl font-light text-[#1a1a1a]/90 mb-2">{stat.value}</p>
                <p className="text-sm text-[#1a1a1a]/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#f5f5f5]">
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
                className={`flex gap-6 py-4 ${item.highlight ? 'border-l-2 border-[#1a1a1a]/20 pl-6' : 'pl-8'}`}
              >
                <div className="w-24 text-sm text-[#1a1a1a]/40 shrink-0">{item.date}</div>
                <div className={`text-sm ${item.highlight ? 'text-[#1a1a1a]/80' : 'text-[#1a1a1a]/50'}`}>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-white">
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
            <p className="text-[#1a1a1a]/40 text-lg">That's it. That's the meme.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#1a1a1a]/10 p-8 rounded-xl"
          >
            <div className="text-xs text-[#1a1a1a]/40 mb-4 tracking-widest">TOKEN</div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#1a1a1a]/5 px-4 py-2 rounded-lg text-[#1a1a1a]/70">$49</span>
              <span className="bg-[#1a1a1a]/5 px-4 py-2 rounded-lg text-[#1a1a1a]/70">SOLANA</span>
            </div>
            <div className="text-xs text-[#1a1a1a]/30 mb-2">CONTRACT ADDRESS</div>
            <p className="text-sm font-mono text-[#1a1a1a]/50 select-all">Coming soon...</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#1a1a1a]/20">7×7=49 — The Equation</p>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-xs text-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-colors">
            X
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App