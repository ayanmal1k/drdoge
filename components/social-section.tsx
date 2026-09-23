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

export default function SocialSection() {
  return (
    <section id="community" className="social-section">
      {/* Background Soft Cloud Glow & Subtle Paws */}
      <div className="social-bg-decorations" aria-hidden="true">
        <div className="social-paw paw-s1">
          <Image src="/paw-icon.png" alt="" width={50} height={50} className="white-paw" />
        </div>
        <div className="social-paw paw-s2">
          <Image src="/paw-icon.png" alt="" width={62} height={62} className="white-paw" />
        </div>
        <div className="social-paw paw-s3">
          <Image src="/paw-icon.png" alt="" width={44} height={44} className="white-paw" />
        </div>
      </div>

      <div className="social-container">
        {/* Title with embedded DrDoge text image */}
        <motion.div
          className="social-title-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="social-heading">
            <span className="social-heading-text">Join the</span>
            <span className="social-logo-box">
              <Image
                src="/DRDOGE-TETX.png"
                alt="DrDoge"
                width={200}
                height={70}
                className="social-drdoge-img"
                priority
              />
            </span>
            <span className="social-heading-text">Community</span>
          </h2>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          className="social-subtitle-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p className="social-sub-1">
            Be part of the movement. More memes. A healthier internet.
          </p>
          <p className="social-sub-2">
            <strong className="social-ticker">$DRDOGE</strong> | The internet&apos;s favorite doctor dog.
          </p>
        </motion.div>

        {/* Social Buttons: ONLY Telegram and X (Twitter) */}
        <motion.div
          className="social-buttons-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          {/* Telegram Button */}
          <a
            href="https://t.me/drdoge69"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-tg"
          >
            <span className="social-icon-box tg-icon-bg">
              <svg viewBox="0 0 24 24" fill="#ffffff" className="social-icon-svg">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.45 7.6l-2.02 9.53c-.15.68-.56.85-1.12.53l-3.1-2.28-1.5 1.44c-.17.17-.3.3-.62.3l.22-3.17 5.76-5.2c.25-.22-.05-.35-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12-4.63c.56-.2 1.05.13.82.99z" />
              </svg>
            </span>
            <span className="social-btn-label">Telegram</span>
          </a>

          {/* X (Twitter) Button */}
          <a
            href="https://x.com/dr_doge_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-x"
          >
            <span className="social-icon-box x-icon-bg">
              <svg viewBox="0 0 24 24" fill="#ffffff" className="social-icon-svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span className="social-btn-label">X (Twitter)</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
