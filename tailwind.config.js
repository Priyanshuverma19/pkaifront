/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "scroll-thumb": "#2c2937",
        "scroll-track": "#1e1d29",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
