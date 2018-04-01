const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
console.log('webpack 打包。。phaser练习');

const config =
    {
        mode: 'development',
        entry: './static/game/main.js',
        externals: {
            Phaser: 'Phaser'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                },
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
            path: path.resolve(__dirname, './build'),
            filename: 'game.bundle.js'
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({
                template: './static/game/index.html'
            }),

        ],
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }

    };

module.exports = config;