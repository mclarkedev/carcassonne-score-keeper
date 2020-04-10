// webpack.js.org for documentation
const path = require('path');

// Module config
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  // Tests to see if files end in '.js'
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,  // Look for all .scss files
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // Define sourcemap, makes things easier to debug in development
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
