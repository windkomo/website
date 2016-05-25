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
        inline: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'assets/bower_components']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/bootstrap-styl/'
        }, {
            test: /\.json$/, loader: 'json-loader'
        }, {
            test: /\.html$/, loader: 'file?name=[name].[ext]'
        },{
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader?limit=100000'
        }]
    }
}
