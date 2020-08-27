const path = require("path");
const HtmlWebpackHtml = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    index: "./src/index.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    // publicPath: "/dist/",
    // writeToDisk: true,
    // port: "3000", //默认是8080
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: true, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true, //是否启用 gzip 压缩
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackHtml({
      title: "开发环境",
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
  ],
  output: {
    filename: "[name].bundle.[hash].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
