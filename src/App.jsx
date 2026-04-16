import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const searchInputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800)
  }, [])

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const socialLinks = [
    { name: 'X', url: 'https://x.com/sykkunofiles1' },
    { name: 'TikTok', url: 'https://www.tiktok.com/discover/sykkuno' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=sykkuno+scandal' },
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=sykkuno+allegations' }
  ]

  const evidenceLinks = [
    { id: 1, title: 'Google Doc - Hemomal Full Expose (32 pages)', url: 'https://docs.google.com/document/d/1bICoQMqFHZ172P8AbZeF0-GCM4pXA-0M8jR82GiLcLs/preview' },
    { id: 2, title: 'WestJett: The Sykkuno Files (1.1M views)', url: 'https://www.youtube.com/watch?v=eGK6ywJiD-8' },
    { id: 3, title: 'SmugAlana: Sykkuno Exposed (88K views)', url: 'https://www.youtube.com/watch?v=NqcX1xP8hOs' },
    { id: 4, title: 'Mujin: From Viral Star to Serial Cheater (4M+ views)', url: 'https://www.youtube.com/watch?v=C3GMAX8Bfmc' },
    { id: 5, title: 'kxl: The Sykkuno Files Explained', url: 'https://www.youtube.com/watch?v=6_Hr_w5PeOw' },
    { id: 6, title: 'GamePOW: The Sykkuno Drama', url: 'https://gamepow.co/the-sykkuno-drama-controversy-vtuber-hemomal-releases-a-google-doc-exposing-sykkuno/' },
    { id: 7, title: 'Spilled.gg: Sykkuno Allegedly Cheated', url: 'https://spilled.gg/sykkuno-girlfriend-women-call-messages/' },
    { id: 8, title: 'High On Films: Wholesome Persona Crumbling', url: 'https://www.highonfilms.com/sykkunos-wholesome-persona-crumbles-hemomalvt-controversy/' },
    { id: 9, title: 'Times of India: Valkyrae Responds', url: 'https://timesofindia.indiatimes.com/world/us-streamers/valkyrae-responds-to-sykkuno-controversy-after-hemomal-document-and-voice-recording-go-viral/articleshow/130243907.cms' },
    { id: 10, title: 'Poprant: Fake "sorry not sorry" Debunked', url: 'https://poprant.indiatimes.com/trending/sorry-not-sorry-did-sykkuno-break-his-silence-after-shocking-cheating-allegations-viral-photo-leaves-internet-confused-heres-the-truth/articleshow/130210105.html' },
    { id: 11, title: 'Inkl: Were Minors Involved?', url: 'https://inkl.com/news/was-sykkuno-involved-with-minors-hemomal-clears-confusion-in-viral-controversy' },
    { id: 12, title: 'Tribune: Viral Sentiment Analysis', url: 'https://tribune.com.pk/story/2602505/did-sykkuno-address-cheating-allegations-viral-sorry-not-sorry-post-stirs-sentiment' }
  ]

  const subjects = [
    { name: 'Thomas "Sykkuno"', role: 'PRIMARY', status: 'ALLEGED', bio: '34yo, 3.4M Twitch followers, "wholesome king" persona' },
    { name: 'HemomalVT', role: 'WHISTLEBLOWER', status: 'ACTIVE', bio: 'VTuber who released 32-page expose with evidence' },
    { name: 'Valkyrae', role: 'RESPONDENT', status: 'COMMENTED', bio: 'Close friend - posted "Disappointing :("' },
    { name: 'Elfilea', role: 'WITNESS', status: 'STATEMENT', bio: '5-year victim, corroborates the story' },
    { name: 'Girlfriend', role: 'AFFECTED', status: 'SILENT', bio: 'Lived with Sykkuno since 2021' }
  ]

  const timeline = [
    { date: '2021', event: 'Long-term relationship began while secretly messaging multiple women' },
    { date: 'Dec 2025', event: 'Paris trip with woman during TFT tournament, payments sent' },
    { date: 'April 10, 2026', event: 'Hemomal releases 32-page Google Doc with screenshots and audio' },
    { date: 'April 11, 2026', event: 'WestJett video hits 1M+ views, #Sykkuno trends on X' },
    { date: 'April 13, 2026', event: 'Valkyrae responds "Disappointing :("' },
    { date: 'April 14, 2026', event: 'Hemomal clarifies "predator" means preying on smaller VTubers' },
    { date: 'NOW', event: 'Sykkuno has NOT responded - full silence' }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}+sykkuno`, '_blank')
    }
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New']" style={{ pointerEvents: 'auto' }}>
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm tracking-widest"
        >
          SYYKUNO FILES // LOADING...
        </motion.div>
      </motion.div>

      <header className="border-b border-white/20 py-4 px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl">DOC</span>
            <div>
              <h1 className="text-lg font-bold tracking-wider">SYYKUNO FILES</h1>
              <p className="text-xs text-white/50">THE EXPOSÉ THAT BROKE THE INTERNET</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-red-400 font-bold"
          >
            LIVE INVESTIGATION
          </motion.div>
        </div>
      </header>

      <div className="bg-white/5 border-b border-white/10 py-2 px-8">
        <div className="max-w-4xl mx-auto flex gap-4 text-xs">
          <span className="text-white/50">VIRAL REACH:</span>
          <span className="text-white">5M+</span>
          <span className="text-white/30">|</span>
          <span className="text-white/50">EVIDENCE:</span>
          <span className="text-white">{evidenceLinks.length}</span>
          <span className="text-white/30">|</span>
          <span className="text-white/50">UPDATED:</span>
          <span className="text-white">APRIL 14, 2026</span>
        </div>
      </div>

      <div className="bg-white/10 border-b border-white/10 py-3 px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded border border-white/10 transition-colors"
          >
            {showSearch ? 'Close Search' : 'Search the Web'}
          </button>
          
          {showSearch && (
            <motion.form 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleSearch}
              className="mt-2"
            >
              <div className="flex gap-2">
                <input 
                  ref={searchInputRef}
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for sykkuno evidence..."
                  className="flex-1 bg-black border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <button type="submit" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm transition-colors">
                  Search
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <a href={`https://x.com/search?q=${searchQuery || 'sykkuno'}`} target="_blank" className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">X</a>
                <a href={`https://www.tiktok.com/search?query=${searchQuery || 'sykkuno'}`} target="_blank" className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">TikTok</a>
                <a href={`https://www.youtube.com/results?search_query=${searchQuery || 'sykkuno'}`} target="_blank" className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">YouTube</a>
                <a href={`https://www.reddit.com/search/?q=${searchQuery || 'sykkuno'}`} target="_blank" className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">Reddit</a>
                <a href={`https://www.google.com/search?q=${searchQuery || 'sykkuno'}`} target="_blank" className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">Google</a>
              </div>
            </motion.form>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-8 py-8">
        <motion.section {...fadeIn} className="mb-10">
          <div className="bg-red-900/10 border border-red-500/20 p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="text-red-400">CASE SUMMARY</span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              April 10, 2026: VTuber Hemomal released a 32-page document exposing Sykkuno (Thomas, 34) as a 
              "serial cheater, liar, and manipulator." Evidence includes screenshots, PayPal payment records, 
              timeline, and voice recording. Sykkuno has NOT responded publicly - complete silence.
            </p>
            <div className="flex gap-3 text-xs">
              <span className="bg-white/10 px-2 py-1 rounded">$SYYKUNO</span>
              <span className="bg-white/10 px-2 py-1 rounded">SOLANA</span>
              <span className="bg-white/10 px-2 py-1 rounded">5M+ VIEWS</span>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.1 }} className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">CONTRACT ADDRESS</h3>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
            <p className="text-xs font-mono text-white/50 break-all select-all">Coming soon...</p>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">EVIDENCE LINKS</h3>
          <div className="space-y-2">
            {evidenceLinks.map((link, i) => (
              <motion.a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.03 }}
                className="block bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-900/10 p-3 rounded transition-all"
              >
                <span className="text-sm text-white/70">{link.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.5 }} className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">SUBJECTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subjects.map((subject, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/5 border border-white/10 p-3 rounded"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm">{subject.name}</span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded">{subject.status}</span>
                </div>
                <p className="text-xs text-white/50">{subject.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.8 }} className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">TIMELINE</h3>
          <div className="border-l border-white/10 ml-2 space-y-4">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="relative pl-4"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-red-500/50 rounded-full" />
                <div className="text-xs text-white/40 mb-0.5">{item.date}</div>
                <div className="text-sm text-white/60">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 1.1 }} className="mb-10">
          <div className="flex justify-center gap-6 py-6 border-t border-white/5">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center pt-4 pb-8"
        >
          <p className="text-xs text-white/20">SYYKUNO FILES - EDUCATIONAL PURPOSES ONLY</p>
        </motion.footer>
      </main>
    </div>
  )
}

export default App