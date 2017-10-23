/**
 * Created by easterCat on 2017/10/9.
 */

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: __dirname + "/app/app.js",
    output: {
        path: __dirname + "/dist", //打包后的js文件存放的地方
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                loaders: 'url-loader?name=images/[name].[ext]&limit=10000!image-webpack-loader' //10KB
            },
            {
                test: /index\.html/,
                loaders: 'file-loader?name=index.html'
            }
        ]
    },
    //webpack-dev-server配置
    devServer: {
        // contentBase: './dist',//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        inline: true,//源文件改变,会自动刷新页面
        port: 3000,//设置默认监听端口，如果省略，默认为"8080"
    },
};