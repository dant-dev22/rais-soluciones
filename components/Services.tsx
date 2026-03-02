'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    icon: '📄',
    title: 'Single Page',
    href: '/servicios/single-page',
    description:
      'Página de una sola vista, ideal para presentar tu proyecto o servicio de forma clara y directa.',
    features: ['Diseño responsive', 'Optimización básica', 'Carga rápida'],
    iconBg: 'bg-rais-info/20',
  },
  {
    icon: '🌐',
    title: 'Landing Page',
    href: '/servicios/landing-page',
    description:
      'Landing page con varias secciones o pestañas, diseñada para convertir visitas en acciones concretas.',
    features: ['Estructura orientada a conversión', 'Adaptada a móviles', 'SEO base'],
    iconBg: 'bg-rais-oxide-red/20',
  },
  {
    icon: '🛒',
    title: 'E-commerce y Apps de Gestión',
    href: '/servicios/ecommerce-gestion',
    description:
      'Tiendas online y sistemas de administración de datos para inventarios, registros y paneles internos.',
    features: ['Tienda en línea', 'Gestión de datos e inventario', 'Paneles y reportes'],
    iconBg: 'bg-rais-terracotta/20',
  },
]

const CARD_ANIMATIONS = [
  { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const anim = CARD_ANIMATIONS[index % CARD_ANIMATIONS.length]

  return (
    <motion.div
      ref={ref}
      initial={anim.initial}
      animate={isInView ? anim.animate : anim.initial}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-rais-charcoal border border-rais-soft-gold/40 rounded-2xl p-6 hover:border-rais-terracotta/50 hover:shadow-lg hover:shadow-rais-terracotta/10 hover:scale-[1.02] transition-all duration-200"
    >
      <div className={`mb-4 h-32 ${service.iconBg} rounded-xl flex items-center justify-center border border-rais-soft-gold/30`}>
        <span className="text-5xl">{service.icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-rais-offwhite mb-3">{service.title}</h3>
      <p className="text-rais-offwhite/70 text-sm mb-4">{service.description}</p>
      <div className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rais-terracotta" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-rais-offwhite/80">{feature}</span>
          </div>
        ))}
      </div>
      <Link
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2 rounded-lg bg-rais-terracotta text-rais-on-accent text-sm font-semibold hover:bg-rais-terracotta/90 hover:shadow-lg hover:shadow-rais-terracotta/20 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 text-center"
      >
        Saber Más
      </Link>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 bg-rais-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-rais-offwhite mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-rais-offwhite/70 text-lg"
          >
            Soluciones digitales especializadas adaptadas a tus necesidades
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
