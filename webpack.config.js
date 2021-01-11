const path = require('path') //nodejs
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = { //nodejs
    mode: "development",//mode build (development for build full script) (production for build optimization script)
    entry: path.resolve(__dirname, 'src/js/index.js'), // main js file
    output: {
        filename: 'bundle.js', //name for build output file
        path: path.resolve(__dirname, 'dist') //path for build output file
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/html/index.html')
        }),
        new HTMLWebpackPlugin({
            filename: "work.html",
            template: path.resolve(__dirname, 'src/html/work.html')
        }),
        new HTMLWebpackPlugin({
            filename: "about.html",
            template: path.resolve(__dirname, 'src/html/about.html')
        })]

}