import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiHeart } from 'react-icons/fi'

const footerLinks = [
  { icon: FiGithub, href: 'https://github.com/DustinKarl004' },
  { icon: FiMail, href: 'mailto:dustinabalos677@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-mono text-lg font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="gradient-text">dustinkarl.dev</span>
        </motion.span>

        <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
          Built with <FiHeart size={13} className="text-pink-500" /> using React & Vite
        </p>

        <div className="flex items-center gap-5">
          {footerLinks.map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#a78bfa' }}
              className="text-slate-500 hover:text-violet-400 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
