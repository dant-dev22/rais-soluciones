'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Quote from '@/components/Quote'
import Contact from '@/components/Contact'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RAIS Labs',
            description: 'Agencia de soluciones digitales enfocada en desarrollo web y e-commerce',
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
        <Contact />
        <Testimonial />
      </div>
    </>
  )
}
