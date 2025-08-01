/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryr: "#ffff",
        secondary: "#ffff",
        text: "#ffff",
        accent: "#ffff",
        error: "#ffff",
        white: "#ffff",
        background: "#ffff",
        input: "#ffff",
        border: "#ffff",
        tag: "#ffff",
        blueSimple: "#1685FE",
      },
      fontFamily: {
        nameFont: ["nameFont", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        wtablet: "1024px",
        wmob: "767px",
      },
      keyframes: {
        slide: {
          "0%, 16.666%": { transform: "translateY(0%)" },
          "33.333%, 49.999%": { transform: "translateY(-35%)" },
          "66.666%, 83.333%": { transform: "translateY(-70%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slide: "slide 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
