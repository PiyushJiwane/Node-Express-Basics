const express=require("express")
const users=require("../data/users")

const app=express()

app.get("/api",(req,res)=>{
    console.log(req.query);
    const {search,limit}=req.query
    // res.send(`${search} - ${limit}`)
    let filteredUsers=[]
    if(search){
        filteredUsers=users.filter(user=>user.name.startsWith(search))
    }
    res.send(filteredUsers)
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})