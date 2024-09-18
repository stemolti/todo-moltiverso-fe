/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"]
  }
}