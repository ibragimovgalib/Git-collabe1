/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone:{max : "500px" },
      phone2:{max : "700px" },
    },
  },
  plugins: [],
};
