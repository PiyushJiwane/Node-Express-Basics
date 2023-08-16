const express=require("express")
const morgan=require("morgan")
// Using this require we can seprate it out the middleware code and route code
const logger=require("../middleware/logger")
const authorize=require("../middleware/authorize")

const app=express()

// This will import middleware function for all other route in middleware.js file
// app.use([logger,authorize]) // order is important, try to use app.use() before all routers path. 

app.use(morgan('tiny'));
// GET /morgan-logger/data 404 157 - 1.564 ms
// By using moragn middleware, we can get an output in above format like = :method :url :status :res[content-length] - :response-time ms


app.get("/",(req,res)=>{
    // console.log(req.user);
    console.log("Home Page");
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})