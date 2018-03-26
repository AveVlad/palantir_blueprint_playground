const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const buildWebpackConfig = require('../common/webpack.common');
const p = _path => path.join(`${__dirname}/`, _path);

const cfg = Object.assign({
    // externals: {
    //     'react': { root: 'React' },
    //     'react-dom': { root: 'ReactDOM' },
    // }
}, buildWebpackConfig({ p, HtmlWebpackPlugin, HtmlWebpackExternalsPlugin }));

console.log('cfg', JSON.stringify(cfg, null, 2));
module.exports = cfg;
