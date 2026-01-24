// RAIS Studio Design System - Color Tokens
// Single source of truth for all colors

export const RAIS_COLORS = {
  // Core colors
  BLACK: '#0E0E0E',
  CHARCOAL: '#1A1A1A',
  OFFWHITE: '#F4F3EF',
  
  // Primary accent (brand signature)
  TERRACOTTA: '#C4623A',
  
  // Secondary accents (use sparingly, never together)
  OXIDE_RED: '#8E2C1E',
  SOFT_GOLD: '#C9A96A',
  
  // UI state colors
  SUCCESS: '#3F6F52',
  WARNING: '#C98B2B',
  ERROR: '#9B2C2C',
  INFO: '#3A5A7A',
} as const

// Tailwind color format (for use in className)
export const RAIS_COLORS_TW = {
  black: 'rais-black',
  charcoal: 'rais-charcoal',
  offwhite: 'rais-offwhite',
  terracotta: 'rais-terracotta',
  oxideRed: 'rais-oxide-red',
  softGold: 'rais-soft-gold',
  success: 'rais-success',
  warning: 'rais-warning',
  error: 'rais-error',
  info: 'rais-info',
} as const
