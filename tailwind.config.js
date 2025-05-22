/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f4',
          100: '#d8eee2',
          200: '#b3ddc6',
          300: '#7bcfa6',
          400: '#4ab483',
          500: '#2a9969',
          600: '#1a7e53',
          700: '#00714b',
          800: '#0d5237',
          900: '#0a442f',
          950: '#05291c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};