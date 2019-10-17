const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const devConfig = {
    mode: "development",
    devtool: "cheap-eval-source-map",
    output: {
        filename: "./js/[name].js",
        chunkFilename:"./js/[name].js",
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     open:true,
    //     port:8000,
    //     hot:true,
    //     hotOnly:true,
    //     historyApiFallback:true,
    //     proxy:{
    //         '/api':'http://localhost:3000'
    //     }
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig,devConfig)