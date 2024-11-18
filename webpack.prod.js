const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  target: "web",
  mode: "production",
  // devtool: "inline-source-map"
});
