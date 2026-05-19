import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight, FiLock } from 'react-icons/fi'
import { SiDjango, SiVuedotjs, SiPostgresql, SiRedis, SiDocker, SiPython } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

/* ── Small decorative mock-UI components ── */
function MockDashboard() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60 pointer-events-none select-none">
      <div className="flex gap-2">
        {['bg-violet-500/50', 'bg-blue-500/40', 'bg-pink-500/40'].map((c, i) => (
          <div key={i} className={`h-8 rounded-lg ${c}`} style={{ flex: i === 0 ? 2 : 1 }} />
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-16 rounded-lg bg-white/5 border border-white/10 p-2">
            <div className="h-2 w-2/3 rounded bg-violet-400/50 mb-1.5" />
            <div className="h-2 w-1/2 rounded bg-white/20" />
          </div>
          <div className="h-16 rounded-lg bg-white/5 border border-white/10 p-2">
            <div className="h-2 w-3/4 rounded bg-blue-400/50 mb-1.5" />
            <div className="h-2 w-1/3 rounded bg-white/20" />
          </div>
        </div>
        <div className="flex flex-col gap-2" style={{ flex: 1.5 }}>
          <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-2">
            <div className="h-2 w-1/2 rounded bg-green-400/50 mb-2" />
            <div className="flex gap-1">
              {[40, 65, 50, 80, 55, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-violet-500/40" style={{ height: h * 0.4 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockJobBoard() {
  const jobs = ['Senior React Dev', 'Django Backend', 'Vue.js Frontend']
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60 pointer-events-none select-none">
      <div className="flex gap-2 mb-1">
        <div className="flex-1 h-7 rounded-lg bg-white/10 border border-white/10" />
        <div className="w-16 h-7 rounded-lg bg-orange-500/50" />
      </div>
      {jobs.map((job, i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
          <div className="w-6 h-6 rounded-md bg-orange-500/40 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-1.5 rounded bg-white/40 mb-1" style={{ width: `${60 + i * 10}%` }} />
            <div className="h-1.5 rounded bg-white/15" style={{ width: `${40 + i * 8}%` }} />
          </div>
          <div className="w-12 h-4 rounded-full bg-green-500/30 border border-green-500/30" />
        </div>
      ))}
    </div>
  )
}

function MockScraper() {
  const rows = ['Dr. James Wilson · Sydney · Orthopedics', 'Dr. Sarah Chen · Melbourne · Neurology', 'Dr. Mark Davis · Brisbane · Psychiatry']
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60 pointer-events-none select-none font-mono text-xs">
      <div className="flex gap-2 text-pink-400/70 mb-1 text-[10px]">
        <span className="flex-1">EXPERT NAME</span>
        <span className="w-20">SPECIALTY</span>
        <span className="w-16">STATUS</span>
      </div>
      {rows.map((row, i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[10px]">
          <div className="w-4 h-4 rounded-sm bg-pink-500/30 flex-shrink-0" />
          <span className="flex-1 text-white/50 truncate">{row}</span>
          <span className="w-14 text-center rounded-full bg-green-500/20 text-green-400/70 py-0.5">scraped</span>
        </div>
      ))}
      <div className="text-[10px] text-white/30 mt-auto">→ Exporting to Excel... 247 records</div>
    </div>
  )
}

function MockPortfolio() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60 pointer-events-none select-none">
      <div className="flex items-center justify-between mb-1">
        <div className="h-4 w-16 rounded bg-white/30 font-mono text-[9px] flex items-center px-2 text-white/70">portfolio</div>
        <div className="flex gap-1.5">
          {['bg-white/20', 'bg-white/20', 'bg-white/20'].map((c, i) => (
            <div key={i} className={`w-5 h-5 rounded ${c}`} />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30" />
        <div className="h-2.5 w-24 rounded bg-white/40" />
        <div className="h-1.5 w-32 rounded bg-white/20" />
        <div className="flex gap-2 mt-1">
          <div className="h-5 w-14 rounded-full bg-white/25 border border-white/20" />
          <div className="h-5 w-14 rounded-full bg-white/10 border border-white/20" />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {['Projects', 'Skills', 'Contact'].map((s) => (
          <div key={s} className="h-1.5 rounded bg-white/25" style={{ width: s.length * 5 }} />
        ))}
      </div>
    </div>
  )
}

function MockTutorial() {
  const levels = ['Beginner', 'Intermediate']
  const topics = ['HTML & CSS', 'JavaScript', 'React', 'Node.js']
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60 pointer-events-none select-none">
      <div className="flex gap-2 mb-1">
        {['Home', 'Tutorials', 'Projects'].map((t) => (
          <div key={t} className="h-5 rounded px-2 bg-white/20 text-[9px] text-white/70 flex items-center">{t}</div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {topics.map((topic, i) => (
          <div key={topic} className="rounded-lg bg-white/10 border border-white/15 p-2 flex flex-col gap-1">
            <div className="h-1.5 rounded bg-white/40" style={{ width: `${50 + i * 10}%` }} />
            <div className="h-1 rounded bg-white/20 w-3/4" />
            <div className="mt-auto">
              <div className="inline-block h-3 rounded-full px-1.5 bg-white/20 text-[8px] text-white/60 leading-3">
                {levels[i % 2]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockQuiz() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col items-center justify-center gap-3 opacity-60 pointer-events-none select-none">
      <div className="w-10 h-10 rounded-full border-2 border-white/50 border-t-white animate-spin" style={{ animationDuration: '1.2s' }} />
      <div className="text-white/70 text-[10px] font-mono tracking-wider">LOADING QUIZ...</div>
      <div className="w-32 h-1 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-2/3 rounded-full bg-white/50" />
      </div>
      <div className="mt-2 flex gap-2">
        {[1,2,3,4].map((n) => (
          <div key={n} className={`w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[9px] text-white/60 ${n <= 2 ? 'bg-white/25' : 'bg-white/5'}`}>
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Tag icon map ── */
const tagIcons = {
  Django: SiDjango,
  'Vue.js': SiVuedotjs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Docker: SiDocker,
  AWS: FaAws,
  Brevo: FiMail,
  Python: SiPython,
}

function Tag({ label }) {
  const Icon = tagIcons[label]
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors"
      style={{ background: 'var(--bg-card-hover)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
    >
      {Icon && <Icon size={11} />}
      {label}
    </span>
  )
}

/* ── Big featured card (HealthMemo) ── */
function FeaturedCard({ project }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="group col-span-1 lg:col-span-2 glass rounded-3xl overflow-hidden hover:border-[var(--border-hover)] transition-all"
    >
      <div className="grid lg:grid-cols-2 min-h-[320px] lg:min-h-[320px]">
        {/* Left — text */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={project.gradientStyle}>
                <span className="text-white font-bold text-xl">{project.title[0]}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-green-500/15 text-green-400 border border-green-500/25">
                ✦ Production
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-500 transition-colors" style={{ color: 'var(--text)' }}>
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/20"
              >
                <FiExternalLink size={14} />
                View Live
              </motion.a>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium" style={{ color: 'var(--text-faint)' }}>
                <FiLock size={14} />
                Private Project
              </span>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-colors hover:text-violet-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <FiGithub size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Right — mock UI preview */}
        <div
          className="relative min-h-[220px] lg:min-h-0 opacity-90 overflow-hidden"
          style={project.gradientStyle}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <MockDashboard />
          {/* Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

/* ── Regular card ── */
function ProjectCard({ project, index, MockUI }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-3xl overflow-hidden hover:border-[var(--border-hover)] transition-all flex flex-col"
    >
      {/* Preview area */}
      <div className="relative h-44 overflow-hidden flex-shrink-0" style={project.gradientStyle}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {MockUI && <MockUI />}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Floating badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/30 text-white/80 backdrop-blur-sm border border-white/20">
            ✦ Real Work
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 group-hover:text-violet-500 transition-colors" style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold shadow-md shadow-orange-500/20"
            >
              <FiExternalLink size={13} />
              View Live
            </motion.a>
          ) : (
            <span
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-xs font-medium"
              style={{ color: 'var(--text-faint)' }}
            >
              <FiLock size={13} />
              Private / Internal
            </span>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-violet-500 transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <FiGithub size={15} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Data ── */
const featured = {
  title: 'HealthMemo MVP',
  description: 'HIPAA-compliant medicolegal case management system built with Django and Vue.js 3. Features OCR document processing, async task queues via Celery & Redis, AWS S3 cloud storage, Stripe billing, and a full multi-tenant admin dashboard — deployed via Docker.',
  tags: ['Django', 'Vue.js', 'Celery', 'Redis', 'PostgreSQL', 'AWS', 'Stripe', 'Docker'],
  gradient: 'from-sky-500 via-blue-500 to-cyan-400',
  gradientStyle: { background: 'linear-gradient(135deg, #009cff 0%, #0284c7 50%, #06b6d4 100%)' },
  github: null,
  live: null,
}

const cards = [
  {
    id: 2,
    title: 'JobZing',
    description: 'Job board for Filipino remote workers that scrapes listings from OnlineJobs.ph. Includes user auth, search & filtering, saved jobs, resume builder, cover letter generator, application tracking, and Brevo email notifications.',
    tags: ['Django', 'Vue.js', 'PostgreSQL', 'Celery', 'Brevo'],
    gradient: 'from-violet-500 via-purple-600 to-blue-600',
    gradientStyle: { background: 'linear-gradient(135deg, #734afe 0%, #5b3fd4 50%, #3a56d4 100%)' },
    github: null,
    live: 'https://jobzingapp.com',
    MockUI: MockJobBoard,
  },
  {
    id: 3,
    title: 'AU Medico Legal IME',
    description: 'Python scraper that gathers and consolidates Independent Medical Expert (IME) data from Australian medico-legal websites — combining expert specialties, locations, accreditations, and contacts into a single Excel/CSV output.',
    tags: ['Python', 'BeautifulSoup4', 'Pandas', 'Requests', 'lxml', 'openpyxl'],
    gradient: 'from-teal-500 via-emerald-600 to-green-500',
    gradientStyle: { background: 'linear-gradient(135deg, #0d9488 0%, #059669 50%, #16a34a 100%)' },
    github: null,
    live: null,
    MockUI: MockScraper,
  },
  {
    id: 4,
    title: 'Personal Portfolio v1',
    description: 'My first portfolio website — built with HTML, CSS & Bootstrap featuring glassmorphism design, Lottie animations, dark/light mode toggle, and sections for skills, projects, and contact.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Lottie'],
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    gradientStyle: { background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #f43f5e 100%)' },
    github: null,
    live: 'https://my-website-coral-beta.vercel.app/home.html',
    MockUI: MockPortfolio,
  },
  {
    id: 5,
    title: 'Full Stack Tutorial',
    description: 'A comprehensive educational platform with step-by-step web development tutorials — covering frontend, backend, deployment and beyond. Organized by difficulty with beginner to intermediate learning paths.',
    tags: ['Next.js', 'React', 'CSS'],
    gradient: 'from-blue-400 via-sky-500 to-cyan-400',
    gradientStyle: { background: 'linear-gradient(135deg, #3498DB 0%, #0ea5e9 50%, #06b6d4 100%)' },
    github: null,
    live: 'https://full-stack-tutorial-gamma.vercel.app/',
    MockUI: MockTutorial,
  },
  {
    id: 6,
    title: 'Interactive Quiz',
    description: 'An engaging interactive quiz application with a vibrant animated UI, smooth loading transitions, and a clean quiz flow — built entirely with vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-violet-600 via-purple-600 to-blue-500',
    gradientStyle: { background: 'linear-gradient(135deg, #6a11cb 0%, #8b5cf6 50%, #2575fc 100%)' },
    github: null,
    live: 'https://interactive-quiz-xi.vercel.app/',
    MockUI: MockQuiz,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-orange-500 text-sm tracking-widest uppercase">What I've built</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: 'var(--text)' }}>
            Real <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Production applications I've built and shipped at work
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturedCard project={featured} />
          {cards.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} MockUI={project.MockUI} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/DustinKarl004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl hover:border-violet-500/30 transition-all text-sm font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiGithub size={16} />
            See more on GitHub
            <FiArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
