const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config =
    {
        mode: 'development',
        entry: './static/h5game.js',
        module: {
            rules: [
                { test: /\.css$/, use: 'css-loader' },
                { test: /\.ts$/, use: 'ts-loader' },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["env"]
                        }
                    }
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, './static'),
            filename: 'h5game.bundle.js'
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({
                template: './h5.html',
                filename: './h5g.html'
            })
        ]
    };

module.exports = config;