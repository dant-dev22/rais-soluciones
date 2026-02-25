'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Estilos modulares del formulario - RAIS Labs Design System
const FORM_STYLES = {
  colors: {
    inputBorder: 'border-rais-soft-gold/40',
    inputBorderFocus: 'border-rais-terracotta',
    inputBorderError: 'border-rais-error',
    inputBg: 'bg-rais-charcoal',
    inputText: 'text-rais-offwhite',
    inputPlaceholder: 'placeholder:text-rais-offwhite/40',
    label: 'text-rais-offwhite/90',
    error: 'text-rais-error',
    successBg: 'bg-rais-success/20',
    successBorder: 'border-rais-success/50',
    successText: 'text-rais-success',
    button: 'bg-rais-terracotta',
    buttonHover: 'hover:bg-rais-terracotta/90',
    buttonText: 'text-rais-on-accent',
  },
  spacing: {
    section: 'py-16 sm:py-20 md:py-24',
    container: 'max-w-2xl',
    form: 'space-y-4 sm:space-y-6',
    field: 'mb-2',
  },
  sizes: {
    input: 'px-3 sm:px-4 py-2 sm:py-3',
    button: 'px-6 sm:px-8 py-3 sm:py-4',
    text: {
      title: 'text-3xl sm:text-4xl md:text-5xl',
      description: 'text-sm sm:text-base',
      label: 'text-sm',
      input: 'text-sm sm:text-base',
      button: 'text-base sm:text-lg',
      error: 'text-xs sm:text-sm',
    },
  },
  effects: {
    focusRing: 'focus:ring-2 focus:ring-rais-terracotta',
    transition: 'transition-colors',
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<{ email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    <section id="contacto" ref={ref} className={`${FORM_STYLES.spacing.section} bg-rais-charcoal`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className={`${FORM_STYLES.spacing.container} mx-auto`}
        >
          <h2 className={`${FORM_STYLES.sizes.text.title} font-bold text-rais-offwhite mb-3 sm:mb-4 text-center`}>
            Contacto
          </h2>
          <p className={`${FORM_STYLES.sizes.text.description} ${FORM_STYLES.colors.label} mb-6 sm:mb-8 text-center`}>
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${FORM_STYLES.colors.successBg} ${FORM_STYLES.colors.successBorder} ${FORM_STYLES.colors.successText} px-4 py-3 rounded mb-6`}
            >
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className={FORM_STYLES.spacing.form}>
            <div>
              <label htmlFor="contact-nombre" className={`block ${FORM_STYLES.sizes.text.label} font-medium ${FORM_STYLES.colors.label} ${FORM_STYLES.spacing.field}`}>
                Nombre
              </label>
              <input
                type="text"
                id="contact-nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full ${FORM_STYLES.sizes.input} ${FORM_STYLES.sizes.text.input} ${FORM_STYLES.colors.inputBg} ${FORM_STYLES.colors.inputText} ${FORM_STYLES.colors.inputPlaceholder} border ${FORM_STYLES.colors.inputBorder} rounded-lg ${FORM_STYLES.effects.focusRing} focus:outline-none focus:border-transparent ${FORM_STYLES.effects.transition}`}
                required
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={`block ${FORM_STYLES.sizes.text.label} font-medium ${FORM_STYLES.colors.label} ${FORM_STYLES.spacing.field}`}>
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${FORM_STYLES.sizes.input} ${FORM_STYLES.sizes.text.input} ${FORM_STYLES.colors.inputBg} ${FORM_STYLES.colors.inputText} ${FORM_STYLES.colors.inputPlaceholder} border rounded-lg ${FORM_STYLES.effects.focusRing} focus:outline-none focus:border-transparent ${FORM_STYLES.effects.transition} ${
                  errors.email ? FORM_STYLES.colors.inputBorderError : FORM_STYLES.colors.inputBorder
                }`}
                required
              />
              {errors.email && (
                <p className={`mt-1 ${FORM_STYLES.sizes.text.error} ${FORM_STYLES.colors.error}`}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-mensaje" className={`block ${FORM_STYLES.sizes.text.label} font-medium ${FORM_STYLES.colors.label} ${FORM_STYLES.spacing.field}`}>
                Mensaje
              </label>
              <textarea
                id="contact-mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={5}
                className={`w-full ${FORM_STYLES.sizes.input} ${FORM_STYLES.sizes.text.input} ${FORM_STYLES.colors.inputBg} ${FORM_STYLES.colors.inputText} ${FORM_STYLES.colors.inputPlaceholder} border ${FORM_STYLES.colors.inputBorder} rounded-lg ${FORM_STYLES.effects.focusRing} focus:outline-none focus:border-transparent resize-none ${FORM_STYLES.effects.transition}`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full ${FORM_STYLES.colors.button} ${FORM_STYLES.colors.buttonText} ${FORM_STYLES.sizes.button} rounded-lg font-semibold ${FORM_STYLES.sizes.text.button} ${FORM_STYLES.colors.buttonHover} ${FORM_STYLES.effects.transition}`}
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
