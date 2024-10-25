const path = require('path');

module.exports = {
  entry: './src/style.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',  // The output file to include in index.html
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',  // or 'development' for unminified output
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },  
};
