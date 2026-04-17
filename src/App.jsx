import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    setTimeout(() => setIsLoaded(true), 1800)
    return () => lenis.destroy()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-[#e8e6e3] font-sans selection:bg-white/10">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] bg-[#0d0b0a]"
      >
        <div className="absolute inset-0">
          <img 
            src="/7x7/image.png" 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-[#0d0b0a]/70 to-[#0d0b0a]" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.p 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl md:text-[6rem] font-bold tracking-wider text-white/90"
          >
            7×7=49
          </motion.p>
        </div>
      </motion.div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-4">
        <div className="flex items-center justify-center gap-8">
          <button 
            onClick={scrollToTop}
            className="text-lg font-bold text-white/70 hover:text-white transition-colors"
          >
            $49
          </button>
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/49onchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </nav>

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

      <footer className="py-8 px-8">
        <div className="flex items-center justify-center">
          <a href="https://x.com/49onchain" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/40 transition-colors">
            X
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App