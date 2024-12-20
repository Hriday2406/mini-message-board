/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Roboto"', "sans-serif"],
        mono: ['"Roboto Mono"', "serif"],
        script: ['"Dancing Script"', "serif"],
      },
    },
  },
  plugins: [],
};
