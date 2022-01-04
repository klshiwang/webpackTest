const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')   //使用vue-loader需要引入此插件
// html-webpack-plugin插件会自动生成html文件,并在body里加入script引入bundle.js,如果entry中有多个入口,都会自动引入
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

console.log(path.join(__dirname,'src','main.js') )

module.exports = {
  entry: path.join(__dirname,'src','main.js'),  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode:'development',

  module:{
    //加载器
    rules:[
     
      {
        test:/\.(css|scss|less)$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ] 
  },
  //服务器配置
  devServer:{
    port:5555,
    // contentBase:'./dist'   //官网上是这样写的,但实际这样会报错, 应该像下面这样写
    static:{
      directory:path.join(__dirname)
    },
    open:true
  },

  plugins:[
    //使用vue-loader需要引入下面插件
    new VueLoaderPlugin(),

    //以index.html为模板,自动在根目录中生成index.html文件
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'public/index.html'),
      filename:'index.html'
    })
  ]
  
};