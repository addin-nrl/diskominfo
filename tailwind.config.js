/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Inter", "sans-serif"],
        serif: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
