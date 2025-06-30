/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  safelist: [
    'hover:text-[#fbbf24]',
    'hover:bg-yellow-400',
    'hover:scale-105',
    'hover:rotate-90',

    // hero section
    'bg-[#f9fafb]',
    'bg-[#1e293b]',
    'bg-[#d4af37]',
    'bg-white',
    'hover:bg-[#1e293b]',
    'hover:bg-yellow-500'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  keyframes: {
    'gradient-x': {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
}
