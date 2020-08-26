const path = require("path");
const HtmlWebpackHtml = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [
    new HtmlWebpackHtml({
      title: "管理输出",
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
  ],
  output: {
    filename: "[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
