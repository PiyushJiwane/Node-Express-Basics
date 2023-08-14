const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    console.log("user hit the first request");
    res.end("<h1>Hello Piyush Jiwane</h1>")
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Page Not Found !!</h1>")
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})