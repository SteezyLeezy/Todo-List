const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',     // makes names when bundled in dist
        // clean: true,                            // removes excess bundles in dist
    },
    devServer: {
      static: './dist',
    },
    optimization: {
      runtimeChunk: 'single',
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        title: 'To-do List',
        template: './src/template.html',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader'
              }
            ]
          }
        ],
      },
};