'use client'

import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '@/utils/whatsapp'

interface QuoteDesarrolloWebProps {
  isInView: boolean
}

const PACKAGES = [
  {
    id: 'single-page',
    title: 'Single Page',
    priceMxn: 3000,
    priceUsd: 150,
    description:
      'Una página sencilla de una sola vista, ideal para presencia digital mínima y directa. Incluye diseño responsive y optimización básica. Puedes agregar formulario de contacto con costo adicional.',
    delivery: '5 a 7 días hábiles',
    iconBg: 'bg-rais-info/20',
    iconColor: '#5A7D7C',
    Icon: () => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden>
        <path
          d="M12 8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 20h24M20 28h16M20 36h20M20 44h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    priceMxn: 5000,
    priceUsd: 250,
    description:
      'Página con varias secciones o pestañas, clara y enfocada en conversión. Ideal para lanzar un servicio, producto o campaña. Incluye diseño visual personalizado, estructura optimizada y adaptación móvil. Formulario de contacto opcional con costo adicional.',
    delivery: '7 a 10 días hábiles',
    iconBg: 'bg-rais-oxide-red/20',
    iconColor: '#3E5F4B',
    Icon: () => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden>
        <path
          d="M8 12h20v8H8zM8 28h20v8H8zM8 44h20v8H8z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M36 12h20v40H36z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'ecommerce-gestion',
    title: 'E-commerce y Apps de Gestión',
    priceMxn: 12000,
    priceUsd: 600,
    description:
      'Tiendas en línea completas con pagos, inventario y analytics. También desarrollamos aplicaciones de administración de datos: formularios de registro para torneos, gestión de inventario, control de citas, sistemas internos para negocios y más. Solución escalable y a medida.',
    delivery: '3 a 5 semanas',
    iconBg: 'bg-rais-terracotta/20',
    iconColor: '#B85E3C',
    Icon: () => (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden>
        <circle cx="24" cy="44" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="44" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M8 20h48l-6 24H14L8 20z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20V12a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M24 36h16M28 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

function PackageCard({
  pkg,
  index,
  isInView,
}: {
  pkg: (typeof PACKAGES)[0]
  index: number
  isInView: boolean
}) {
  const { Icon } = pkg
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col bg-rais-charcoal border border-rais-soft-gold/40 rounded-xl p-6 sm:p-8 hover:border-rais-terracotta/30 transition-all h-full"
      aria-labelledby={`pkg-${pkg.id}-title`}
    >
      <div
        className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${pkg.iconBg} flex items-center justify-center mb-6 mx-auto`}
        style={{ color: pkg.iconColor }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14">
          <Icon />
        </div>
      </div>

      <h4
        id={`pkg-${pkg.id}-title`}
        className="font-outfit text-xl sm:text-2xl font-bold text-rais-offwhite text-center mb-4"
      >
        {pkg.title}
      </h4>

      <div className="mb-4 text-center">
        <div className="flex items-baseline justify-center gap-2 font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-rais-terracotta tracking-tight">
          <span className="text-sm sm:text-base text-rais-offwhite/70">desde</span>
          <span>${pkg.priceMxn.toLocaleString('es-MX')} MXN</span>
        </div>
        <div className="mt-1 flex items-baseline justify-center gap-2 font-outfit text-lg sm:text-xl text-rais-offwhite/70">
          <span className="text-xs sm:text-sm text-rais-offwhite/70">desde</span>
          <span>{pkg.priceUsd.toLocaleString()} USD</span>
        </div>
      </div>

      <p className="text-rais-offwhite/75 text-sm sm:text-base leading-relaxed flex-grow mb-4">
        {pkg.description}
      </p>
      <p className="text-rais-offwhite/50 text-xs italic">
        Entrega estimada: {pkg.delivery}
      </p>

      <div className="mt-6">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 bg-rais-success text-rais-on-accent px-6 py-3 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-[1.02] transition-all text-sm sm:text-base"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Cotiza ahora tu proyecto
        </a>
      </div>
    </motion.article>
  )
}

export default function QuoteDesarrolloWeb({ isInView }: QuoteDesarrolloWebProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 mb-10">
        {PACKAGES.map((pkg, index) => (
          <PackageCard key={pkg.id} pkg={pkg} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}
