/**
 * Created by easterCat on 2017/10/30.
 */
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //打包后的js文件存放的地方
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }],
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader'
                }]
            },
        ]
    },
    devServer: {
        // contentBase: './dist',//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        inline: true,//开启自动刷新页面
        port: 3002,//设置监听端口3000
        hot: true,//开启热提花
    },
};