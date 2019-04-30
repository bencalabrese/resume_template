const webpack = require("webpack");
const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    app: "./index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist")
  },
  devServer: {
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    contentBase: join(__dirname, "src"),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              helperDirs: [join(__dirname, "src", "handlebars", "helpers")],
              partialDirs: [join(__dirname, "src", "handlebars", "partials")]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("sass") }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.hbs"
    }),
    new MiniCssExtractPlugin()
  ]
};
