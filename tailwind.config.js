/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Sora', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        outfit: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Cyberpunk-tech design system
        'rais-black': '#0B0F1A',
        'rais-charcoal': '#111827',
        'rais-offwhite': '#E5E7EB',
        'rais-text-secondary': '#9CA3AF',
        'rais-on-accent': '#0B0F1A',

        'rais-terracotta': {
          DEFAULT: '#00F5FF',
          hover: '#33F7FF',
          active: '#00D4DE',
        },

        'rais-oxide-red': '#FF00C8',
        'rais-soft-gold': '#FF00C8',

        'rais-success': '#22C55E',
        'rais-warning': '#EAB308',
        'rais-error': '#EF4444',
        'rais-info': '#3B82F6',

        'pew-orange': '#00F5FF',
      },
    },
  },
  plugins: [],
}
