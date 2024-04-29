const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/main.jsx', // Updated to point to 'main.jsx'

  // Output configuration
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  // Loaders and rules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // This rule now applies to both JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpiling ES6+ and JSX to ES5
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets for React and modern JavaScript
          }
        }
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      // Include additional rules/loaders as necessary
    ]
  },

  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx'], // Add '.jsx' here so Webpack resolves these files without explicitly naming them in imports
  },

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000, // You can specify another port here
    hot: true, // Hot module replacement
  },

  // Plugins can be configured here if needed
};
