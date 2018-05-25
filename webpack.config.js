const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/app/app.module.js',
    mode: 'development',
    output: {
        filename: 'angular-sample-app.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?compact=false&sourceMaps=true',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                    plugins: [
                        require.resolve('babel-plugin-transform-object-rest-spread'),
                        require.resolve('babel-plugin-transform-decorators-legacy'),
                    ],
                }
            },
            {
                test: /\.html$/, loader: 'ng-cache-loader?prefix=[dir]/[dir]'
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new NgAnnotatePlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    }
};