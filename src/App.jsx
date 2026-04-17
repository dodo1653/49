import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1200)
  }, [])

  const quotes = [
    { text: "Proof that women don't care about looks", source: "@heartzz.kyra", platform: "TikTok" },
    { text: "Why is 7×7=49 so fucking hot", source: "@dilvexed", platform: "X", likes: "69K+" },
    { text: "There's something very special about 7×7=49. We love that multiplication and we also feel that 7×7=49, autumn, and Thursday are deeply connected", source: "Reddit", platform: "r/PeterExplainsTheJoke" },
    { text: "The equation moggs real guys. And the worst part? It's winning fairly", source: "Internet", platform: "Memes" },
    { text: "Women are literally saying 7×7=49 is their new hear me out", source: "The Tab", platform: "Article" },
    { text: "38 million views in five days", source: "Know Your Meme", platform: "Database" }
  ]

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
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold tracking-widest text-white/80"
        >
          7×7=49
        </motion.div>
      </motion.div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-5 px-8 bg-black/70 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-lg font-medium tracking-widest text-white/70">7×7=49</span>
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
            X
          </a>
        </div>
      </motion.nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[200px]" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[180px]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
          >
            <span className="text-white">7×7=49</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-light"
          >
            The equation with more aura than you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-white/60 rounded-full" />
              <span className="text-sm text-white/60 font-mono">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white/30 text-2xl">
            ↓
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-light text-center mb-20 tracking-wide"
          >
            THE MEME
          </motion.h2>

          <div className="grid gap-4">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/[0.03] border border-white/8 p-6 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                <p className="text-white/80 text-lg leading-relaxed mb-3">"{quote.text}"</p>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span>{quote.source}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{quote.platform}</span>
                  {quote.likes && (
                    <>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{quote.likes}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-20 tracking-wide"
          >
            THE EVIDENCE
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[9/16] rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group"
            >
              <img src="/7x7/Screenshot 2026-04-17 234716.png" alt="TikTok screenshot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm text-white/80">The viral slideshow that started it all</p>
                <p className="text-xs text-white/40 mt-1">@heartzz.kyra</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[9/16] rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group"
            >
              <img src="/7x7/Screenshot 2026-04-17 234852.png" alt="TikTok screenshot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm text-white/80">The equation goes viral</p>
                <p className="text-xs text-white/40 mt-1">38M+ views</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group"
          >
            <video ref={videoRef} src="/7x7/tiktok_aascinema_7628095588139126049.mp4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loop muted playsInline autoPlay />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-lg text-white/80">The phenomenon spreads</p>
              <p className="text-sm text-white/40 mt-1">@aascinema and beyond</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-20 tracking-wide"
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
                <p className="text-4xl md:text-5xl font-light text-white/90 mb-2">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white/[0.02]">
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
                className={`flex gap-6 py-4 ${item.highlight ? 'border-l-2 border-white/20 pl-6' : 'pl-8'}`}
              >
                <div className="w-24 text-sm text-white/40 shrink-0">{item.date}</div>
                <div className={`text-sm ${item.highlight ? 'text-white/80' : 'text-white/50'}`}>{item.event}</div>
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
            <p className="text-white/40 text-lg">That's it. That's the meme.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-xl"
          >
            <div className="text-xs text-white/40 mb-4 tracking-widest">TOKEN</div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-white/70">$49</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg text-white/70">SOLANA</span>
            </div>
            <div className="text-xs text-white/30 mb-2">CONTRACT ADDRESS</div>
            <p className="text-sm font-mono text-white/50 select-all">Coming soon...</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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