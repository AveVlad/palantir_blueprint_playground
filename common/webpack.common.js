const path = require('path');
const currentPath = _path => path.join(`${__dirname}/`, _path);


module.exports = function buildConfig({p, HtmlWebpackPlugin, HtmlWebpackExternalsPlugin}) {
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
            new HtmlWebpackExternalsPlugin({
                externals: [
                    {
                        module: 'react',
                        entry: 'https://unpkg.com/react@16/umd/react.development.js',
                        global: 'React',
                    },
                    {
                        module: 'react-dom',
                        entry: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
                        global: 'ReactDOM',
                    },
                    {
                        module: 'd3',
                        entry: 'https://unpkg.com/d3@3.5.17/d3.js',
                        global: 'd3',
                    }
                ],
            })
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
