const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildWebpackConfig = require('../common/webpack.common');
const p = _path => path.join(`${__dirname}/`, _path);

module.exports = buildWebpackConfig({p, HtmlWebpackPlugin});
