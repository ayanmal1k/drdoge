'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Investment', href: '#early-investment' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: DrDoge Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <Image
            src="/DRDOGE-TETX.png"
            alt="DrDoge"
            width={130}
            height={44}
            className="navbar-logo-img"
            priority
          />
        </a>

        {/* Middle: Desktop Navlinks */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Social Buttons (X and Telegram with white icons) */}
        <div className="navbar-socials">
          <a
            href="https://t.me/drdoge69"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social-btn navbar-tg"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="navbar-icon-svg">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.45 7.6l-2.02 9.53c-.15.68-.56.85-1.12.53l-3.1-2.28-1.5 1.44c-.17.17-.3.3-.62.3l.22-3.17 5.76-5.2c.25-.22-.05-.35-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12-4.63c.56-.2 1.05.13.82.99z" />
            </svg>
          </a>

          <a
            href="https://x.com/dr_doge_"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social-btn navbar-x"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="navbar-icon-svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mobile-socials-divider" />

            <div className="mobile-socials-row">
              <a
                href="https://t.me/drdoge69"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn mobile-tg"
                onClick={closeMenu}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="navbar-icon-svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.45 7.6l-2.02 9.53c-.15.68-.56.85-1.12.53l-3.1-2.28-1.5 1.44c-.17.17-.3.3-.62.3l.22-3.17 5.76-5.2c.25-.22-.05-.35-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12-4.63c.56-.2 1.05.13.82.99z" />
                </svg>
                <span>Telegram</span>
              </a>

              <a
                href="https://x.com/dr_doge_"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn mobile-x"
                onClick={closeMenu}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="navbar-icon-svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X (Twitter)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
