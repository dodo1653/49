import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

function App() {
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  const [isPlaying, setIsPlaying] = useState(true)
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    if (videoRef.current) {
      videoRef.current.volume = 0.05
      const fadeIn = setInterval(() => {
        if (videoRef.current && videoRef.current.volume < 0.15) {
          videoRef.current.volume = Math.min(videoRef.current.volume + 0.01, 0.15)
        } else {
          clearInterval(fadeIn)
        }
      }, 100)
    }

    return () => lenis.destroy()
  }, [])

  const toggleAudio = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        if (videoRef.current.volume < 0.05) {
          videoRef.current.volume = 0.15
        }
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-[#e8e6e3] font-sans selection:bg-white/10">
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 bg-[#0d0b0a]/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xl font-bold text-white tracking-wide hover:text-white/80 transition-colors"
          >
            <span>$49</span>
            <span className="text-xs text-white/30 px-1.5 py-0.5 bg-white/5 rounded">SOL</span>
          </button>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleAudio}
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {isPlaying ? '🔊' : '🔇'}
            </button>
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

        <div className="absolute inset-0 z-0 opacity-0" style={{ animation: 'fadeInVideo 2s ease-out forwards' }}>
          <video 
            ref={videoRef}
            src="/7x7/tiktok_aascinema_7628095588139126049.mp4"
            className="w-full h-full object-cover mix-blend-overlay grayscale"
            autoPlay
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
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[7rem] lg:text-[9rem] font-bold tracking-tighter text-white mb-2"
          >
            7×7=49
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/40 font-light tracking-wide"
          >
            The equation that will steal your girl
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/8">
              <span className="w-2 h-2 bg-white/60 rounded-full" />
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
            className="relative aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer"
            onClick={() => window.open('https://www.tiktok.com/search?q=7x7%3D49&t=1776460964757', '_blank')}
          >
            <img src="/7x7/image.png" alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-transparent to-[#0d0b0a]/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <p className="text-6xl md:text-7xl font-light text-white/10 tracking-[0.5em]">7×7=49</p>
              <svg className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white/5 border border-white/10 rounded-full px-8 py-4 max-w-lg mx-auto backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs text-white/30 uppercase tracking-widest">CA</span>
              <span className="text-sm font-mono text-white/40">Coming soon...</span>
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