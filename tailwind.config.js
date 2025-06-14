/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
    'pulse-slow': 'pulse 4s infinite',
    'bounce-slow': 'bounce 3s infinite',
  },
    },
  },
  plugins: [],
}