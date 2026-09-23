'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

/* ── Animation Variants ───────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const floatBubble: Variants = {
  hidden: { opacity: 0, x: 40, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.8,
      duration: 0.7,
      type: 'spring' as const,
      stiffness: 150,
      damping: 15,
    },
  },
}

const floatGoodMemes: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0,
      duration: 0.7,
      type: 'spring' as const,
      stiffness: 120,
      damping: 18,
    },
  },
}

/* ── Social Icons ─────────────────────────────────────── */
const socials = [
  {
    name: 'Telegram',
    href: 'https://t.me/drdoge69',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/dr_doge_',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
            <a href="#community" className="hero-btn-primary">
              Join Community
              <svg viewBox="0 0 20 20" fill="currentColor" className="hero-btn-icon">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
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
