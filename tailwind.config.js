/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#05555A',
        'primary-400': '#08848C',
        'primary-300': '#0AB2BC',
        'primary-200': '#0DE0ED',
        'primary-100': '#39E9F4',
        'primary-50': '#E7F7F8',
        'secondary-50': '#F9F6F6',
        'secondary-100': '#D9D9D9',
        'secondary-200': '#605D5D'
      },
    },
  },
  plugins: [],
}
