const webpack = require("webpack");
const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    app: "./index.ts"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist")
  },
  devServer: {
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    contentBase: join(__dirname, "src"),
    watchContentBase: true,
    host: "0.0.0.0",
    disableHostCheck: true
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      handlebars: "handlebars/runtime.js"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.hbs"
    }),
    new HtmlWebpackInlineSVGPlugin({ runPreEmit: true }),
    new MiniCssExtractPlugin()
  ]
};
