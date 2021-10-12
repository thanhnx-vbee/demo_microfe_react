const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('../package.json');
const {merge} = require('webpack-merge');
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'byeReact',
            filename: 'remoteEntry.js',
            exposes: {
                './byeReact': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}
module.exports = merge(commonConfig, devConfig)