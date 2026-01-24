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
        // RAIS Studio Design System
        'rais-black': '#0E0E0E',
        'rais-charcoal': '#1A1A1A',
        'rais-offwhite': '#F4F3EF',
        'rais-terracotta': '#C4623A',
        'rais-oxide-red': '#8E2C1E',
        'rais-soft-gold': '#C9A96A',
        'rais-success': '#3F6F52',
        'rais-warning': '#C98B2B',
        'rais-error': '#9B2C2C',
        'rais-info': '#3A5A7A',
        // Legacy support (will be removed)
        'pew-orange': '#C4623A', // Mapped to terracotta
      },
    },
  },
  plugins: [],
}

