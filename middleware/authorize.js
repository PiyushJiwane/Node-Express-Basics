const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user=="piyush"){
        req.user={name:"piyush",id:32}
        next()
    }else{
        res.status(401).send("Unauthorized")
    }
}

module.exports=authorize