import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800)
  }, [])

  const socialLinks = [
    { name: 'X', url: 'https://x.com/49onchain' }
  ]

  const lore = [
    "7×7=49 has more aura than you ever will",
    "The equation don't need a reason. That's the joke.",
    "Women are literally saying 7×7=49 is their new hear me out",
    "38 million views in 5 days. No explanation needed.",
    "Synesthesia. That's the explanation.",
    "The equation walks in. Your man walks out.",
    "7×7=49 moggs everything",
    "Brainrot at its finest"
  ]

  const timeline = [
    { date: 'April 1, 2026', event: '@heartzz.kyra posts viral video' },
    { date: 'April 3, 2026', event: '@dilvexed asks why so hot - 69K likes' },
    { date: 'April 5, 2026', event: 'Reddit asks Petah why 7×7=49 is attractive' },
    { date: 'April 6, 2026', event: '@ryanversace gets 740K views on comedy video' },
    { date: 'NOW', event: '7×7=49 wins. Always has.' }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Courier New, monospace' }}>
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-4xl font-bold"
        >
          7×7=49
        </motion.div>
      </motion.div>

      <header className="border-b border-white/10 py-6 px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wider"
          >
            7×7=49
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-white/40"
          >
            THE EQUATION
          </motion.div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-16">
        <motion.section {...fadeIn} className="mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            7×7=49
          </h2>
          <p className="text-lg text-white/60">
            The math equation with more aura than you
          </p>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.1 }} className="mb-16">
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">TOKEN</h3>
            <div className="flex gap-4 text-xs mb-4">
              <span className="bg-white/10 px-3 py-2 rounded">$49</span>
              <span className="bg-white/10 px-3 py-2 rounded">SOLANA</span>
            </div>
            <div className="text-white/50 text-xs mb-2">CONTRACT</div>
            <p className="text-sm font-mono select-all">Coming soon...</p>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">THE MEME</h3>
          <div className="space-y-3">
            {lore.map((item, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-white/60"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.3 }} className="mb-16">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">TIMELINE</h3>
          <div className="border-l border-white/10 ml-2 space-y-4">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-4"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-white/30 rounded-full -translate-x-[5px]" />
                <div className="text-xs text-white/40 mb-0.5">{item.date}</div>
                <div className="text-sm text-white/60">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
          <div className="flex justify-center gap-6 py-8 border-t border-white/5">
            {socialLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.section>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-white/20">7×7=49 - THE EQUATION</p>
        </motion.footer>
      </main>
    </div>
  )
}

export default App