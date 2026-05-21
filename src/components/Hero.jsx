import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi'

const floatingOrbs = [
  { size: 400, top: '-10%', left: '-5%', bg: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)', delay: 0 },
  { size: 300, top: '40%', right: '-5%', bg: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)', delay: 1 },
  { size: 250, bottom: '10%', left: '30%', bg: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', delay: 2 },
]

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom, background: orb.bg }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + orb.delay, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ color: 'var(--text)' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Dustin Karl</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              Full Stack{' '}
              <span className="font-mono text-violet-500">Developer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              Philippines-based full stack developer specializing in <span className="text-violet-400 font-medium">Django</span> and <span className="text-violet-400 font-medium">Vue.js</span>.
              Over the past year I've shipped production apps — HIPAA-compliant SaaS platforms, job boards, and data pipelines.
              Currently employed and always building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-violet-500/25"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl glass font-semibold text-base sm:text-lg hover:border-violet-500/50 transition-colors"
                style={{ color: 'var(--text)' }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/DustinKarl004' },
                { icon: FiMail, href: 'mailto:dustinabalos677@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  style={{ color: 'var(--text-muted)' }}
                  className="hover:text-violet-400 transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — avatar card (hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 xl:w-80 h-72 xl:h-80 rounded-3xl glass glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-pink-500/20 to-orange-500/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-orange-400 flex items-center justify-center text-2xl font-bold text-white mb-4">
                    DKA
                  </div>
                  <p className="text-white font-semibold text-lg">Dustin Karl Abalos</p>
                  <p className="text-sm font-mono mt-1" style={{ color: 'var(--text-muted)' }}>Full Stack Developer</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-faint)' }}>📍 Philippines</p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 text-xs font-mono text-violet-400 border border-violet-500/30"
                >
                  {'<Developer />'}
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 text-xs font-mono text-orange-400 border border-orange-500/30"
                >
                  {'{ creative }'}
                </motion.div>
              </motion.div>

              <div className="absolute -right-12 top-12 glass rounded-2xl px-4 py-3 text-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Year Exp</div>
              </div>
              <div className="absolute -left-12 bottom-12 glass rounded-2xl px-4 py-3 text-center">
                <div className="text-2xl font-bold gradient-text">9+</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile stats — show only on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex lg:hidden justify-center gap-6"
          >
            {[{ value: '1+', label: 'Year Exp' }, { value: '9+', label: 'Projects' }, { value: 'PH', label: 'Philippines' }].map((s) => (
              <div key={s.label} className="glass rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 mt-16"
          style={{ color: 'var(--text-faint)' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
