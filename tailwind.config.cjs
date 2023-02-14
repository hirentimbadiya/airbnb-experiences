/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu:["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      mxxl: { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
      mxl: { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      mlg: { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
      mmd: { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      msm: { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};