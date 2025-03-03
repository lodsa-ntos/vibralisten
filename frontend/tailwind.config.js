export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueforce: {
          50: '#FFFFFF !important',
          100: '#f5f6fa !important',
          200: '#dadef2 !important',
          300: '#7c7c7c !important',
          400: '#878CA8 !important',
          500: '#505673 !important',
          600: '#3d55cc !important', 
          700: '#141a33 !important',
          800: '#0A0F1E !important',
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"]
      },
      Keyframes: {
        fadeInOut: {
          '0%': { opacity: '0', transform: "translateY(10px)" },
          '100%': { opacity: '1', transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 1.2s ease-in-out forwawrd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
