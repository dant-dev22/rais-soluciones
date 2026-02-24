'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import QuoteDesarrolloWeb from './QuoteDesarrolloWeb'
import QuoteProduccionVideoFoto from './QuoteProduccionVideoFoto'

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
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div>
            <p className="text-rais-offwhite/80 text-lg sm:text-xl mb-6 italic">
              "Nuestro equipo combina experiencia técnica con creatividad cultural para entregar experiencias digitales excepcionales."
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-12 h-12 rounded-full bg-rais-terracotta flex items-center justify-center text-rais-on-accent font-bold">
                MR
              </div>
              <div className="text-left">
                <p className="font-semibold text-rais-offwhite text-sm">Marco Rivera</p>
                <p className="text-xs text-rais-offwhite/60">Fundador & Desarrollador Principal</p>
              </div>
            </div>
          </div>

          <div id="listo-para-comenzar" className="pt-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-rais-offwhite mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-rais-offwhite/70 mb-12 text-lg">
              Obtén una cotización gratis y discute tu proyecto con nuestro equipo. Estamos a un mensaje de distancia.
            </p>

            <div className="space-y-12">
              <QuoteDesarrolloWeb isInView={isInView} />
              <QuoteProduccionVideoFoto isInView={isInView} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
