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
      className="bg-rais-charcoal border border-rais-charcoal/50 rounded-xl p-8 hover:border-rais-terracotta/30 transition-all"
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
            <h4 className="text-lg font-semibold text-rais-offwhite mb-2">
              Landing Page
            </h4>
            <p className="text-rais-offwhite/70 text-sm leading-relaxed">
              Una página web enfocada en convertir visitantes en clientes. Diseñada para presentar tu producto o servicio de manera clara y persuasiva, con un diseño limpio que guía al usuario hacia una acción específica: contacto, registro o compra.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rais-terracotta/20 rounded-lg flex items-center justify-center text-2xl" aria-hidden>
            🛒
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rais-offwhite mb-2">
              E-Commerce
            </h4>
            <p className="text-rais-offwhite/70 text-sm leading-relaxed">
              Tu tienda online completa con catálogo de productos, carrito de compras, integración de pagos y gestión de pedidos. Una solución completa para vender tus productos o servicios de forma profesional y segura en internet.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="https://wa.me/1234567890?text=Hola%20RAIS%20Studio!%20Quiero%20discutir%20un%20proyecto%20de%20desarrollo%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rais-success text-rais-offwhite px-8 py-4 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-105 transition-all"
        >
          💬 WhatsApp - Desarrollo Web
        </Link>
      </div>
    </motion.article>
  )
}
