const jwt =require("jsonwebtoken")

const authanticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
      const decoded=jwt.verify(token, 'masai',(err, decoded) =>{
        if(decoded){
            const userID=decoded.userID
            req.body.userID=userID
            next()
        }else{
            res.send("please login first")
        }
      });
    }else{
        res.send("please login first")
    }
}

module.exports={
    authanticate
}