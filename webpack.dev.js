const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].test.js'
  },
  devServer: {
    contentBase: './dist',
  },
});
