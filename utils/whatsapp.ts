const WHATSAPP_NUMBER = '3313258905'
const COUNTRY_CODE = '52'

/**
 * Genera el enlace de WhatsApp para abrir chat con RAIS Labs.
 * @param message Mensaje opcional predefinido (se codifica en URL).
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = 'Hola RAIS Labs! Quiero cotizar mi proyecto.'
  const text = message ?? defaultMessage
  const encoded = encodeURIComponent(text)
  return `https://wa.me/${COUNTRY_CODE}${WHATSAPP_NUMBER}?text=${encoded}`
}
