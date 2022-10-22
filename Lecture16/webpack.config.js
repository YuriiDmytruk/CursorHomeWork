const path = require('path')

module.exports = {
    mode:'production',
    entry:{
        filename: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist/Scripts"),
        filename: "script.js"
    },
    devServer:{
        port: 8080,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    }
}