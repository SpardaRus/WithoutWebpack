const path = require('path') //nodejs
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = { //nodejs
    mode: "development",//mode build (development for build full script) (production for build optimization script)
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js', // main js file
    output: {
        filename: '[name].[hash].js', //name for build output file
        path: path.resolve(__dirname, 'dist') //path for build output file
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './html/index.html'
        }),
        new HTMLWebpackPlugin({
            filename: "work.html",
            template: './html/work.html'
        }),
        new HTMLWebpackPlugin({
            filename: "about.html",
            template: './html/about.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}