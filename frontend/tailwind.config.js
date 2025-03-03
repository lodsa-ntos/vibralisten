export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-blueforce-white) / <alpha-value>)",
          100: "rgb(var(--color-blueforce-100) / <alpha-value>)",
          200: "rgb(var(--color-blueforce-200) / <alpha-value>)",
          300: "rgb(var(--color-blueforce-300) / <alpha-value>)",
          400: "rgb(var(--color-blueforce-400) / <alpha-value>)",
          500: "rgb(var(--color-blueforce-500) / <alpha-value>)",
          600: "rgb(var(--color-blueforce-600) / <alpha-value>)",
          700: "rgb(var(--color-blueforce-700) / <alpha-value>)",
          800: "rgb(var(--color-blueforce-800) / <alpha-value>)",
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
