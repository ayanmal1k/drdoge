'use client'

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      {/* Background — swaps via CSS between desktop/mobile */}
      <picture className="about-bg" aria-hidden="true">
        <source media="(max-width: 767px)" srcSet="/about-bg-mobile.avif" />
        <source media="(min-width: 768px)" srcSet="/about-bg.avif" />
        <img
          src="/about-bg.avif"
          alt=""
          className="about-bg-img"
        />
      </picture>

      {/* Text content — left side on desktop, top area on mobile */}
      <div className="about-content">
        <motion.p
          className="about-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          ABOUT DRDOGE
        </motion.p>

        <motion.h2
          className="about-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          More Memes.<br />
          A Healthier <span className="about-heading-accent">Internet.</span>
        </motion.h2>

        <motion.p
          className="about-description"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          DrDoge combines the power of meme culture with
          a mission to make the internet a happier place.
          We&apos;re here to prescribe memes, treat boredom,
          and build a strong community on the way to the moon.
        </motion.p>

        <motion.div
          className="about-cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <a href="#" className="about-btn">
            Join the Movement
            <svg viewBox="0 0 20 20" fill="currentColor" className="about-btn-icon">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
