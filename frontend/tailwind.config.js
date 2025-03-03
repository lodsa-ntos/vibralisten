export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-700": "#3d55cc",
        "dark-grey": "#141a33",
        "grey": "#505673",
        "grey2": "#878CA8",
        "light-grey": "#dadef2",
        "light-blue-grey2": "#f5f6fa",
        "white": "#FFFFFF",
        "black": "#0A0F1E",
        "border-color": "#7c7c7c",
        blue: {
          light: '#85d7ff',
          '700': '#3d55cc',
          dark: '#009eeb',
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
