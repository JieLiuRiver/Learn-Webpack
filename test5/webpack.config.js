var webpack = require('webpack');
module.exports = {
  entry: ["./entry.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loader: [
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("这里是打包文件头部注释！")//注意这是一个数组..
  ]
}
var webpack = require('webpack');
module.exports = {
  entry: ["./entry.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loader: [
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("这里是打包文件头部注释！")//注意这是一个数组..
  ]
}
