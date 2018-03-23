const path = require('path');
const currentPath = _path => path.join(`${__dirname}/`, _path);


module.exports = function buildConfig({p, HtmlWebpackPlugin}) {
    return {
        entry: {
            main: p('src/index.js'),
        },
        context: p('src'),
        // stats: 'errors-only',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Test',
                template: currentPath('../common/template.html')
            }),
        ],
        output: {
            publicPath: '',
            filename: '[name]-[hash].bundle.js',
            chunkFilename: '[name]-[id]-[chunkhash].chunk.js',
            path: p('public'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'babel-preset-env',
                                'babel-preset-react',
                            ],
                            cacheDirectory: true,
                        }
                    }],
                },
            ],
        }
    }
};