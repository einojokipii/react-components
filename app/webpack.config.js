const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [__dirname, srcDir],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    stats: 'minimal',
    clientLogLevel: 'silent',
    port: 3000
  }
};
