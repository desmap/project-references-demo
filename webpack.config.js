const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: 'another-package',
  output: {
    path: path.resolve('dist/another-package'),
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
          // "loader": "ts-loader",
          // "options": {
          //     "transpileOnly": false,
          //     "projectReferences": false
          // }
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)],
    extensions: ['.js', '.ts'],
  },
  // plugins: [new ForkTsCheckerWebpackPlugin()]
}
