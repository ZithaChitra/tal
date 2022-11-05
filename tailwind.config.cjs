/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray-1": "#f4f4f4",
        "tal-text-gray": "#4d4d4f"
      }
    },
  },
  plugins: [],
}
