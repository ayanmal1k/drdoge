'use client'

import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Investment', href: '#early-investment' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
]

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left Side: DrDoge Logo & Tagline */}
        <div className="footer-left">
          <div className="footer-logo">
            <Image
              src="/DRDOGE-TETX.png"
              alt="DrDoge"
              width={140}
              height={48}
              className="footer-logo-img"
            />
          </div>
          <p className="footer-tagline">
            Prescribing Memes. Treating Boredom. Chasing the Moon.
          </p>
        </div>

        {/* Right Side: Links & Copyright */}
        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="footer-bottom-row">
            <span className="footer-copyright">
              &copy; {new Date().getFullYear()} DrDoge. All rights reserved.
            </span>
            <Image
              src="/paw-icon.png"
              alt=""
              width={20}
              height={20}
              className="footer-paw-icon"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
