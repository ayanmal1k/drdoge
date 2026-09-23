import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

/* ── Google Font: Poppins ─────────────────────────────── */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

/* ── Local Font: Nunito (from public/) ────────────────── */
const nunito = localFont({
  src: [
    { path: '../public/Nunito-Heavy-Regular/Nunito-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-ExtraLightItalic.ttf', weight: '200', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-Black.ttf', weight: '900', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/Nunito-BlackItalic.ttf', weight: '900', style: 'italic' },
    { path: '../public/Nunito-Heavy-Regular/NunitoHeavy-Regular.ttf', weight: '950', style: 'normal' },
    { path: '../public/Nunito-Heavy-Regular/NunitoHeavy-Italic.ttf', weight: '950', style: 'italic' },
  ],
  variable: '--font-nunito',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#071f4c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/* ── Comprehensive SEO / AEO / GEO Metadata ───────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://drdoge.vip'),
  title: {
    default: 'DrDoge ($DRDOGE) — Prescribing Memes. Treating Boredom.',
    template: '%s | DrDoge',
  },
  description:
    'DrDoge ($DRDOGE) has entered the clinic. Prescribing memes, treating boredom, and chasing the moon on the way to a healthier internet. Join our premarket, explore the treatment roadmap, and join the movement.',
  applicationName: 'DrDoge',
  keywords: [
    'DrDoge',
    '$DRDOGE',
    'Dr Doge',
    'Dr Doge Coin',
    'Meme Coin',
    'Crypto Meme',
    'Prescription Memes',
    'Premarket Crypto Investment',
    'Early Investment Opportunities',
    'Solana Memes',
    'Dr Doge Treatment Plan',
    'Crypto Roadmap',
    'Healthier Internet Movement',
    'Doctor Dog Meme',
    'Telegram Crypto Community',
  ],
  authors: [{ name: 'DrDoge Medical Team', url: 'https://drdoge.vip' }],
  creator: 'DrDoge',
  publisher: 'DrDoge Movement',
  category: 'Cryptocurrency & Meme Culture',
  icons: {
    icon: [
      { url: '/paw-icon.png', sizes: 'any' },
      { url: '/paw-icon.png', type: 'image/png' },
    ],
    shortcut: '/paw-icon.png',
    apple: '/paw-icon.png',
  },
  openGraph: {
    title: 'DrDoge ($DRDOGE) — Prescribing Memes. Treating Boredom.',
    description:
      'Be part of the journey before the public launch. Join our premarket, explore the Treatment Plan roadmap, and get in early on $DRDOGE.',
    url: 'https://drdoge.vip',
    siteName: 'DrDoge',
    images: [
      {
        url: '/about-bg.avif',
        width: 1200,
        height: 630,
        alt: 'DrDoge - More Memes, A Healthier Internet',
      },
      {
        url: '/hero bg.avif',
        width: 1200,
        height: 630,
        alt: 'DrDoge Clinic and Treatment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DrDoge ($DRDOGE) — Prescribing Memes. Treating Boredom.',
    description:
      'DrDoge has entered the clinic! Join our premarket on Telegram, check out our treatment roadmap, and follow the journey to the moon.',
    site: '@dr_doge_',
    creator: '@dr_doge_',
    images: ['/about-bg.avif'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drdoge.vip',
  },
  other: {
    'geo.region': 'GLOBAL',
    'geo.placename': 'Internet',
    'ai-search:primary-topic': 'DrDoge ($DRDOGE) cryptocurrency and meme community',
    'ai-search:entity': 'DrDoge',
  },
}

/* ── JSON-LD Structured Data for AEO / GEO Engines ───── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://drdoge.vip/#organization',
      name: 'DrDoge',
      url: 'https://drdoge.vip',
      logo: 'https://drdoge.vip/DRDOGE-TETX.png',
      sameAs: [
        'https://x.com/dr_doge_',
        'https://t.me/drdoge69',
      ],
      description: 'DrDoge ($DRDOGE) combines meme culture with a mission to make the internet a happier place.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://drdoge.vip/#website',
      url: 'https://drdoge.vip',
      name: 'DrDoge ($DRDOGE)',
      publisher: { '@id': 'https://drdoge.vip/#organization' },
      description: 'Prescribing Memes. Treating Boredom. Chasing the Moon.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is DrDoge ($DRDOGE)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DrDoge ($DRDOGE) is a community-driven cryptocurrency meme token designed to prescribe happiness, treat boredom, and build a vibrant global meme ecosystem.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I participate in the DrDoge premarket?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can join the premarket and get early investment access by contacting the official Telegram at @Dr_doge69 or joining https://t.me/drdoge69.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the DrDoge Treatment Plan Roadmap?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The DrDoge roadmap consists of 4 phases: Phase 1 (Diagnosis - Website & Fair Launch), Phase 2 (Growth - Holder Base & DexScreener), Phase 3 (Expansion - CEX Listings & Partnerships), and Phase 4 (To The Moon - Mass Adoption & Beyond).',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-nunito antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
