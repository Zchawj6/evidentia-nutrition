/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#1A6B72', light: '#E8F4F5', dark: '#0D4A50' },
        navy: '#1A1A2E',
        mid: '#4A4A6A',
        muted: '#888899',
        surface: '#F7FAFA',
        border: '#E2E8E8',
        rating: {
          strong: '#1A6B72',
          moderate: '#2E6DA4',
          emerging: '#7B5EA7',
          insufficient: '#888888',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
