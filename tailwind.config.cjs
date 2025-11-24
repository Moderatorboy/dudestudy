/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // **important** for manual dark/light toggle
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',   // cyan
        secondary: '#8b5cf6', // violet
        accent: '#f472b6',    // pink
      },
      animation: {
        gradientShift: 'gradientShift 8s ease infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
