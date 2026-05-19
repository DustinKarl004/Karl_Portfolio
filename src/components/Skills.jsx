import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaAws } from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'
import {
  SiReact, SiVuedotjs, SiDjango, SiPython, SiJavascript,
  SiPostgresql, SiSqlite, SiRedis, SiDocker, SiGit, SiTailwindcss,
  SiStripe, SiCelery,
} from 'react-icons/si'

const skills = [
  { name: 'AI Vibe Coding', icon: SiOpenai, color: '#10a37f', level: 1000 },
  { name: 'Vue.js',      icon: SiVuedotjs,    color: '#42B883', level: 95 },
  { name: 'Redis',       icon: SiRedis,       color: '#DC382D', level: 100 },
  { name: 'Django',      icon: SiDjango,      color: '#4CAF7D', level: 92 },
  { name: 'Celery',      icon: SiCelery,      color: '#37814A', level: 90 },
  { name: 'AWS',         icon: FaAws,         color: '#FF9900', level: 93 },
  { name: 'Stripe',      icon: SiStripe,      color: '#635BFF', level: 90 },
  { name: 'Git',         icon: SiGit,         color: '#F05032', level: 91 },
  { name: 'SQLite',      icon: SiSqlite,      color: '#003B57', level: 90 },
  { name: 'Python',      icon: SiPython,      color: '#3776AB', level: 85 },
  { name: 'PostgreSQL',  icon: SiPostgresql,  color: '#336791', level: 80 },
  { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E', level: 70 },
  { name: 'Tailwind',    icon: SiTailwindcss, color: '#38BDF8', level: 65 },
  { name: 'Brevo',       icon: FiMail,        color: '#0B996E', level: 60 },
  { name: 'Docker',      icon: SiDocker,      color: '#2496ED', level: 44 },
  { name: 'React',       icon: SiReact,       color: '#61DAFB', level: 30 },
]

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl p-5 hover:border-[var(--border-hover)] transition-all group cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${skill.color}22` }}
        >
          <skill.icon size={20} style={{ color: skill.color }} />
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-between gap-1">
          <span className="font-semibold text-xs sm:text-sm truncate" style={{ color: 'var(--text)' }}>{skill.name}</span>
          <span className="flex-shrink-0 text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{skill.level}%</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-card-hover)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-violet-500 text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: 'var(--text)' }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
