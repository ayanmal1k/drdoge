'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

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

const floatPaw: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const features = [
  {
    icon: (
      /* Google Noto / Material Lightning Bolt */
      <svg className="invest-feature-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.08-.13L14.2 3.5h1.3l-1 7h3.5c.48 0 .56.35.34.66-.21.31-.05.08-.09.14L11 21z" />
      </svg>
    ),
    title: 'EXCLUSIVE ACCESS',
    description: 'Get in before the public launch.',
  },
  {
    icon: (
      /* Google Noto / Material Stacked Coins */
      <svg className="invest-feature-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.85 0 8 1.09 8 1s-3.15 1-8 1-8-.09-8-1 3.15-1 8-1zm-8 4.28c1.78.84 4.7 1.22 8 1.22s6.22-.38 8-1.22V10c0 .91-3.15 2-8 2s-8-1.09-8-2V8.28zm0 4.5c1.78.84 4.7 1.22 8 1.22s6.22-.38 8-1.22V14.5c0 .91-3.15 2-8 2s-8-1.09-8-2v-1.72zm0 4.5c1.78.84 4.7 1.22 8 1.22s6.22-.38 8-1.22V19c0 .91-3.15 2-8 2s-8-1.09-8-2v-1.72z" />
      </svg>
    ),
    title: 'BETTER ENTRY PRICE',
    description: 'Maximize your potential gains.',
  },
  {
    icon: (
      /* Google Noto / Material Shield Verified */
      <svg className="invest-feature-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: 'SECURE & TRUSTED',
    description: 'Transparent process. Your investment matters.',
  },
]

export default function EarlyInvestmentSection() {
  return (
    <section id="early-investment" className="invest-section">
      {/* Scattered background paw prints */}
      <div className="invest-bg-paws" aria-hidden="true">
        <motion.div variants={floatPaw} initial="initial" whileInView="animate" className="invest-paw paw-1">
          <Image src="/paw-icon.png" alt="" width={60} height={60} />
        </motion.div>
        <motion.div variants={floatPaw} initial="initial" whileInView="animate" className="invest-paw paw-2">
          <Image src="/paw-icon.png" alt="" width={48} height={48} />
        </motion.div>
        <motion.div variants={floatPaw} initial="initial" whileInView="animate" className="invest-paw paw-3">
          <Image src="/paw-icon.png" alt="" width={54} height={54} />
        </motion.div>
        <motion.div variants={floatPaw} initial="initial" whileInView="animate" className="invest-paw paw-4">
          <Image src="/paw-icon.png" alt="" width={70} height={70} />
        </motion.div>
        <motion.div variants={floatPaw} initial="initial" whileInView="animate" className="invest-paw paw-5">
          <Image src="/paw-icon.png" alt="" width={42} height={42} />
        </motion.div>
      </div>

      <div className="invest-container">
        {/* Main Content: Left Text & Right Image */}
        <div className="invest-hero-grid">
          {/* Left Column */}
          <div className="invest-left">
            {/* Premarket Badge with SVG yellow brush and comic tick marks */}
            <motion.div
              className="invest-badge-wrapper"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              {/* Left 3 accent dashes */}
              <svg className="invest-tick-left" viewBox="0 0 28 20" fill="none">
                <path d="M24 16L4 18" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M26 10L6 9" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M22 4L8 2" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
              </svg>

              <div className="invest-badge-box">
                {/* Yellow brush shape */}
                <svg className="invest-badge-bg" viewBox="0 0 160 48" fill="none" preserveAspectRatio="none">
                  <path
                    d="M6 12C20 4 140 2 154 10C160 14 158 36 150 42C136 48 18 46 8 40C0 34 2 16 6 12Z"
                    fill="#FFD233"
                  />
                  <path
                    d="M10 8C35 3 130 1 150 7C158 10 156 38 148 43C128 47 25 46 10 39C3 34 3 14 10 8Z"
                    fill="#FFE066"
                    opacity="0.6"
                  />
                </svg>
                <span className="invest-badge-text">PREMARKET</span>
              </div>

              {/* Right 3 accent dashes */}
              <svg className="invest-tick-right" viewBox="0 0 28 20" fill="none">
                <path d="M4 16L24 18" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M2 10L22 9" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M6 4L20 2" stroke="#102a5c" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="invest-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Early Investment
              <br />
              <span>Opportunities!</span>
            </motion.h2>

            {/* Paragraph Description */}
            <motion.div
              className="invest-desc"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <p>Be part of the journey before the public launch.</p>
              <p>Join our premarket and get in early on <strong className="invest-ticker">$DRDOGE</strong>.</p>
              <p>Limited spots. Don&apos;t miss the chance!</p>
            </motion.div>

            {/* CTA Button & Sub-label */}
            <motion.div
              className="invest-cta-wrapper"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <div className="invest-btn-container">
                {/* Yellow bottom accent/swoosh */}
                <svg className="invest-btn-swoosh" viewBox="0 0 320 20" fill="none">
                  <path
                    d="M10 12C60 18 260 19 310 10"
                    stroke="#FFD233"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest-btn"
                >
                  <span className="invest-tg-circle">
                    <svg viewBox="0 0 24 24" fill="#ffffff" className="invest-tg-icon">
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.45 7.6l-2.02 9.53c-.15.68-.56.85-1.12.53l-3.1-2.28-1.5 1.44c-.17.17-.3.3-.62.3l.22-3.17 5.76-5.2c.25-.22-.05-.35-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12-4.63c.56-.2 1.05.13.82.99z" />
                    </svg>
                  </span>
                  <span className="invest-btn-text">CONTACT ON TELEGRAM</span>
                  <span className="invest-arrow-icon">&rarr;</span>
                </a>
              </div>

              {/* Hand-drawn curved arrow & details note */}
              <div className="invest-note-row">
                <svg className="invest-curved-arrow" viewBox="0 0 42 32" fill="none">
                  <path
                    d="M8 6C14 22 28 26 38 24"
                    stroke="#1d54b8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 6L6 5L8 14"
                    stroke="#1d54b8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="invest-note-text">FOR EARLY ACCESS & INVESTMENT DETAILS</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Doge Character Investment Image (Clean, no floating text on right) */}
          <motion.div
            className="invest-right"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="invest-img-wrapper">
              <Image
                src="/investment.png"
                alt="DrDoge Early Investment"
                width={800}
                height={700}
                className="invest-char-img"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: 4 Features with Dividers */}
        <motion.div
          className="invest-features-bar"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          {features.map((item, index) => (
            <div key={index} className="invest-feature-item">
              <div className="invest-feature-icon-circle">
                {item.icon}
              </div>
              <h3 className="invest-feature-title">{item.title}</h3>
              <p className="invest-feature-desc">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
