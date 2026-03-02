'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'rais-cookies-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored !== null) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    sessionStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    sessionStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 sm:px-6 sm:py-5 bg-rais-charcoal border-t border-rais-soft-gold/40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
        >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h2 id="cookie-banner-title" className="font-outfit font-semibold text-rais-offwhite text-sm sm:text-base mb-1">
            Uso de cookies
          </h2>
          <p id="cookie-banner-desc" className="text-rais-offwhite/70 text-xs sm:text-sm">
            Utilizamos cookies para mejorar tu experiencia en el sitio. Al continuar, aceptas el uso de cookies según nuestra política. Tu respuesta se guarda durante esta sesión.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 rounded-lg text-sm font-medium text-rais-offwhite/80 hover:text-rais-offwhite border border-rais-soft-gold/50 hover:border-rais-terracotta/50 hover:scale-[1.02] transition-all duration-200"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-rais-terracotta text-rais-on-accent hover:bg-rais-terracotta/90 hover:scale-[1.02] transition-all duration-200"
          >
            Aceptar
          </button>
        </div>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  )
}
