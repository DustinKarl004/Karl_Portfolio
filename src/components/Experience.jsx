import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiBook } from 'react-icons/fi'

const timeline = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Elevate Solution Expert',
    period: 'Apr 28, 2025 — Present',
    description: 'Building and maintaining full-stack web applications. Working across the entire product lifecycle — from designing REST APIs and backend services to crafting responsive frontends, integrated with third-party services like Brevo, Stripe, and AWS.',
    tags: ['Django', 'Vue.js', 'React', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'Stripe', 'Brevo'],
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    company: 'Colegio De Montalban',
    period: '2021 — 2025',
    description: 'Studied core IT fundamentals including systems analysis, web development, networking, databases, and software engineering. Built numerous projects applying both frontend and backend skills throughout the program.',
    tags: ['Web Development', 'Databases', 'Networking', 'Software Engineering'],
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12 sm:pl-16"
    >
      <div className="absolute left-3.5 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 -translate-x-1/2 flex items-center justify-center shadow-lg shadow-violet-500/30">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <motion.div
        whileHover={{ x: 4 }}
        className="glass rounded-2xl p-5 sm:p-6 hover:border-[var(--border-hover)] transition-all"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {item.type === 'work'
                ? <FiBriefcase size={14} className="text-violet-500 flex-shrink-0" />
                : <FiBook size={14} className="text-pink-500 flex-shrink-0" />
              }
              <h3 className="font-bold text-base sm:text-lg leading-tight" style={{ color: 'var(--text)' }}>
                {item.title}
              </h3>
            </div>
            <p className="font-medium text-violet-500 text-sm">{item.company}</p>
          </div>
          <span className="glass px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
            {item.period}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono"
              style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-pink-500 text-sm tracking-widest uppercase">My journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: 'var(--text)' }}>
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-pink-500/30 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
