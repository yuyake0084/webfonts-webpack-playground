const WebfontPlugin = require("webfont-webpack-plugin").default;
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/entry.js'),
  output: {
    path: path.resolve(__dirname, "./build")
  },
  plugins: [
    new WebfontPlugin({
      files: path.resolve(__dirname, './icons/**/*.svg'),
      dest: path.resolve(__dirname, './fonts'),
      destTemplate: path.resolve(__dirname, "./src/font.css"),
      glyphTransformFn: (obj) => {
        console.log('!!!!!!!', obj)

        return obj;
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        loader: "url-loader",
        test: /\.(svg|eot|ttf|woff|woff2)?$/
      }
    ]
  }
};