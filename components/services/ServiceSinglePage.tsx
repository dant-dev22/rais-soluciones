'use client'

import ServiceLayout from '@/components/ServiceLayout'

export default function ServiceSinglePage() {
  const image = (
    <div className="w-full h-full bg-gradient-to-br from-rais-info/30 to-rais-oxide-red/20 flex items-center justify-center">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-1/3 h-1/3 text-rais-info"
        aria-hidden
      >
        <path
          d="M12 8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20h24M20 28h16M20 36h20M20 44h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )

  return (
    <ServiceLayout title="Single Page" image={image}>
      <p>
        Una <strong>single page</strong> (página única) es un sitio web que consta de un único documento HTML. 
        Todo el contenido se presenta en formato lineal y desplazable, sin navegación tradicional hacia páginas separadas. 
        Desde el punto de vista de la experiencia de usuario (UX), reduce la carga cognitiva y concentra la atención en 
        una sola narrativa.
      </p>
      <p>
        En el desarrollo web, este tipo de estructura favorece tiempos de carga más rápidos y una implementación 
        sencilla. Es ideal para presencia digital mínima: perfiles personales, presentación de un producto o servicio, 
        páginas de aterrizaje para campañas puntuales, y portfolios condensados.
      </p>
      <p>
        Opcionalmente puede incluir un formulario de contacto integrado. En RAIS Labs diseñamos single pages 
        responsive, optimizadas para distintos dispositivos y con una base sólida para SEO.
      </p>
    </ServiceLayout>
  )
}
