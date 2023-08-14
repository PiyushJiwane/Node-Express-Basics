const express=require("express")
const users=require("./data/users")

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>home Page</h1><a href='/api/users'>Users Info</a>")
})

app.get("/api/users",(req,res)=>{
    // res.json(users)
    // ------OR--------
    const newUser=users.map((user)=>{
        const {id,name,desc}=user
        return {id,name,desc}
    })
    res.json(newUser)
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})

