/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1b5089",
        primarytwo: "#49699c",
        primarythree: "#788eb5",
        shadows: "#737373",
        shadowstwo: "#b1b2b3",
        secondary: "#eaa900",
        secondarytwo: "#ff8300",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        quicksand: ['Quicksand', "sans-serif"],
        shrikhand: ['Shrikhand', "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};