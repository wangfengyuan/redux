const path = require("path")
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png|.jpg$/, loader: "url-loader"},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        })
    ]
}