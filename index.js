const express=require("express")
// const {readFileSync}=require("fs")
const path=require("path")

// const homePage=readFileSync("./html/home.html")

const app=express()
// setting up static files and middleware
// public folder is containing all static file(i.e. a file that server doesnt have to change it.)
// So all .css, .png and supporting .js files will be there in the folder
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    console.log("user hit the first request");
    // res.end("<h1>Hello Piyush Jiwane</h1>")
    // res.status(200).send(homePage)  //ERROR: code
    res.sendFile(path.resolve(__dirname,"./html/home.html"))
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Page Not Found !!</h1>")
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})