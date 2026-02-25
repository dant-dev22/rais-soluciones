'use client'

import ServiceLayout from '@/components/ServiceLayout'

export default function ServiceLandingPage() {
  const image = (
    <div className="w-full h-full bg-gradient-to-br from-rais-oxide-red/20 to-rais-soft-gold/20 flex items-center justify-center">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-1/3 h-1/3 text-rais-oxide-red"
        aria-hidden
      >
        <path
          d="M8 12h20v8H8zM8 28h20v8H8zM8 44h20v8H8z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 12h20v40H36z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )

  return (
    <ServiceLayout title="Landing Page" image={image}>
      <p>
        Una <strong>landing page</strong> es una página web creada específicamente para una campaña de marketing o 
        publicidad. A diferencia de una single page minimalista, suele incluir varias secciones (hero, características, 
        testimonios, llamado a la acción) organizadas para guiar al visitante hacia una acción principal: la conversión.
      </p>
      <p>
        Se diseña con optimización de conversión (CRO) en mente. Cada sección tiene una función: captar atención, 
        comunicar valor, generar confianza y motivar el clic o el formulario. Puede tener varias pestañas o bloques 
        desplazables según la complejidad del mensaje.
      </p>
      <p>
        El formulario de contacto es opcional y puede añadirse con costo adicional. En RAIS Labs desarrollamos 
        landing pages con diseño visual personalizado, estructura optimizada para lectura y acción, adaptación móvil 
        y bases de SEO para que tu campaña tenga presencia visible en buscadores.
      </p>
    </ServiceLayout>
  )
}
