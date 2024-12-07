/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", 'sans-serif'],
        fancy: ["Bodoni Moda SC", 'serif']
      },
      colors: {
        "heading": "#2d2f31",
        "slate": "#6a6f73",
        "back" : "#414141"
      }
    },
  },
  plugins: [],
}