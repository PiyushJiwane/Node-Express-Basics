const express=require("express")
const path=require("path")

const users=require("../data/users")

const app=express()

// holds all static data like html, css, etc files
app.use(express.static(path.join(__dirname,"../html")))

// used to bind html with node.js so we can get data from form body
app.use(express.urlencoded({extended:false}))

// This middleware required to accept the body value through postman software
app.use(express.json())

// It will return users json object
app.get("/get-data",(req,res)=>{
    res.status(200).json({success:true,data:users})
})

// It will accept the name from index.html file and it will add data dynamically.
app.post("/login",(req,res)=>{
    const {name}=req.body
    console.log(name);
    if(name){
        const len=users.length
        const usersObj={
            id:len+1,
            name
        }
        users.push(usersObj)
    }
    res.status(200).json(users)
})

// It will update the json data record based on id
app.put("/user/update/:id",(req,res)=>{
    const {id}=req.params
    let {name}=req.body

    const userIndex=users.findIndex((user)=>user.id===Number(id))
    if(userIndex>=0){
        users[userIndex].name=name
        res.send(users)
    }else{
        res.status(404).send("Record Not Found !!!")
    }
})

// It will delete the json data record based on id
app.delete("/user/remove/:id",(req,res)=>{
    const {id}=req.params
    const userIndex=users.findIndex((user)=>user.id===Number(id))
    console.log(userIndex);
    if(userIndex>=0){
        users.splice(userIndex,1)
        console.log(users);
        res.send(users)
    }else{
        res.status(404).send("Record Not Found !!!")
    }
})

app.listen(3000,()=>{
    console.log("server is listening to port : 3000");
})
