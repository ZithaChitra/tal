/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tal-gray-100": "#f4f4f4",
        "tal-gray-200": "#4d4d4f",
        "tal-black-100": "#4d4d4f",
        "tal-blue-200": "#0b79bf",
        "tal-pink-200": "#f4697a",
        "tal-green-200": "#1c8644", 
      },
      fontSize: {
        "sm": "13px",
      }
    },
  },
  plugins: [],
}
