/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },

      fontFamily: {
        firaCode: "'Fira Code', monospace",
        rubikMono: "'Rubik Mono One', sans-serif"
      },

      colors: {
        primaryColor: "#552E27",
        secondaryColor: "#EEC39A",
        thirdColor: "#D9A066",
        darkColor: "#DF7126"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
      type: "pie",
    }),
  ],
}