import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function App() {
  const videoRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Space Grotesk', sans-serif;
          background: #0B0B0B;
          color: white;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-in {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade {
          animation: fadeIn 1.5s ease forwards;
        }

        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }
        .delay-5 { animation-delay: 0.75s; }

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: #0B0B0B;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
        }

        ::selection {
          background: white;
          color: #0B0B0B;
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-12 flex justify-between items-center">
        <div className="opacity-0 animate-fade delay-1">
          <a href="#" className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity">
            dzzox
          </a>
        </div>
        <div className="opacity-0 animate-fade delay-3">
          <a href="#work" className="text-sm text-white/40 hover:text-white transition-colors">
            work
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/pump.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-8 opacity-0 animate-in">
            I BUILD
          </h1>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-8 opacity-0 animate-in delay-1">
            FOR THE
          </h1>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-12 opacity-0 animate-in delay-2">
            TRENCH
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light tracking-wide opacity-0 animate-in delay-3">
            websites for pump.fun
          </p>
        </div>
      </section>

      <section id="work" className="min-h-screen py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/30 uppercase tracking-[0.3em] mb-24 opacity-0 animate-fade delay-1">
            selected work
          </p>

          <div className="grid gap-32">
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg opacity-0 animate-in">
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=900&fit=crop" 
                  alt="lowcortisol"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/50 to-transparent" />
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-bold tracking-tight opacity-0 animate-in delay-1">LOWCORTISOL</h3>
                  <p className="text-white/40 mt-2">pump.fun token</p>
                </div>
                <span className="text-white/30 opacity-0 animate-in delay-2">2025</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg opacity-0 animate-in">
                <img 
                  src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1600&h=900&fit=crop" 
                  alt="49onchain"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/50 to-transparent" />
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-bold tracking-tight opacity-0 animate-in delay-1">7×7=49</h3>
                  <p className="text-white/40 mt-2">meme token</p>
                </div>
                <span className="text-white/30 opacity-0 animate-in delay-2">2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-12">
        <div className="max-w-4xl">
          <p className="text-sm text-white/30 uppercase tracking-[0.3em] mb-12 opacity-0 animate-fade delay-1">
            what i do
          </p>
          <div className="space-y-12">
            <div className="opacity-0 animate-in delay-2">
              <h3 className="text-2xl font-medium mb-4">Websites for pump.fun</h3>
              <p className="text-white/40 text-lg leading-relaxed">
                Clean, convert-ready landing pages for tokens launching on pump.fun. 
                Built to turn views into buyers.
              </p>
            </div>
            <div className="opacity-0 animate-in delay-3">
              <h3 className="text-2xl font-medium mb-4">On-chain branding</h3>
              <p className="text-white/40 text-lg leading-relaxed">
                UI/UX that matches the energy. Fast loads, smooth interactions, 
                designed for traders who move fast.
              </p>
            </div>
            <div className="opacity-0 animate-in delay-4">
              <h3 className="text-2xl font-medium mb-4">Fast delivery</h3>
              <p className="text-white/40 text-lg leading-relaxed">
                Sites delivered in hours, not days. Your coin won't wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-12">
        <div className="text-center">
          <p className="text-sm text-white/30 uppercase tracking-[0.3em] mb-12 opacity-0 animate-fade delay-1">
            price
          </p>
          <div className="mb-12 opacity-0 animate-in delay-2">
            <span className="text-[10rem] md:text-[12rem] font-bold tracking-tighter">0.5</span>
            <span className="text-3xl text-white/40 ml-4">SOL</span>
          </div>
          <p className="text-white/40 text-lg opacity-0 animate-in delay-3">
            ready in 24 hours
          </p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-12">
        <div className="text-center">
          <p className="text-sm text-white/30 uppercase tracking-[0.3em] mb-12 opacity-0 animate-fade delay-1">
            contact
          </p>
          
          <a 
            href="https://discord.gg/dazzox" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-2xl md:text-3xl hover:text-white/60 transition-colors opacity-0 animate-in delay-2"
          >
            discord.gg/dazzox
          </a>

          <p className="text-white/30 text-sm mt-12 opacity-0 animate-in delay-3">
            dzzox
          </p>
        </div>
      </section>

      <footer className="py-12 px-12">
        <div className="flex justify-between items-center">
          <p className="text-white/20 text-sm">dzzox</p>
          <p className="text-white/20 text-sm">© 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default App