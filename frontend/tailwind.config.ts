import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'solar-yellow': '#f59e0b',
        'solar-yellow-dark': '#d97706',
        'solar-yellow-light': '#fbbf24',
        'sky-solar': '#0ea5e9',
        'sky-solar-dark': '#0284c7',
        'sky-solar-light': '#38bdf8',
        charcoal: '#0f172a',
        'charcoal-light': '#1e293b',
        'charcoal-muted': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
