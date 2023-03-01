/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {

    fontFamily: {
      raleway: ['raleway'],
      poppins: ['poppins'],
      oswald: ['oswald'],
      montserrat: ['montserrat']
    },

    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#ffffff',
        secoundary: '#f59b48',
        title: '#444f57',
        footer: '#fffdfa',
        highlight: '#3d9cde',
        disabled: '#00000047' 
      },

      height: {
        '250': '250px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '600': '600px',
        '650': '650px'
      }
    },
  },
  plugins: [],
}
