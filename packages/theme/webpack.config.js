const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
    return path.resolve(__dirname, "..", dir)
}

module.exports = {
    mode:"development",
    entry: {
        main: path.resolve(__dirname,"index.js")
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname,"../../lib/theme"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 2}
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader'
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'img/'
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: "file-loader",
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ]

}