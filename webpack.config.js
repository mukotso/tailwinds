const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports= {
    // watch: true,

    mode: 'development',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
          //
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        }
          //
        ]
      },
     
    
      devServer: {
        // static: './src',
      static: path.join(__dirname, "./dist/"),
       hot: true,
       
      },

    entry: './src/index.js',

output: {
    path: path.resolve(__dirname, "dist"),
    filename:'index.js'

  },
  
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
  
   
}