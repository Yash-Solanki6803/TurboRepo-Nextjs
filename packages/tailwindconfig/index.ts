/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          "50": "#f0fcfc",
          "100": "#dff7f7",
          "200": "#b2eaed",
          "300": "#88dee3",
          "400": "#3ec7cf",
          "500": "#00adbb",
          "600": "#0095a8",
          "700": "#00738c",
          "800": "#005470",
          "900": "#003a54",
          "950": "#002036",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover", "animate-spin"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
