import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiSend, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/DustinKarl004',
    href: 'https://github.com/DustinKarl004',
    color: '#a78bfa',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'dustinabalos677@gmail.com',
    href: 'mailto:dustinabalos677@gmail.com',
    color: '#f97316',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-violet-500 text-sm tracking-widest uppercase">Let's talk</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: 'var(--text)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind or just want to say hi? Send me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FiMapPin className="text-violet-500" size={18} />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Location</span>
              </div>
              <p className="font-medium" style={{ color: 'var(--text)' }}>Philippines · Remote ready worldwide</p>
            </div>

            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-[var(--border-hover)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${social.color}22` }}>
                  <social.icon size={18} style={{ color: social.color }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{social.label}</p>
                  <p className="text-sm font-medium group-hover:text-violet-500 transition-colors" style={{ color: 'var(--text)' }}>
                    {social.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right — form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all"
                  style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all"
                  style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all resize-none"
                  style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                >
                  <FiCheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <FiAlertCircle size={16} />
                  Something went wrong. Try emailing me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-orange-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
