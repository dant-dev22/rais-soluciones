'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🌐',
    title: 'Landing Pages',
    description: 'Páginas limpias, rápidas y enfocadas en conversión que cuentan tu historia y generan acción.',
    features: [
      'Diseño Responsive',
      'Optimizado para SEO',
      'Tiempos de Carga Rápidos',
    ],
    iconBg: 'bg-rais-info/20',
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    description: 'Soluciones completas de tienda online con integración de pagos, gestión de inventario y más.',
    features: [
      'Pagos Seguros',
      'Gestión de Inventario',
      'Panel de Analytics',
    ],
    iconBg: 'bg-rais-terracotta/20',
  },
  {
    icon: '🎥',
    title: 'Producción de Video',
    description: 'Videos profesionales para eventos, comerciales y contenido digital que destacan tu marca.',
    features: [
      'Edición Profesional',
      'Motion Graphics',
      'Post-Producción',
    ],
    iconBg: 'bg-rais-oxide-red/20',
  },
  {
    icon: '📸',
    title: 'Fotografía',
    description: 'Fotografía profesional para eventos, productos y contenido de marca de alta calidad.',
    features: [
      'Fotografía de Eventos',
      'Product Photography',
      'Retoque Profesional',
    ],
    iconBg: 'bg-rais-soft-gold/20',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-rais-charcoal border border-rais-charcoal/50 rounded-2xl p-6 hover:border-rais-terracotta/50 hover:shadow-lg hover:shadow-rais-terracotta/10 transition-all"
    >
      <div className={`mb-4 h-32 ${service.iconBg} rounded-xl flex items-center justify-center border border-rais-charcoal/30`}>
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
      <button className="w-full py-2 rounded-lg bg-rais-terracotta text-rais-offwhite text-sm font-semibold hover:bg-rais-terracotta/90 hover:shadow-lg hover:shadow-rais-terracotta/20 hover:-translate-y-0.5 transition-all">
        Saber Más
      </button>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 bg-rais-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rais-offwhite mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-rais-offwhite/70 text-lg">
          Soluciones digitales especializadas adaptadas a tus necesidades
          </p>
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
