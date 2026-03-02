'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '@/utils/whatsapp'

export interface ServiceExample {
  url: string
  title: string
  description: string
}

interface ServiceLayoutProps {
  title: string
  image: ReactNode
  children: ReactNode
  examples?: ServiceExample[]
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const transition = { duration: 0.5, ease: 'easeOut' as const }

const PLACEHOLDER_EXAMPLE: ServiceExample = {
  url: '#',
  title: 'Próximamente',
  description: 'Más ejemplos de nuestros trabajos en breve.',
}

/**
 * Layout base para páginas de servicios.
 * Distribución: imagen grande a un lado, descripción al otro.
 * Incluye sección "Ejemplos" con carrusel de cards.
 */
export default function ServiceLayout({ title, image, children, examples = [] }: ServiceLayoutProps) {
  const showPlaceholders = examples.length === 0
  const carouselItems = showPlaceholders
    ? [PLACEHOLDER_EXAMPLE, { ...PLACEHOLDER_EXAMPLE, title: 'Ejemplo próximamente' }]
    : [...examples, ...(examples.length < 2 ? [PLACEHOLDER_EXAMPLE] : [])]

  return (
    <>
    <section className="py-12 sm:py-16 md:py-24 bg-rais-black min-h-[60vh]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-rais-charcoal border border-rais-soft-gold/40 shadow-xl">
              {image}
            </div>
          </motion.div>
          <div className="order-1 lg:order-2 space-y-6">
            <motion.h1
              className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-rais-offwhite"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.1 }}
            >
              {title}
            </motion.h1>
            <motion.div
              className="text-rais-offwhite/80 leading-relaxed space-y-4 text-base sm:text-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              {children}
            </motion.div>
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-rais-success text-rais-on-accent px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Cotiza ahora tu proyecto
            </motion.a>
          </div>
        </div>
      </div>
    </section>

    <section id="ejemplos" className="py-12 sm:py-16 md:py-20 bg-rais-charcoal border-t border-rais-soft-gold/20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-rais-offwhite mb-8 text-center">
          Algunos de nuestros trabajos
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rais-soft-gold/40 scrollbar-track-transparent">
            {carouselItems.map((item, index) => {
              const isPlaceholder = item.url === '#'
              const cardContent = (
                <div
                  className={`rounded-xl overflow-hidden border border-rais-soft-gold/40 bg-rais-black transition-all duration-200 h-full ${
                    !isPlaceholder ? 'hover:border-rais-terracotta/50 hover:shadow-lg hover:shadow-rais-terracotta/10 cursor-pointer' : 'opacity-80'
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-rais-charcoal to-rais-soft-gold/10 flex items-center justify-center">
                    {isPlaceholder ? (
                      <span className="text-rais-offwhite/40 text-sm">Ejemplo</span>
                    ) : (
                      <span className="text-rais-terracotta/60 text-xs font-medium">Ver proyecto</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-rais-offwhite text-base mb-2">{item.title}</h3>
                    <p className="text-rais-offwhite/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
              return isPlaceholder ? (
                <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center">
                  {cardContent}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center block"
                >
                  {cardContent}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
