import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBubbles from '@/components/AnimatedBubbles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'RAIS Studio - Soluciones Digitales',
    template: '%s | RAIS Studio',
  },
  description: 'Agencia de soluciones digitales y producción de video/foto. Web, e-commerce, video y foto para eventos. Soluciones digitales con ritmo y técnica. Contacta con nosotros para tu proyecto.',
  keywords: ['agencia digital', 'producción video', 'fotografía eventos', 'desarrollo web', 'e-commerce', 'RAIS Studio'],
  authors: [{ name: 'RAIS Studio' }],
  creator: 'RAIS Studio',
  publisher: 'RAIS Studio',
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
    title: 'RAIS Studio - Soluciones Digitales',
    description: 'Agencia de soluciones digitales y producción de video/foto. Web, e-commerce, video y foto para eventos.',
    siteName: 'RAIS Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAIS Studio - Soluciones Digitales',
    description: 'Agencia de soluciones digitales y producción de video/foto. Web, e-commerce, video y foto para eventos.',
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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen relative">
          {children}
        </main>
        <Footer />
        <AnimatedBubbles />
      </body>
    </html>
  )
}

