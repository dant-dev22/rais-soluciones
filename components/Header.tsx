'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/utils/scroll'
import Logo from '@/components/Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    smoothScrollTo(sectionId, 80)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-rais-black/98 backdrop-blur-sm border-b border-rais-soft-gold/40"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:scale-[1.02] transition-transform duration-200" aria-label="RAIS Labs - Ir al inicio">
          <Logo className="w-10 h-10 text-rais-terracotta shrink-0" />
          <span className="text-xl sm:text-2xl font-bold text-rais-offwhite">RAIS Labs</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          <a
            href="#servicios"
            onClick={(e) => handleNavClick(e, 'servicios')}
            className="text-sm lg:text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
          >
            Servicios
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="text-sm lg:text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
          >
            Portfolio
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="text-sm lg:text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-110 transition-all duration-200"
          aria-label="Abrir o cerrar menú"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rais-charcoal border-t border-rais-soft-gold/40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, 'servicios')}
              className="text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className="text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="text-base text-rais-offwhite/80 hover:text-rais-terracotta hover:scale-105 transition-all duration-200 cursor-pointer inline-block"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}

