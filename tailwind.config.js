/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unica: ["Unica One", "sans-serif"],
      },
      colors: {
        gray: "rgb(128, 128, 128)", // Custom RGB color
      },
    },
  },
  plugins: [],
};
