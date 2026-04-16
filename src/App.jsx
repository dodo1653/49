import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setIsLoaded(true), 1000)
  }, [])

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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New']" style={{ pointerEvents: 'auto' }}>
      {mounted && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[2000] bg-black flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm tracking-widest"
          >
            SYYKUNO FILES
          </motion.div>
        </motion.div>
      )}

      <header className="border-b border-white/10 py-6 px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg font-bold tracking-wider">SYYKUNO FILES</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs text-white/40"
          >
            DOCUMENT ARCHIVE
          </motion.div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-12">
        <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">CASE SUMMARY</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              April 10, 2026: VTuber Hemomal released a 32-page document exposing Sykkuno (Thomas, 34) as a 
              "serial cheater, liar, and manipulator." Evidence includes screenshots, PayPal payment records, 
              timeline, and voice recording. Sykkuno has NOT responded publicly - complete silence.
            </p>
            <div className="flex gap-4 text-xs">
              <span className="bg-white/10 px-3 py-1.5 rounded">$SYYKUNO</span>
              <span className="bg-white/10 px-3 py-1.5 rounded">SOLANA</span>
              <span className="bg-white/10 px-3 py-1.5 rounded">5M+ VIEWS</span>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.3 }} className="mb-12">
          <h3 className="text-sm font-bold text-white/40 mb-4 tracking-widest">CONTRACT ADDRESS</h3>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
            <p className="text-xs font-mono text-white/50 break-all select-all">Coming soon...</p>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-12">
          <h3 className="text-sm font-bold text-white/40 mb-4 tracking-widest">EVIDENCE LINKS</h3>
          <div className="space-y-2">
            {evidenceLinks.map((link, i) => (
              <motion.a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="block bg-white/5 border border-white/10 hover:border-white/30 p-3 rounded transition-all"
              >
                <span className="text-sm text-white/70">{link.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.8 }} className="mb-12">
          <h3 className="text-sm font-bold text-white/40 mb-4 tracking-widest">SUBJECTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subjects.map((subject, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
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

        <motion.section {...fadeIn} transition={{ delay: 1.2 }} className="mb-12">
          <h3 className="text-sm font-bold text-white/40 mb-4 tracking-widest">TIMELINE</h3>
          <div className="border-l border-white/10 ml-2 space-y-4">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="relative pl-4"
              >
                <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-white/30 rounded-full" />
                <div className="text-xs text-white/40 mb-0.5">{item.date}</div>
                <div className="text-sm text-white/60">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 1.6 }} className="mb-12">
          <h3 className="text-sm font-bold text-white/40 mb-4 tracking-widest">SEARCH SOCIAL MEDIA</h3>
          <div className="flex flex-wrap gap-2">
            {['Search X', 'Search TikTok', 'Search YouTube', 'Search Reddit', 'Search Google'].map((text, i) => (
              <motion.a 
                key={text}
                href={['https://x.com/search?q=sykkuno', 'https://www.tiktok.com/discover/sykkuno', 'https://www.youtube.com/results?search_query=sykkuno+scandal', 'https://www.reddit.com/search/?q=sykkuno+allegations', 'https://www.google.com/search?q=sykkuno+scandal'][i]}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.05 }}
                className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded transition-colors"
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center gap-6 py-8 border-t border-white/5"
        >
          {socialLinks.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-center pt-8"
        >
          <p className="text-xs text-white/20">SYYKUNO FILES - EDUCATIONAL PURPOSES ONLY</p>
        </motion.footer>
      </main>
    </div>
  )
}

export default App