import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
import Footer from '@/components/Footer'
import AnimatedBubbles from '@/components/AnimatedBubbles'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: {
    default: 'RAIS Labs - Soluciones Digitales',
    template: '%s | RAIS Labs',
  },
  description: 'Agencia de soluciones digitales enfocada en desarrollo web y e-commerce. Soluciones con ritmo y técnica. Contacta con nosotros para tu proyecto.',
  keywords: ['agencia digital', 'desarrollo web', 'sitios web', 'e-commerce', 'RAIS Labs'],
  authors: [{ name: 'RAIS Labs' }],
  creator: 'RAIS Labs',
  publisher: 'RAIS Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://raisstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://raisstudio.com',
    title: 'RAIS Labs - Soluciones Digitales',
    description: 'Agencia de soluciones digitales enfocada en desarrollo web y e-commerce.',
    siteName: 'RAIS Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAIS Labs - Soluciones Digitales',
    description: 'Agencia de soluciones digitales enfocada en desarrollo web y e-commerce.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${outfit.variable}`}>
        <Header />
        <main className="min-h-screen relative">
          {children}
        </main>
        <Footer />
        <AnimatedBubbles />
        <CookieBanner />
      </body>
    </html>
  )
}

