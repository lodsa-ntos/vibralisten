export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--blue-force-white) / <alpha-value>)",
          100: "rgb(var(--blue-force-100) / <alpha-value>)",
          200: "rgb(var(--blue-force-200) / <alpha-value>)",
          300: "rgb(var(--blue-force-300) / <alpha-value>)",
          400: "rgb(var(--blue-force-400) / <alpha-value>)",
          500: "rgb(var(--blue-force-500) / <alpha-value>)",
          600: "rgb(var(--blue-force-600) / <alpha-value>)",
          700: "rgb(var(--blue-force-700) / <alpha-value>)",
          800: "rgb(var(--blue-force-800) / <alpha-value>)",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
