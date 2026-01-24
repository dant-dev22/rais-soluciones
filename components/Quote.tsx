'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

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
              <div className="w-12 h-12 rounded-full bg-rais-terracotta flex items-center justify-center text-rais-offwhite font-bold">
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
              {/* Sección 1: Desarrollo Web / Landing Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-rais-charcoal border border-rais-charcoal/50 rounded-xl p-8 hover:border-rais-terracotta/30 transition-all"
              >
                <h3 className="text-2xl font-semibold text-rais-offwhite mb-6 text-center">
                  Desarrollo Web
                </h3>
                
                <div className="space-y-6 mb-8 text-left">
                  {/* Landing Page */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rais-info/20 rounded-lg flex items-center justify-center text-2xl">
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

                  {/* E-commerce */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rais-terracotta/20 rounded-lg flex items-center justify-center text-2xl">
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
              </motion.div>

              {/* Sección 2: Producción de Video / Fotografía */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-rais-charcoal border border-rais-charcoal/50 rounded-xl p-8 hover:border-rais-terracotta/30 transition-all"
              >
                <h3 className="text-2xl font-semibold text-rais-offwhite mb-6 text-center">
                  Producción de Video y Fotografía
                </h3>
                
                <div className="space-y-6 mb-8 text-left">
                  {/* Producción de Video */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rais-oxide-red/20 rounded-lg flex items-center justify-center text-2xl">
                      🎥
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-rais-offwhite mb-2">
                        Producción de Video
                      </h4>
                      <p className="text-rais-offwhite/70 text-sm leading-relaxed">
                        Videos profesionales para eventos, comerciales y contenido digital que destacan tu marca. Incluye edición profesional, motion graphics y post-producción de alta calidad para comunicar tu mensaje de manera impactante.
                      </p>
                    </div>
                  </div>

                  {/* Fotografía */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rais-soft-gold/20 rounded-lg flex items-center justify-center text-2xl">
                      📸
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-rais-offwhite mb-2">
                        Fotografía
                      </h4>
                      <p className="text-rais-offwhite/70 text-sm leading-relaxed">
                        Fotografía profesional para eventos, productos y contenido de marca de alta calidad. Capturamos momentos únicos y creamos imágenes que transmiten la esencia de tu negocio con estilo y profesionalismo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://wa.me/1234567890?text=Hola%20RAIS%20Studio!%20Quiero%20discutir%20un%20proyecto%20de%20producci%C3%B3n%20de%20video%20o%20fotograf%C3%ADa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-rais-success text-rais-offwhite px-8 py-4 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-105 transition-all"
                  >
                    💬 WhatsApp - Video y Foto
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
