'use client'

export default function Testimonial() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-rais-charcoal border-t border-rais-soft-gold/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-rais-offwhite/80 text-lg sm:text-xl mb-6 italic">
            &quot;Nuestro equipo combina experiencia técnica con creatividad cultural para entregar experiencias digitales excepcionales.&quot;
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-12 rounded-full bg-rais-terracotta flex items-center justify-center text-rais-on-accent font-bold">
              MR
            </div>
            <div className="text-left">
              <p className="font-semibold text-rais-offwhite text-sm">Marco Rivera</p>
              <p className="text-xs text-rais-offwhite/60">Fundador & Desarrollador Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
