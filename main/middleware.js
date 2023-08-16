const express=require("express")

const app=express()

const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(method,url,time);
    res.send("Testing")
    // next()
}

app.use(logger)

app.get("/",(req,res)=>{
    // res.send("Home Page")
})

app.get("/about",(req,res)=>{
    // res.send("About Page")
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})