/**
 * Created by easterCat on 2017/10/9.
 */
const production = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


const cssPlugin = new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true, // don't contain embedded styles
});


let sassLoader;
let lessLoader;

let plugins = [
    cssPlugin,
];

//如果production为true的时候，是生产环境，执行压缩合并打包操作
if (production) {
    lessLoader = cssPlugin.extract(['css-loader', 'less-loader']);
    sassLoader = cssPlugin.extract(['css-loader', 'sass-loader']);
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    );
    //加入js压缩的实例
    plugins.push(new UglifyJsPlugin({
        mangle: {
            mangle: false
        },
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: false,
            if_return: true,
            join_vars: true,
            drop_console: false,
            warnings: false
        },
    }));
    plugins.push(new CleanWebpackPlugin(['dist', 'dist.zip', 'dist.rar']))
} else {
    lessLoader = 'style-loader!css-loader?sourceMap!less-loader?sourceMap=true&outputStyle=expanded&sourceMapContents=true';
    sassLoader = 'style-loader!css-loader?sourceMap!sass-loader?sourceMap=true&outputStyle=expanded&sourceMapContents=true';
}

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    context: path.resolve(__dirname, 'app'),
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    // devtool: production ? false : 'source-map',
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
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: cssPlugin.extract(['css-loader']),
            },
            {
                test: /\.scss$/,
                use: sassLoader
            },
            {
                test: /\.less$/,
                use: lessLoader
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                use: 'url-loader?name=images/[name].[ext]&limit=10000!image-webpack-loader' //10KB
            },
            {
                test: /index\.html/,
                use: production ?
                    'file-loader?name=[name].html' :
                    'file-loader?name=index.html'
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
    plugins: plugins,
};