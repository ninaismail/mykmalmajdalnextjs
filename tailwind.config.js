/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto","sons-serif"],
        RobotoSlab: ["Roboto Slab", "sons-serif"],
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
    },
  },
  plugins: [],
}
