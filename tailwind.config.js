const path = require("path");

module.exports = {
  content: ["index.html", path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {},
  },
  plugins: [],
};
