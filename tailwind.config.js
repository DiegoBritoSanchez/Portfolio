/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './core/templates/**/*.html',
    './projects/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        DarkOrchid: "#9932CC",
        Lavender: "#E6E6FA",
      },
    },
  },
  plugins: [],
}

