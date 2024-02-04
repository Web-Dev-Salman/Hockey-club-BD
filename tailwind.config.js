/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'slider1': "url('./images/1.png')",
          'slider2': "url('/Images/2.png')",
          'slider3': "url('/Images/3.png')",
        }
      },
    },
    plugins: [],
  }