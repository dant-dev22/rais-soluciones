'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface QuoteDesarrolloWebProps {
  isInView: boolean
}

export default function QuoteDesarrolloWeb({ isInView }: QuoteDesarrolloWebProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-rais-charcoal border border-rais-soft-gold/40 rounded-xl p-8 hover:border-rais-terracotta/30 transition-all"
      aria-labelledby="desarrollo-web-heading"
    >
      <h3 id="desarrollo-web-heading" className="text-2xl font-semibold text-rais-offwhite mb-6 text-center">
        Desarrollo Web
      </h3>

      <div className="space-y-6 mb-8 text-left">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rais-info/20 rounded-lg flex items-center justify-center text-2xl" aria-hidden>
            🌐
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rais-offwhite mb-1">
              Landing Page
            </h4>
            <p className="text-rais-terracotta text-sm font-medium mb-2">
              desde 5000 MXN (250 USD)
            </p>
            <p className="text-rais-offwhite/70 text-sm leading-relaxed mb-2">
              Diseñamos y desarrollamos una landing page clara, atractiva y enfocada en convertir. Ideal para lanzar un servicio, producto o campaña específica. Incluye diseño visual personalizado alineado a tu marca, estructura optimizada para lectura y acción, adaptación a dispositivos móviles y configuración básica para buscadores. Es una solución ligera, rápida y efectiva para tener presencia digital profesional sin complicaciones.
            </p>
            <p className="text-rais-offwhite/50 text-xs italic">
              Tiempo de entrega estimado: 7 a 10 días hábiles
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rais-terracotta/20 rounded-lg flex items-center justify-center text-2xl" aria-hidden>
            🛒
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rais-offwhite mb-1">
              E-Commerce
            </h4>
            <p className="text-rais-terracotta text-sm font-medium mb-2">
              desde 20,000 MXN
            </p>
            <p className="text-rais-offwhite/70 text-sm leading-relaxed mb-2">
              Creamos tiendas en línea pensadas para vender, no solo para verse bien. Diseñamos una experiencia clara, rápida y confiable que guía al usuario desde el primer clic hasta la compra. Incluye diseño visual personalizado alineado a tu marca, configuración completa de productos, pagos y envíos, optimización para dispositivos móviles y bases técnicas de SEO. Es la solución ideal para marcas que quieren vender en línea con una presencia sólida y escalable desde el inicio.
            </p>
            <p className="text-rais-offwhite/50 text-xs italic">
              Tiempo de entrega estimado: 3 a 5 semanas
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="https://wa.me/1234567890?text=Hola%20RAIS%20Studio!%20Quiero%20discutir%20un%20proyecto%20de%20desarrollo%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rais-success text-rais-on-accent px-8 py-4 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-105 transition-all"
        >
          💬 WhatsApp - Desarrollo Web
        </Link>
      </div>
    </motion.article>
  )
}
