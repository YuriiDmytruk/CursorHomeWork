const path = require('path')

module.exports = {
    mode:'production',
    entry:{
        filename: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist/Scripts"),
        filename: "script.js"
    }
}