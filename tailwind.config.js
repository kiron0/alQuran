/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SutonnyMJ: ["SutonnyMJ", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
