/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#969696",
        highlight: "#4C685D",
      },
      backgroundColor: {
        primary: "#4C685D",
      },
      animation: {
        fade: "fadeIn .4s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
