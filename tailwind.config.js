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
        heading: ['var(--font-heading)', 'Orbitron', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Exo 2', 'sans-serif'],
        body: ['var(--font-body)', 'Rajdhani', 'sans-serif'],
        outfit: ['var(--font-heading)', 'Orbitron', 'sans-serif'],
      },
      colors: {
        // Paleta principal: negro, gris oscuro, dorado, plata
        'rais-black': '#000000',
        'rais-charcoal': '#1a1a1a',
        'rais-hover': '#2a2a2a',
        'rais-offwhite': '#E5E7EB',
        'rais-text-secondary': '#9CA3AF',
        'rais-on-accent': '#FFFFFF',

        'rais-soft-gold': '#00F5FF',
        'rais-terracotta': '#C65D3B',
        'rais-silver': '#A8A8A8',

        'rais-success': '#25D366',
        'rais-warning': '#EAB308',
        'rais-error': '#EF4444',
        'rais-info': '#6B7280',
      },
    },
  },
  plugins: [],
}
