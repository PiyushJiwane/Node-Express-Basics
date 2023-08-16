const express=require("express")
// Using this require we can seprate it out the middleware code and route code
const logger=require("../middleware/logger")

const app=express()

// This will import middleware function for all other route in middleware.js file
app.use("/api",logger) // order is important, try to use app.use() before all routers path. 

app.get("/",(req,res)=>{
    console.log("Home Page");
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})