const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "viridian-green": "#269393",
        "new-yellow": "#FFFF00",
        "imperial-red": "#E53F3E",
      },
      fontFamily: {
        rockwell: ["Rockwell"],
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".rotate-5": {
          transform: "rotate(5deg)",
        },
      }
      addUtilities(newUtilities, ["hover"])
    }),
  ],
}
