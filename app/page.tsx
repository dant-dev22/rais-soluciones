'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Quote from '@/components/Quote'
import Contact from '@/components/Contact'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

function SectionWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      {/* Main Image Display */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-rais-charcoal border border-rais-charcoal/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-rais-charcoal border border-rais-charcoal/50 flex items-center justify-center">
              <span className="text-base sm:text-lg md:text-xl text-rais-offwhite/60">
                {images[currentImageIndex]}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-rais-charcoal/90 hover:bg-rais-charcoal border border-rais-terracotta/30 hover:border-rais-terracotta shadow-lg transition-colors z-10 text-rais-offwhite hover:text-rais-terracotta"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-rais-charcoal/90 hover:bg-rais-charcoal border border-rais-terracotta/30 hover:border-rais-terracotta shadow-lg transition-colors z-10 text-rais-offwhite hover:text-rais-terracotta"
              aria-label="Siguiente imagen"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-rais-charcoal/90 border border-rais-terracotta/30 text-rais-offwhite text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-rais-terracotta scale-105'
                  : 'border-transparent hover:border-rais-charcoal/50'
              }`}
            >
              <div className="w-full h-full bg-rais-charcoal border border-rais-charcoal/50 flex items-center justify-center">
                <span className="text-xs text-rais-offwhite/60">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 1', 'Imagen 2 - Proyecto 1', 'Imagen 3 - Proyecto 1'],
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 2', 'Imagen 2 - Proyecto 2'],
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 3', 'Imagen 2 - Proyecto 3', 'Imagen 3 - Proyecto 3', 'Imagen 4 - Proyecto 3'],
    },
    {
      id: 4,
      title: 'Proyecto 4',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 4', 'Imagen 2 - Proyecto 4'],
    },
    {
      id: 5,
      title: 'Proyecto 5',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 5', 'Imagen 2 - Proyecto 5', 'Imagen 3 - Proyecto 5'],
    },
    {
      id: 6,
      title: 'Proyecto 6',
      description: 'Descripción del proyecto y servicios realizados',
      images: ['Imagen 1 - Proyecto 6'],
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative">
      {/* Carrusel Container */}
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ImageGallery
              images={projects[currentIndex].images}
              title={projects[currentIndex].title}
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-rais-offwhite mb-2">
                {projects[currentIndex].title}
              </h3>
              <p className="text-sm sm:text-base text-rais-offwhite/70">
                {projects[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevProject}
          className="p-3 rounded-full bg-rais-charcoal border border-rais-terracotta/30 shadow-lg hover:bg-rais-terracotta text-rais-offwhite hover:text-rais-on-accent transition-colors"
          aria-label="Proyecto anterior"
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
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-rais-terracotta w-8'
                  : 'bg-rais-charcoal/50 hover:bg-rais-charcoal border border-rais-terracotta/20'
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          className="p-3 rounded-full bg-rais-charcoal border border-rais-terracotta/30 shadow-lg hover:bg-rais-terracotta text-rais-offwhite hover:text-rais-on-accent transition-colors"
          aria-label="Siguiente proyecto"
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
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RAIS Studio',
            description: 'Agencia de soluciones digitales y producción de video/foto',
            url: 'https://raisstudio.com',
            logo: 'https://raisstudio.com/logo.png',
            sameAs: [
              'https://www.instagram.com/raisstudio',
              'https://www.facebook.com/raisstudio',
              'https://www.linkedin.com/company/raisstudio',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              url: 'https://raisstudio.com#contacto',
            },
          }),
        }}
      />
      <div className="pt-0">
        <Hero />
        <Services />
        <Quote />

        {/* Galería de Proyectos de Imagen Section */}
        <SectionWrapper>
          <section id="portfolio" className="container mx-auto px-4 py-12 sm:py-16 md:py-24 bg-rais-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rais-offwhite mb-8 sm:mb-12 text-center">
                Galería de Proyectos de Imagen
              </h2>
              <ProjectCarousel />
            </div>
          </section>
        </SectionWrapper>

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  )
}
