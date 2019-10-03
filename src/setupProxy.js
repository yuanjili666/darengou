const proxy=require("http-proxy-middleware")

module.exports =(app)=>{
    app.use(proxy("/api",{
        target:"http://www.example.org",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))


    app.use(proxy("/users",{
        target:"http://www.example.org",
        changeOrigin:true,
    }))
}