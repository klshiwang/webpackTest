const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')   //使用vue-loader需要引入此插件

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
    port:9999,
    // contentBase:'./dist'   //官网上是这样写的,但实际这样会报错, 应该像下面这样写
    static:{
      directory:path.join(__dirname,'public')
    },
    open:true
  },

  plugins:[
    //使用vue-loader需要引入下面插件
    new VueLoaderPlugin()

  ]
  
};