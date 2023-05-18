const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", ...fontFamily.sans],
      },
      colors: {
        hm: {
          orange: "#FE621D",
          blue: "#71BBFF",
          grayE1: "#CBD5E1",
          black: "#080E1B",
          dolphin: "#615d83",
          woodsmoke: "#080809",
          orange: "#FE621D",
        },
        neutral: {
          500: "#737373",
        },
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
