import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con PEW Studio. Completa el formulario y nos pondremos en contacto contigo pronto para tus proyectos digitales.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | PEW Studio',
    description: 'Contacta con PEW Studio. Completa el formulario y nos pondremos en contacto contigo pronto.',
    url: 'https://pewstudio.com/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

