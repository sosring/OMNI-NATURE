/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: '#ffffff',
      secoundary: '#f59b48',
      title: '#444f57',
      footer: '#fffdfa',
      highlight: '#3d9cde'
    },
    extend: {
      fontFamily: {
        raleway: ['raleway'],
        poppins: ['poppins'],
        oswald: ['oswald'],
        montserrat: ['montserrat']
      },

      height: {
        '250': '250px',
        '450': '450px',
        '650': '650px'
      }
    },
  },
  plugins: [],
}
