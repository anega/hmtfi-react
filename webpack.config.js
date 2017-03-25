const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {allChunks: true})
];
let entries = [
    './src/index'
];

if (isProduction) {
    plugins = plugins.concat(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true
        })
    );
} else {
    entries = entries.concat(
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server'
    );
}

module.exports = {
    entry: {
        main: entries,
        styles: './src/styles'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    devtool: isProduction ? null : 'inline-cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve('..'),
            path.resolve('node_modules')
        ]
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
    },
    plugins,
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    }
};
