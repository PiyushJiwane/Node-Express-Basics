const express=require("express")
const users=require("./data/users")

const app=express()

app.get("/api/:userID",(req,res)=>{
    console.log(req.params);
    const {userID}=req.params
    // res.send(`product id : ${userID}`)
    const singleUser=users.find((user)=>{
        if(user.id===Number(userID)){
            console.log(Number(userID));
            return user
        }
    })
    res.send(singleUser)
})

app.get("/api/:userID/review/:reviewID",(req,res)=>{
    console.log(req.params);
    const {reviewID}=req.params
    console.log(reviewID);
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})