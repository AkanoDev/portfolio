/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "43rem",
        101: "-0.5rem",
      },
      colors: {
        "lightest-black": "#303030",
        "light-black": "#2B2B2B",
        "medium-black": "#1f1f1f",
        "hard-black": "#1B1C1E",
        "dark-mode": "#121212",
        "light-white": "#ededed",
        "medium-white": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
