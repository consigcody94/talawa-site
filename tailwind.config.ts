import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#006400',
        'primary-gold': '#FFD700',
        'primary-black': '#1a1a1a',
        'earth-forest': '#228B22',
        'earth-sand': '#F5DEB3',
        'emerald': '#50C878',
        'accent-ocean': '#20B2AA',
        'accent-sunset': '#FF6B6B',
        'accent-coral': '#FF7F50',
        'luxury-gold': '#D4AF37',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        shadows: ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
