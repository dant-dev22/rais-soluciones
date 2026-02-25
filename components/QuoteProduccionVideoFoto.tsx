// Sección de Producción de Video y Fotografía desactivada temporalmente.
// El proyecto actualmente se enfoca solo en soluciones web y e-commerce.
//
// 'use client'
//
// import { motion } from 'framer-motion'
// import Link from 'next/link'
//
// interface QuoteProduccionVideoFotoProps {
//   isInView: boolean
// }
//
// export default function QuoteProduccionVideoFoto({ isInView }: QuoteProduccionVideoFotoProps) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.6, delay: 0.4 }}
//       className="bg-rais-charcoal border border-rais-soft-gold/40 rounded-xl p-8 hover:border-rais-terracotta/30 transition-all"
//       aria-labelledby="produccion-video-foto-heading"
//     >
//       <h3 id="produccion-video-foto-heading" className="text-2xl font-semibold text-rais-offwhite mb-6 text-center">
//         Producción de Video y Fotografía
//       </h3>
//
//       <div className="space-y-6 mb-8 text-left">
//         <div className="flex items-start gap-4">
//           <div className="flex-shrink-0 w-12 h-12 bg-rais-oxide-red/20 rounded-lg flex items-center justify-center text-2xl" aria-hidden>
//             🎥
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-rais-offwhite mb-1">
//               Producción de Video
//             </h4>
//             <p className="text-rais-terracotta text-sm font-medium mb-2">
//               desde X MXN (por definir)
//             </p>
//             <p className="text-rais-offwhite/70 text-sm leading-relaxed mb-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//             <p className="text-rais-offwhite/50 text-xs italic">
//               Tiempo de entrega estimado: por definir
//             </p>
//           </div>
//         </div>
//
//         <div className="flex items-start gap-4">
//           <div className="flex-shrink-0 w-12 h-12 bg-rais-soft-gold/20 rounded-lg flex items-center justify-center text-2xl" aria-hidden>
//             📸
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-rais-offwhite mb-1">
//               Fotografía
//             </h4>
//             <p className="text-rais-terracotta text-sm font-medium mb-2">
//               desde X MXN (por definir)
//             </p>
//             <p className="text-rais-offwhite/70 text-sm leading-relaxed mb-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//             <p className="text-rais-offwhite/50 text-xs italic">
//               Tiempo de entrega estimado: por definir
//             </p>
//           </div>
//         </div>
//       </div>
//
//       <div className="text-center">
//         <Link
//           href="https://wa.me/1234567890?text=Hola%20RAIS%20Labs!%20Quiero%20discutir%20un%20proyecto%20de%20producci%C3%B3n%20de%20video%20o%20fotograf%C3%ADa"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-rais-success text-rais-on-accent px-8 py-4 rounded-lg font-semibold hover:bg-rais-success/90 hover:shadow-lg hover:shadow-rais-success/20 hover:scale-105 transition-all"
//         >
//           💬 WhatsApp - Video y Foto
//         </Link>
//       </div>
//     </motion.article>
//   )
// }
