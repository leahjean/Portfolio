/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'inkblot': "url('/inkblot-bg.jpg')",
        'abstract': "url('/abstract-bw-bg.jpg')"
      },
      fontFamily: {
        'sans': ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}