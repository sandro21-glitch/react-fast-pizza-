/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Mono, monospace"],
      },
      colors: {
        'lightYellow': "#EAB308",
      },
    },
  },
  plugins: [],
};
