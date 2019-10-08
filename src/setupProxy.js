const proxy=require("http-proxy-middleware")

module.exports =(app)=>{
    app.use(proxy("/api",{
        target:"https://www.askgo.cc",
        changeOrigin:true,
        pathRewrite:{ 
            "^/api":""
        }
    }))

    app.use(proxy("/users",{
        target:"http://10.60.13.121:3000",
        changeOrigin:true,
    }))


    app.use(proxy("/hjn",{
        target:"https://cmsjapi.dataoke.com",
        changeOrigin:true,
        pathRewrite:{ 
            "^/hjn":""
        }
    }))


}