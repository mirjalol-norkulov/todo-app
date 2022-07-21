const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          light: colors.blue[400],
          dark: colors.blue[600],
        },
        danger: {
          DEFAULT: colors.red[500],
          light: colors.red[400],
          dark: colors.red[600],
        },
        black: {
          DEFAULT: "#4d4d4d",
        },
        gray: {
          DEFAULT: "#e6e6e6",
          medium: "#bfbfbf",
          darker: "#d9d9d9",
        },
      },
    },
  },
  plugins: [],
};
