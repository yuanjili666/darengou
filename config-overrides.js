
const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
const path=require("path")
// 按需加载
module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //配置别名
    addWebpackAlias({   //类似与webpack 中的 resolve (别名设置)  
        "@":path.join(__dirname,"./src"),
        "@components":path.join(__dirname,"./src/components"),
        "@api":path.join(__dirname,"./src/api"),
        "@actions":path.join(__dirname,"./src/actions"),
        "@common":path.join(__dirname,"./src/common"),
        "@lib":path.join(__dirname,"./src/lib"),
        "@pages":path.join(__dirname,"./src/pages"),
        "@router":path.join(__dirname,"./src/router"),
        "@store":path.join(__dirname,"./src/store"),
        "@utils":path.join(__dirname,"./src/utils")
       
    })

);


/*
webpack 的 resolve //别名

resolve:{
    alias:
}


*/