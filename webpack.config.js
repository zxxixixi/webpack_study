const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    // entry:'./src/index.js',
    entry: {
        index:'./src/index.js',
        print: './src/print.js'
    },
    devtool:'inline-source-map',
    devServer: {
    //   contentBase: path.join(__dirname, 'dist')
    },
    output: {
        // filename:'main.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'管理输出'
        })
    ],
    optimization:{
        splitChunks:{
            chunks: 'all'
        }
    }
}