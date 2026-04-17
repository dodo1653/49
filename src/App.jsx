import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1200)
  }, [])

  const videos = [
    { id: 1, platform: 'tiktok', author: '@heartzz.kyra', views: '38M', title: 'Original video that started it all', url: 'https://www.tiktok.com/@heartzz.kyra/video/123456789' },
    { id: 2, platform: 'youtube', author: 'nn', views: '388K', title: 'Why Everyone Thinks This Math Equation Is Attractive', url: 'https://www.youtube.com/watch?v=7x749-video1' },
    { id: 3, platform: 'tiktok', author: '@ryanversace', views: '740K', title: 'The equation steals your girl', url: 'https://www.tiktok.com/@ryanversace/video/123456790' },
    { id: 4, platform: 'tiktok', author: '@trevorlarcom', views: '210K', title: 'Caught her looking at 7×7=49', url: 'https://www.tiktok.com/@trevorlarcom/video/123456791' }
  ]

  const lore = [
    { text: '38 million views in 5 days', icon: '👁' },
    { text: '69K likes on "why is 7×7=49 so hot"', icon: '🔥' },
    { text: 'Synesthesia explains everything', icon: '🧠' },
    { text: 'The equation moggs everything', icon: '💀' },
    { text: 'Brainrot at its finest', icon: '🧌' },
    { text: 'No explanation needed', icon: '🤷' }
  ]

  const timeline = [
    { date: 'April 1, 2026', event: '@heartzz.kyra posts viral video', color: 'from-pink-500 to-rose-500' },
    { date: 'April 3, 2026', event: '69K likes on "why so hot"', color: 'from-purple-500 to-indigo-500' },
    { date: 'April 5, 2026', event: 'Reddit explainer goes viral', color: 'from-blue-500 to-cyan-500' },
    { date: 'April 6, 2026', event: '740K views on comedy video', color: 'from-cyan-500 to-teal-500' },
    { date: 'NOW', event: '7×7=49 wins. Always has.', color: 'from-emerald-500 to-green-500' }
  ]

  const socialLinks = [
    { name: 'X', url: 'https://x.com/49onchain' }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl font-bold tracking-wider"
        >
          7×7=49
        </motion.div>
      </motion.div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-8 bg-black/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-widest">7×7=49</span>
          <div className="flex gap-6 text-sm">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-[150px]" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-[150px]" />
        </motion.div>
        
        <div className="relative z-10 text-center px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-4"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">7×7=49</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 font-light"
          >
            The equation with more aura than you
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/70">38M+ views across platforms</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        >
          ↓
        </motion.div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            THE MEME
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lore.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-white/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            VIRAL CONTENT
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block group"
              >
                <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-4xl">▶</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm font-medium">{video.title}</p>
                    <p className="text-xs text-white/50">{video.author} • {video.views} views</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            TIMELINE
          </motion.h2>
          
          <div className="relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 pb-12 relative"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                  {i < timeline.length - 1 && <div className="w-px h-full bg-white/10 absolute top-4 left-1.5" />}
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-sm text-white/40 mb-1">{item.date}</div>
                  <div className="text-lg text-white/80">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            THE EQUATION
          </motion.h2>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            7×7=49
          </motion.div>
          <p className="mt-8 text-white/50">That's it. That's the meme.</p>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-sm font-bold text-white/50 mb-6 tracking-widest">CONTRACT</h3>
            <p className="text-sm font-mono text-white/60 select-all">Coming soon...</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">7×7=49 - THE EQUATION</p>
          <div className="flex gap-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App