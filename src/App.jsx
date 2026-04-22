import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

function App() {
  const videoRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ({ progress }) => {
      setScrollProgress(progress)
    })

    setTimeout(() => setLoaded(true), 500)

    return () => lenis.destroy()
  }, [])

  const sections = [
    { id: 'hero', title: 'I build', subtitle: 'websites for trenchers' },
    { id: 'focus', title: 'pump.fun', subtitle: 'focused. built fast.' },
    { id: 'price', title: '0.5', subtitle: 'SOL' },
    { id: 'contact', title: 'discord', subtitle: '@dazzox' }
  ]

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Syne', sans-serif;
          background: #0B0B0B;
          color: white;
          overflow-x: hidden;
        }

        .reveal {
          opacity: 0;
          transform: translateY(80px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #fff 0%, #666 100%);
          z-index: 1000;
          transition: width 0.1s ease-out;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          z-index: 999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .glow {
          text-shadow: 0 0 60px rgba(255,255,255,0.3);
        }

        ::-webkit-scrollbar { width: 1px; }
        ::-webkit-scrollbar-track { background: #0B0B0B; }
        ::-webkit-scrollbar-thumb { background: #333; }
      `}</style>

      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }} />
      <div className="noise" />

      <nav className="fixed top-0 left-0 w-full px-12 py-8 flex justify-between items-center z-50 mix-blend-difference">
        <span className={`text-sm font-semibold tracking-widest transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          DZZOX
        </span>
        <a 
          href="https://discordapp.com/users/dazzox"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm text-white/50 hover:text-white transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          CONTACT
        </a>
      </nav>

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale"
          >
            <source src="https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/pump.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className={`text-[12vw] leading-[0.85] font-bold tracking-tighter glow transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I BUILD
          </h1>
          <h1 className={`text-[12vw] leading-[0.85] font-bold tracking-tighter glow transition-all duration-1000 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            WEBSITES
          </h1>
          <h1 className={`text-[12vw] leading-[0.85] font-bold tracking-tighter glow transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            FOR TRENCHERS
          </h1>
        </div>

        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white/20 text-xs tracking-[0.3em] animate-pulse">SCROLL</div>
        </div>
      </section>

      <section className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className={`text-[8vw] leading-none font-bold tracking-tight reveal ${loaded ? 'active' : ''}`}>
            PUMP.FUN
          </h2>
          <p className={`text-xl text-white/40 mt-8 tracking-widest reveal reveal-delay-1 ${loaded ? 'active' : ''}`}>
            FOCUSED. BUILT FAST.
          </p>
        </div>
      </section>

      <section className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className={`text-[15vw] leading-none font-bold tracking-tighter reveal ${loaded ? 'active' : ''}`}>
            0.5
          </div>
          <p className={`text-4xl text-white/30 tracking-widest reveal reveal-delay-1 ${loaded ? 'active' : ''}`}>
            SOL
          </p>
        </div>
      </section>

      <section className="h-[70vh] w-full flex items-center justify-center">
        <div className="text-center">
          <a 
            href="https://discordapp.com/users/dazzox"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[6vw] leading-none font-bold tracking-tight hover:text-white/50 transition-colors reveal ${loaded ? 'active' : ''}`}
          >
            CONTACT
          </a>
          <p className={`text-xl text-white/40 mt-4 reveal reveal-delay-1 ${loaded ? 'active' : ''}`}>
            @dazzox
          </p>
        </div>
      </section>

      <footer className="py-12 px-12 flex justify-between items-center border-t border-white/5">
        <span className="text-white/20 text-xs tracking-widest">DZZOX</span>
        <span className="text-white/20 text-xs tracking-widest">© 2025</span>
      </footer>
    </div>
  )
}

export default App