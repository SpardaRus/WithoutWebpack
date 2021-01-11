const path = require('path') //nodejs
module.exports = { //nodejs
    mode: "development",//mode build (development for build full script) (production for build optimization script)
    entry: path.resolve(__dirname, 'src/js/index.js'), // main js file
    output: {
        filename: 'bundle.js', //name for build output file
        path: path.resolve(__dirname, 'dist') //path for build output file
    }
}