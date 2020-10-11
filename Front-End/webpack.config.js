const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './public'),
    }, module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }, plugins: [
        new VueLoaderPlugin()
    ]
};

/**
 * 研究各種預處理器
 * babel
 * css-loader
 * file-loader
 * url-loader
 * sass-loader
 */