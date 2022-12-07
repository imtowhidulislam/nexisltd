/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-col' : "repeat(auto-fit, minmax(18rem, 1fr))",
        'grid-col1' : "repeat(auto-fit, minmax(7rem, 1fr))",
      }
    },
  },
  plugins: [],
}

