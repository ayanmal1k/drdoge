'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/* ── Animation Variants ───────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const floatBubble = {
  hidden: { opacity: 0, x: 40, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.8,
      duration: 0.7,
      type: 'spring',
      stiffness: 150,
      damping: 15,
    },
  },
}

const floatGoodMemes = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0,
      duration: 0.7,
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
}

/* ── Social Icons ─────────────────────────────────────── */
const socials = [
  {
    name: 'Telegram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
  {
    name: 'DexScreener',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
    >
      {/* ── Background ──────────────────────────────────── */}
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/hero bg.avif"
          alt=""
          fill
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* ── Content Container ───────────────────────────── */}
      <div className="hero-container">

        {/* ── Left: Text Content ──────────────────────── */}
        <div className="hero-left">
          <motion.p
            className="hero-tagline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Medicine meets meme culture.
          </motion.p>

          <motion.h1
            className="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Memes are<br />
            the <span className="hero-heading-accent">treatment.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            DrDoge has entered the clinic.<br />
            Prescribing memes. Treating boredom.<br />
            Chasing the moon.
          </motion.p>

          <motion.p
            className="hero-ticker"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            $DRDOGE <span className="hero-ticker-sep">|</span> The internet&apos;s favorite doctor dog.
          </motion.p>

          {/* ── Buttons ─────────────────────────────── */}
          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#" className="hero-btn-primary">
              Buy $DRDOGE
              <svg viewBox="0 0 20 20" fill="currentColor" className="hero-btn-icon">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hero-btn-outline">
              Join Community
            </a>
          </motion.div>

          {/* ── Social Links ────────────────────────── */}
          <motion.div
            className="hero-socials"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="hero-social-link"
                aria-label={social.name}
              >
                <span className="hero-social-icon">{social.icon}</span>
                <span className="hero-social-label">{social.name}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Character + Decorative Images ────── */}
        <div className="hero-right">
          {/* Good Memes text — hidden on mobile */}
          <motion.div
            className="hero-good-memes"
            variants={floatGoodMemes}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <Image
              src="/hero-good memes with icon text.png"
              alt="Good Memes Better Moons"
              width={200}
              height={380}
              className="hero-good-memes-img"
            />
          </motion.div>

          {/* Character */}
          <motion.div
            className="hero-character"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/hero.png"
              alt="DrDoge - The Doctor Doge"
              width={580}
              height={580}
              priority
              className="hero-character-img"
            />
          </motion.div>

          {/* To The Moon bubble — hidden on mobile */}
          <motion.div
            className="hero-bubble"
            variants={floatBubble}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <Image
              src="/hero - to the meme text bubble.png"
              alt="To The Moon"
              width={200}
              height={150}
              className="hero-bubble-img"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
