'use client'

import ServiceLayout from '@/components/ServiceLayout'

export default function ServiceEcommerceGestion() {
  const image = (
    <div className="w-full h-full bg-gradient-to-br from-rais-terracotta/20 to-rais-soft-gold/20 flex items-center justify-center">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-1/3 h-1/3 text-rais-terracotta"
        aria-hidden
      >
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
    </div>
  )

  return (
    <ServiceLayout title="E-commerce y Apps de Gestión" image={image}>
      <p>
        El <strong>e-commerce</strong> engloba las transacciones comerciales realizadas por internet. Un sitio de 
        comercio electrónico típicamente incluye catálogo de productos, carrito de compras, procesamiento de pagos 
        y gestión de pedidos. Es la solución para marcas que quieren vender en línea con una experiencia clara, 
        segura y escalable.
      </p>
      <p>
        Las <strong>apps de gestión</strong> son sistemas web para administrar datos de negocio: inventarios, 
        registros de participantes (por ejemplo, torneos o eventos), citas, paneles internos, reportes y más. 
        Centralizan la información y automatizan tareas que antes se hacían en hojas de cálculo o sistemas dispersos.
      </p>
      <p>
        En RAIS Labs desarrollamos tanto tiendas en línea completas como aplicaciones de gestión a medida. 
        Cada proyecto se diseña según tus procesos reales, con interfaz clara para tus equipos y usuarios finales.
      </p>
    </ServiceLayout>
  )
}
