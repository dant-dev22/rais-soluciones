'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface TrabajoExample {
  url: string
  title: string
  description: string
  /** Texto en la imagen del card (ej. "Ver proyecto", "Página web"). Por defecto: "Ver proyecto" */
  overlayLabel?: string
}

const PLACEHOLDER: TrabajoExample = {
  url: '#',
  title: 'Próximamente',
  description: 'Más ejemplos de nuestros trabajos en breve.',
}

const HOMEPAGE_EXAMPLES: TrabajoExample[] = [
  {
    url: 'https://torneoaztlan.com',
    title: 'Torneo Aztlan',
    description:
      'Gestión de registro y gestión de participantes para el Torneo Aztlan de Jiu Jitsu Brasileño.',
    overlayLabel: 'Página web',
  },
  PLACEHOLDER,
  { ...PLACEHOLDER, title: 'Ejemplo próximamente' },
]

const CARD_TRANSITION = { duration: 0.5, ease: 'easeOut' as const }

function TrabajoCard({
  item,
  index,
}: {
  item: TrabajoExample
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-80px', amount: 0.2 })
  const fromLeft = index % 2 === 0
  const initialX = fromLeft ? -80 : 80

  const isPlaceholder = item.url === '#'
  const cardContent = (
    <div
      className={`rounded-xl overflow-hidden border border-rais-soft-gold bg-transparent transition-all duration-200 h-full ${
        !isPlaceholder
          ? 'hover:border-rais-soft-gold hover:bg-rais-hover hover:shadow-lg cursor-pointer'
          : 'opacity-80'
      }`}
    >
        <div className="aspect-video bg-gradient-to-br from-rais-charcoal to-rais-soft-gold/10 flex items-center justify-center">
        {isPlaceholder ? (
          <span className="text-rais-offwhite/40 text-sm">Ejemplo</span>
        ) : (
          <svg className="w-12 h-12 text-rais-soft-gold/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-rais-offwhite text-base mb-2">{item.title}</h3>
        <p className="text-rais-offwhite/70 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )

  const wrapperClass = 'flex-shrink-0 w-[280px] sm:w-[320px] snap-center'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
      transition={{ ...CARD_TRANSITION, delay: index * 0.08 }}
      className={wrapperClass}
    >
      {isPlaceholder ? (
        cardContent
      ) : (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </a>
      )}
    </motion.div>
  )
}

export default function TrabajosSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: false, margin: '-60px' })

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 md:py-20 bg-rais-charcoal border-t border-rais-soft-gold"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, x: -60 }}
          animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={CARD_TRANSITION}
          className="text-2xl sm:text-3xl font-bold text-rais-offwhite mb-8 text-center"
        >
          Algunos de nuestros trabajos
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="trabajos-carousel flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {HOMEPAGE_EXAMPLES.map((item, index) => (
              <TrabajoCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
