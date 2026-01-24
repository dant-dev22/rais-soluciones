'use client'

import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/utils/scroll'

export default function Hero() {
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    smoothScrollTo('listo-para-comenzar', 100)
  }
  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 bg-rais-terracotta rounded-lg flex items-center justify-center">
              <span className="text-rais-offwhite font-bold text-2xl">R</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-rais-offwhite leading-tight"
          >
            Crecemos tu idea{' '}
            <span className="text-rais-terracotta">
              desde la raíz
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-rais-offwhite/70 max-w-2xl mx-auto"
          >
            Video, foto, web y e-commerce para construir tu presencia digital.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={handleCTAClick}
              className="inline-block bg-rais-terracotta text-rais-offwhite px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rais-terracotta/90 hover:shadow-lg hover:shadow-rais-terracotta/20 hover:-translate-y-0.5 transition-all"
            >
              Inicia Tu Proyecto <span className="ml-2">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
