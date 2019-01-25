const path = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./demo_redux_4/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: "./demo_redux_4", //为一个目录下的文件提供本地服务器，在这里设置其所在目录
    historyApiFallback: true, //跳转将指向index.html
    inline: true, //开启自动刷新页面
    host: "192.168.0.139",
    port: 6001,
    open: true
  }
};
