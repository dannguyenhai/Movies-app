/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body':["DM Sans"],
        'sans':["sans-serif"],
        'poppins' : ['Poppins'],
      },
      colors:{
        primary:"#f62682",
        secondary:"#6F5CF1"
      }
    },
  },
  plugins: [],
}