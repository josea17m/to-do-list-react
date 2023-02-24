/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 1px 15px 2px rgba(0,0,0,0.50)",
      },
    },
  },
  plugins: [],
};
