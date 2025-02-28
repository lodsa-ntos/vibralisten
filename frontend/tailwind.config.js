/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "blue-vibrant": "#3d55cc",
      "dark-grey": "#141a33",
      "grey": "#505673",
      "grey2": "#878CA8",
      "light-grey": "#dadef2",
      "light-blue-grey2": "#f5f6fa",
      "white": "#FFFFFF",
      "black": "#0A0F1E",
      "border-color": "#7c7c7c",
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"]
    },
  },
};
export const plugins = [];