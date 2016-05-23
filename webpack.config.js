var path    = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        javascript: './main.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4444,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }, {
            test: /\.json$/, loader: 'json-loader'
        }, {
            test: /\.html$/, loader: 'file?name=[name].[ext]'
        }]
    }
}
