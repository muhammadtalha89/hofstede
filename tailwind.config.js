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
        },
        neutral: {
          500: "#737373",
        },
      },
      backgroundImage: {
        "gradient-text":
          "linear-gradient(109.97deg, #FFFFFF -32.38%, rgba(0, 0, 0, 0) 55.95%)",
        "gradient-dive":
          "linear-gradient(180deg, #E5E5E5 0%, #83878F 43.23%, #080E1B 93.75%)",
      },
    },
  },
  plugins: [],
};
