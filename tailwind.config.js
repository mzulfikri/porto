/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        drawCircle: {
          "0%": {
            strokeDashoffset: 100,
          },
          "100%": {
            strokeDashoffset: 0,
          },
        },
      },
      animation: {
        "draw-circle": "drawCircle 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
