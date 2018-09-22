const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader:'postcss-loader'
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }]
    }
};