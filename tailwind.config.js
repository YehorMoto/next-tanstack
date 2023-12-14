/* /tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#363A43",
        "middle-grey": "#5A6170",
        "cold-grey": "#D6DBE0",
        "light-grey": "##D9DEE3",
        "easy-grey": "#ECEEF1",

        "status-pending-light": "#FFE663",
        "status-pending-dark": "#FF9900",
        "status-draft-light": "#C1C8D1",
        "status-draft-dark": "#6E7686",
        "status-complete-light": "#B8EF81",
        "status-complete-dark": "#478524",

        "label-grey-active": "#6A7383",
        "label-grey-disabled": "#CBCFD6",

        "sky-blue": "#007AFF",
      },
    },
  },
  plugins: [],
};
