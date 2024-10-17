/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Rokkitt",
      },
      backgroundImage: {
        display: "url(/bg.jpeg)",
      },
    },
  },
  plugins: [],
};
