import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
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
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Sora', sans-serif; background: #0B0B0B; color: white; }
        a { text-decoration: none; color: inherit; }
        
        .fade { animation: fadeIn 1s ease forwards; opacity: 0; }
        @keyframes fadeIn { to { opacity: 1; } }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0B0B0B; }
        ::-webkit-scrollbar-thumb { background: #333; }
      `}</style>

      <nav className="fixed top-0 left-0 w-full py-8 px-12 flex justify-between items-center z-50">
        <a href="#" className="text-lg font-semibold tracking-tight hover:opacity-50 transition-opacity">
          dzzox
        </a>
        <a href="#contact" className="text-sm text-white/40 hover:text-white transition-colors">
          contact
        </a>
      </nav>

      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 fade delay-1">
            I build
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 fade delay-2">
            websites
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 fade delay-3">
            for trenchers
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 font-light tracking-wide mt-16 fade delay-3">
            pump.fun focused. Built fast.
          </p>

          <div className="mt-8 fade delay-3">
            <span className="text-5xl font-bold">0.5</span>
            <span className="text-xl text-white/40 ml-3">SOL</span>
          </div>
        </div>
      </main>

      <footer id="contact" className="py-12 px-12">
        <div className="flex justify-center items-center gap-8">
          <a 
            href="https://discordapp.com/users/dazzox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.613-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 12.935 12.935 0 0 0 1.381-1.277.074.074 0 0 0-.078-.039 12.508 12.508 0 0 1-1.872.892.077.077 0 0 0-.079.038c.21.528.599.889 1.279 1.249a.074.074 0 0 0 .079.038 19.741 19.741 0 0 1 4.708.001.073.073 0 0 0 .079-.039 12.473 12.473 0 0 1 1.272-.887.074.074 0 0 0 .079-.04c.463.63 1.015 1.159 1.631 1.567a.078.078 0 0 0 .083-.055c.462-.794.972-1.551 1.526-2.257a.076.076 0 0 0-.035-.1zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418z"/>
            </svg>
            <span>dazzox</span>
          </a>
          
          <span className="text-white/20">|</span>
          
          <p className="text-white/20 text-sm">dzzox</p>
        </div>
      </footer>
    </div>
  )
}

export default App