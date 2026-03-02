'use client'

import { useState, FormEvent } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<{ email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const newErrors: { email?: string } = {}
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', formData)
      setSubmitted(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      
      // Resetear el mensaje de éxito después de 3 segundos
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpiar error de email cuando el usuario empiece a escribir
    if (name === 'email' && errors.email) {
      setErrors({})
    }
  }

  return (
    <div className="pt-16 sm:pt-20 pb-12 sm:pb-20">
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-20 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rais-offwhite mb-3 sm:mb-4">
          Contacto
        </h1>
        <p className="text-sm sm:text-base text-rais-text-secondary mb-6 sm:mb-8">
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </p>

        {submitted && (
          <div className="bg-rais-success/20 border border-rais-success/50 text-rais-success px-4 py-3 rounded mb-6">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-rais-offwhite mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-rais-charcoal bg-rais-charcoal text-rais-offwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-rais-terracotta focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-rais-offwhite mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-rais-terracotta focus:border-transparent bg-rais-charcoal text-rais-offwhite ${
                errors.email ? 'border-rais-error' : 'border-rais-charcoal'
              }`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-rais-error">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-rais-offwhite mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-rais-charcoal bg-rais-charcoal text-rais-offwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-rais-terracotta focus:border-transparent resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rais-terracotta text-rais-on-accent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-rais-terracotta-hover hover:scale-[1.02] transition-all duration-200"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  )
}

