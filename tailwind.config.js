/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone500: {max: '500px' },
      phone700: {min: '501px', max: '700px' },
      phone1000: {min: '701px', max: '1700px' },
    },
  },
  plugins: [],
};
