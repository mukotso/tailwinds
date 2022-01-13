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
          
          //
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[name].[ext]'
                } 
            }]
        }
          //
        ]
      },
     
    
      devServer: {
        static: './src',
    //   static: path.join(__dirname, "./dist/"),
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