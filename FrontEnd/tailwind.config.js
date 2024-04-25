/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "Class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}