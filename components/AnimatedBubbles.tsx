'use client'

import { motion, useScroll, useTransform, useAnimationFrame } from 'framer-motion'
import { useMotionValue, useMotionTemplate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface BubbleProps {
  size: number
  initialX: number
  initialY: number
  delay: number
  duration: number
  scrollY: any
  index: number
}

// Estilos de las burbujas - RAIS Studio Design System
const BUBBLE_STYLES = {
  // Colores y opacidades - Clay Orange (#B85E3C), terrosa y luminosa
  color: {
    primary: 'rgba(184, 94, 60, 0.1)',
    secondary: 'rgba(184, 94, 60, 0.18)',
    shadow: 'rgba(184, 94, 60, 0.04)',
    shadowInset: 'rgba(184, 94, 60, 0.03)',
  },
  // Opacidades para animación
  opacity: {
    min: 0.08,
    max: 0.12,
    initial: 0.08,
    animation: [0.08, 0.12, 0.1, 0.11, 0.09, 0.11, 0.08],
  },
  // Escalas para animación
  scale: {
    animation: [1, 1.08, 0.92, 1.05, 0.95, 1.02, 1],
  },
  // Multiplicadores para sombras
  shadowMultipliers: {
    outer: 0.4,
    inner: 0.2,
  },
}

const Bubble = ({ size, initialX, initialY, delay, duration, scrollY, index }: BubbleProps) => {
  // Intensificar el movimiento basado en el scroll
  const scrollIntensity = useTransform(scrollY, [0, 1000], [0, 1])
  
  // Movimiento con scroll - diferentes direcciones y velocidades para variedad
  const scrollYOffset = useTransform(scrollY, (value: number) => {
    const intensity = Math.min(value / 2000, 1)
    const baseSpeed = 0.2 + intensity * 0.4
    return value * baseSpeed * (index % 2 === 0 ? 1 : -1)
  })
  
  const scrollXOffset = useTransform(scrollY, (value: number) => {
    const intensity = Math.min(value / 2000, 1)
    const baseSpeed = 0.15 + intensity * 0.3
    return value * baseSpeed * (index % 3 === 0 ? 1 : -1)
  })
  
  // Valores de rebote animados
  const bounceX = useMotionValue(0)
  const bounceY = useMotionValue(0)
  const time = useRef(0)
  
  // Combinar movimiento de scroll con rebote
  const finalX = useMotionTemplate`calc(${scrollXOffset}px + ${bounceX}px)`
  const finalY = useMotionTemplate`calc(${scrollYOffset}px + ${bounceY}px)`
  
  // Animación de rebote suave usando useAnimationFrame
  useAnimationFrame((t) => {
    const intensity = scrollIntensity.get()
    const baseRange = 40
    const maxRange = 90
    const range = baseRange + intensity * (maxRange - baseRange)
    const speed = 1 / duration
    
    time.current = t / 1000
    
    // Patrones de rebote suaves y naturales
    const bouncePatternX = Math.sin(time.current * speed * 2 + delay) * range
    const bouncePatternY = Math.cos(time.current * speed * 2.3 + delay) * range * 0.8
    
    bounceX.set(bouncePatternX)
    bounceY.set(bouncePatternY)
  })

  const [hasFadedIn, setHasFadedIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasFadedIn(true)
    }, 1200 + delay * 150) // Tiempo del fade in + delay

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
        x: finalX,
        y: finalY,
        background: `radial-gradient(circle, ${BUBBLE_STYLES.color.primary} 0%, ${BUBBLE_STYLES.color.secondary} 60%, transparent 100%)`,
        boxShadow: `0 0 ${size * BUBBLE_STYLES.shadowMultipliers.outer}px ${BUBBLE_STYLES.color.shadow}, inset 0 0 ${size * BUBBLE_STYLES.shadowMultipliers.inner}px ${BUBBLE_STYLES.color.shadowInset}`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        hasFadedIn
          ? {
              opacity: BUBBLE_STYLES.opacity.animation,
              scale: BUBBLE_STYLES.scale.animation,
            }
          : {
              opacity: BUBBLE_STYLES.opacity.initial,
              scale: 1,
            }
      }
      transition={
        hasFadedIn
          ? {
              opacity: {
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              scale: {
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }
          : {
              opacity: {
                duration: 1.2,
                delay: delay * 0.15,
                ease: 'easeOut',
              },
              scale: {
                duration: 1.2,
                delay: delay * 0.15,
                ease: 'easeOut',
              },
            }
      }
    />
  )
}

export default function AnimatedBubbles() {
  const { scrollY } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  // Más burbujas distribuidas por toda la pantalla
  const bubbles = [
    { size: 120, initialX: 10, initialY: 10, delay: 0, duration: 8 },
    { size: 180, initialX: 85, initialY: 15, delay: 1, duration: 10 },
    { size: 150, initialX: 50, initialY: 25, delay: 0.5, duration: 12 },
    { size: 100, initialX: 20, initialY: 60, delay: 2, duration: 9 },
    { size: 160, initialX: 75, initialY: 55, delay: 1.5, duration: 11 },
    { size: 140, initialX: 40, initialY: 75, delay: 2.5, duration: 13 },
    { size: 110, initialX: 90, initialY: 80, delay: 0.8, duration: 7 },
    { size: 130, initialX: 60, initialY: 5, delay: 3, duration: 10 },
    { size: 95, initialX: 5, initialY: 40, delay: 1.2, duration: 8.5 },
    { size: 170, initialX: 95, initialY: 45, delay: 2.2, duration: 11.5 },
    { size: 125, initialX: 30, initialY: 90, delay: 0.3, duration: 9.5 },
    { size: 145, initialX: 65, initialY: 35, delay: 1.8, duration: 10.5 },
  ]

  // Cargar las burbujas después de que todo el contenido se haya montado
  useEffect(() => {
    // Esperar a que el DOM esté completamente listo
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        height: '200vh', // Cubrir más altura para el scroll
        width: '100%',
      }}
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          size={bubble.size}
          initialX={bubble.initialX}
          initialY={bubble.initialY}
          delay={bubble.delay}
          duration={bubble.duration}
          scrollY={scrollY}
          index={index}
        />
      ))}
    </div>
  )
}

