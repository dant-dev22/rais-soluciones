/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // RAIS Studio Design System - Earthy & luminous
        // Base
        'rais-black': '#EEF2EC', // Sage Light (primary bg)
        'rais-charcoal': '#F3EFE7', // Warm Beige (secondary bg)
        'rais-offwhite': '#1F2A22', // Deep Soil (primary text)
        'rais-on-accent': '#FDFCFA', // Text on CTAs / colored bg

        // Primary accent - Clay Orange
        'rais-terracotta': {
          DEFAULT: '#B85E3C',
          hover: '#C46A45',
          active: '#A35435',
        },

        // Secondary accents
        'rais-oxide-red': '#3E5F4B', // Forest Green
        'rais-soft-gold': '#D8C9A8', // Soft Sand

        // UI states - Natural
        'rais-success': '#4F7A5A',
        'rais-warning': '#C8A24D',
        'rais-error': '#9E3A2F',
        'rais-info': '#5A7D7C',

        'pew-orange': '#B85E3C', // → Clay Orange
      },
    },
  },
  plugins: [],
}
