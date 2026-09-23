'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const features = [
  {
    icon: '/feature icons/pill.png',
    title: 'CURES BOREDOM',
    description: 'One dose of $DRDOGE a day keeps the boredom away.',
  },
  {
    icon: '/feature icons/smile.png',
    title: 'SPREADS GOOD VIBES',
    description: 'A healthier, happier internet community.',
  },
  {
    icon: '/feature icons/rocket.png',
    title: 'AIMING FOR THE MOON',
    description: 'Because memes always go further.',
  },
  {
    icon: '/feature icons/community.png',
    title: 'A STRONGER COMMUNITY',
    description: 'Powered by meme lovers, for meme lovers.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="feature-card"
            variants={itemVariants}
          >
            <div className="feature-icon">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="feature-icon-img"
              />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
