const express=require("express")
const users=require("./data/users")

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>home Page</h1><a href='/api/users'>Users Info</a>")
})

app.get("/api/users",(req,res)=>{
    res.json(users)
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})

