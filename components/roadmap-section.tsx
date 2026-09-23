'use client'

import Image from 'next/image'
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const phases = [
  {
    phase: 'Phase 1',
    title: 'Diagnosis',
    icon: '/roadmap-icons/pill.png',
    items: ['Launch Website', 'Build Community', 'Fair Launch', 'Initial Marketing'],
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    icon: '/roadmap-icons/community.png',
    items: ['Grow Holder Base', 'Community Campaigns', 'Influencer Outreach', 'Get on DexScreener'],
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    icon: '/roadmap-icons/chart.png',
    items: ['CEX Listings', 'Partnerships', 'Bigger Marketing', 'Global Community'],
  },
  {
    phase: 'Phase 4',
    title: 'To The Moon',
    icon: '/roadmap-icons/rocket.png',
    items: ['Mass Adoption', 'More Use Cases', 'A Healthier Internet', 'The Moon and Beyond'],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="roadmap-section">
      {/* Top Arc Divider */}
      <div className="roadmap-top-arc" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 0C480 70 960 70 1440 0V80H0V0Z" fill="#083884" />
        </svg>
      </div>

      {/* Floating White Paw Prints & Sparkles */}
      <div className="roadmap-bg-decorations" aria-hidden="true">
        <div className="roadmap-paw paw-r1">
          <Image src="/paw-icon.png" alt="" width={56} height={56} className="white-paw" />
        </div>
        <div className="roadmap-paw paw-r2">
          <Image src="/paw-icon.png" alt="" width={44} height={44} className="white-paw" />
        </div>
        <div className="roadmap-paw paw-r3">
          <Image src="/paw-icon.png" alt="" width={64} height={64} className="white-paw" />
        </div>
        <div className="roadmap-paw paw-r4">
          <Image src="/paw-icon.png" alt="" width={40} height={40} className="white-paw" />
        </div>
        
        {/* Star Sparkles */}
        <span className="roadmap-sparkle sparkle-1">&#10022;</span>
        <span className="roadmap-sparkle sparkle-2">&#10022;</span>
        <span className="roadmap-sparkle sparkle-3">&#10022;</span>
        <span className="roadmap-sparkle sparkle-4">&#10022;</span>
      </div>

      <div className="roadmap-container">
        {/* Header */}
        <motion.div
          className="roadmap-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <span className="roadmap-tagline">ROADMAP</span>
          <h2 className="roadmap-title">
            Treatment <span className="roadmap-title-accent">Plan</span>
          </h2>
        </motion.div>

        {/* Main Grid: Left Timeline + Right Moon Rocket Image */}
        <div className="roadmap-grid">
          {/* Left: 4 Phases Timeline */}
          <div className="roadmap-left">
            {/* Connecting Track (Desktop) */}
            <div className="roadmap-track-line" aria-hidden="true">
              <span className="roadmap-track-arrow">&rarr;</span>
            </div>

            <div className="roadmap-phases-grid">
              {phases.map((item, index) => (
                <motion.div
                  key={index}
                  className="roadmap-phase-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                >
                  {/* Circular White Icon Container */}
                  <div className="roadmap-icon-circle">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={38}
                      height={38}
                      className="roadmap-phase-icon"
                    />
                  </div>

                  {/* Phase Label & Title */}
                  <div className="roadmap-phase-header">
                    <span className="roadmap-phase-num">{item.phase}</span>
                    <h3 className="roadmap-phase-title">{item.title}</h3>
                  </div>

                  {/* Checklist Items */}
                  <ul className="roadmap-checklist">
                    {item.items.map((checkItem, checkIndex) => (
                      <li key={checkIndex} className="roadmap-check-item">
                        <svg className="roadmap-check-box" viewBox="0 0 20 20" fill="none">
                          <rect x="1.5" y="1.5" width="17" height="17" rx="3.5" stroke="#FFD233" strokeWidth="2" fill="rgba(10, 40, 100, 0.4)" />
                          <path d="M5.5 10L8.5 13L14.5 7" stroke="#FFD233" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{checkItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Rocket to Moon Image (NO text on right) */}
          <motion.div
            className="roadmap-right"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="roadmap-img-wrapper">
              <Image
                src="/roadmap.png"
                alt="DrDoge Going To The Moon"
                width={700}
                height={700}
                className="roadmap-rocket-img"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Arc into Social Section */}
      <div className="roadmap-bottom-arc" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path d="M0 0C480 80 960 80 1440 0V90H0V0Z" fill="#dcf2fd" />
        </svg>
      </div>
    </section>
  )
}
