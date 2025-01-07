import type { Config } from 'tailwindcss'

export default {
  content: ['./src/app.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
} satisfies Config
