'use client'

import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/utils/scroll'
import Logo from '@/components/Logo'

export default function Hero() {
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    smoothScrollTo('listo-para-comenzar', 100)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo: más grande y animado de arriba a abajo */}
          <div className="flex justify-center">
            <Logo
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 text-rais-terracotta"
              animated
            />
          </div>

          {/* Título: entra desde la derecha */}
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-rais-offwhite leading-tight"
          >
            Crecemos tu idea{' '}
            <span className="text-rais-terracotta">
              desde la raíz
            </span>
          </motion.h1>

          {/* Descripción: entra desde la izquierda */}
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-rais-offwhite/70 max-w-2xl mx-auto"
          >
            Desarrollamos sitios web y soluciones e-commerce para construir tu presencia digital.
          </motion.p>

          {/* Botón: entra desde abajo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={handleCTAClick}
              className="inline-block bg-rais-terracotta text-rais-on-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rais-terracotta/90 hover:shadow-lg hover:shadow-rais-terracotta/20 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200"
            >
              Inicia Tu Proyecto <span className="ml-2">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
