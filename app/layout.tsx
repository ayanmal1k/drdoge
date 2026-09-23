import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'DrDoge',
  description: 'DrDoge - Premium Web Experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <body className="font-nunito antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
