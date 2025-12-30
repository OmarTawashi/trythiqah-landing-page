/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#e8e3ff',
          200: '#d4caff',
          300: '#b5a5ff',
          400: '#8f75ff',
          500: '#5339ba',
          600: '#4a2fa8',
          700: '#3d2589',
          800: '#332170',
          900: '#2c1d5e',
        },
      },
    },
  },
  plugins: [],
}

