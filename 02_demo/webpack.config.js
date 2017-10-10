/**
 * Created by easterCat on 2017/10/9.
 */

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = { //注意这里是exports不是export
    entry: __dirname + "/app/app.js", //唯一入口文件
    output: { //输出目录
        path: __dirname + "/dist", //打包后的js文件存放的地方
        filename: 'app.js', //打包后的js文件名
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /index\.html/,
                loaders: 'file-loader?name=index.html'
            }
        ]
    },
    //webpack-dev-server配置
    devServer: {
        contentBase: './dist',//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        inline: true,//源文件改变,会自动刷新页面
        port: 1234,//设置默认监听端口，如果省略，默认为"8080"
    },
};