// RAIS Studio Design System - Color Tokens
// Earthy & luminous palette — root, origin, growth
// Single source of truth for all colors

export const RAIS_COLORS = {
  // Base - Light backgrounds & dark text
  BLACK: '#EEF2EC', // Sage Light (primary bg)
  CHARCOAL: '#F3EFE7', // Warm Beige (secondary bg)
  OFFWHITE: '#1F2A22', // Deep Soil (primary text)

  // Text on accent (CTAs, logos on colored bg)
  ON_ACCENT: '#FDFCFA',

  // Primary accent (brand) - Clay Orange
  TERRACOTTA: '#B85E3C',

  // Secondary accents
  OXIDE_RED: '#3E5F4B', // Forest Green (structural emphasis)
  SOFT_GOLD: '#D8C9A8', // Soft Sand (details, separators, badges)

  // UI states - Natural range
  SUCCESS: '#4F7A5A', // Moss
  WARNING: '#C8A24D', // Ochre
  ERROR: '#9E3A2F', // Earth Red
  INFO: '#5A7D7C', // River Slate
} as const

// Clay Orange interactive states
export const CLAY_ORANGE_STATES = {
  DEFAULT: '#B85E3C',
  HOVER: '#C46A45',
  ACTIVE: '#A35435',
} as const

// Tailwind color format (for use in className)
export const RAIS_COLORS_TW = {
  black: 'rais-black',
  charcoal: 'rais-charcoal',
  offwhite: 'rais-offwhite',
  onAccent: 'rais-on-accent',
  terracotta: 'rais-terracotta',
  oxideRed: 'rais-oxide-red',
  softGold: 'rais-soft-gold',
  success: 'rais-success',
  warning: 'rais-warning',
  error: 'rais-error',
  info: 'rais-info',
} as const
