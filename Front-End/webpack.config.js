const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        host: '0.0.0.0',
    },
    entry: './src/main.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, '../Back-end/public'),
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000, //bytes
                        name: '/images/[hash:7].[ext]',
                        outputPath: 'assets'
                    }
                }
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