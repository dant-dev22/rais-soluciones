'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import QuoteDesarrolloWeb from './QuoteDesarrolloWeb'

export default function Quote() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-rais-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto text-center"
        >
          <div id="listo-para-comenzar">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-rais-offwhite mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-rais-offwhite/70 mb-12 text-lg">
              Obtén una cotización gratis y discute tu proyecto con nuestro equipo. Estamos a un mensaje de distancia.
            </p>

            <div className="space-y-16">
              <QuoteDesarrolloWeb isInView={isInView} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
