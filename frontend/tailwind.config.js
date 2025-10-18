/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Example primary color
        secondary: '#6c757d', // Example secondary color
        accent: '#28a745', // Example accent color
        background: '#f8f9fa', // Light background
        text: '#343a40', // Dark text
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
