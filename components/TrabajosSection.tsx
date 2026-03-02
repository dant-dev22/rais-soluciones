'use client'

export interface TrabajoExample {
  url: string
  title: string
  description: string
}

const PLACEHOLDER: TrabajoExample = {
  url: '#',
  title: 'Próximamente',
  description: 'Más ejemplos de nuestros trabajos en breve.',
}

const HOMEPAGE_EXAMPLES: TrabajoExample[] = [
  {
    url: 'https://torneoaztlan.com',
    title: 'Torneo Aztlan',
    description:
      'Gestión de registro y gestión de participantes para el Torneo Aztlan de Jiu Jitsu Brasileño.',
  },
  PLACEHOLDER,
  { ...PLACEHOLDER, title: 'Ejemplo próximamente' },
]

export default function TrabajosSection() {
  const items = HOMEPAGE_EXAMPLES

  return (
    <section
      id="trabajos"
      className="py-12 sm:py-16 md:py-20 bg-rais-charcoal border-t border-rais-soft-gold/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-rais-offwhite mb-8 text-center">
          Algunos de nuestros trabajos
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rais-soft-gold/40 scrollbar-track-transparent">
            {items.map((item, index) => {
              const isPlaceholder = item.url === '#'
              const cardContent = (
                <div
                  className={`rounded-xl overflow-hidden border border-rais-soft-gold/40 bg-rais-black transition-all duration-200 h-full ${
                    !isPlaceholder
                      ? 'hover:border-rais-terracotta/50 hover:shadow-lg hover:shadow-rais-terracotta/10 cursor-pointer'
                      : 'opacity-80'
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-rais-charcoal to-rais-soft-gold/10 flex items-center justify-center">
                    {isPlaceholder ? (
                      <span className="text-rais-offwhite/40 text-sm">Ejemplo</span>
                    ) : (
                      <span className="text-rais-terracotta/60 text-xs font-medium">Ver proyecto</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-rais-offwhite text-base mb-2">{item.title}</h3>
                    <p className="text-rais-offwhite/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
              return isPlaceholder ? (
                <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center">
                  {cardContent}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center block"
                >
                  {cardContent}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
