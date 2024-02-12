const jwt =require("jsonwebtoken")
const User = require("../models/attendance")

const validateLogin = (req, res, next)=>{

  const token =req.header("Authorization")
  console.log(token)
  
  if (!token){
    return res.status(401).json({error:"unauthorized"})
  } 
  
    const splittedtoken =token.split(" ")[1]
    // console.log({splittedtoken})
    const decoded = jwt.verify(splittedtoken,"secretKey")
    req.user =decoded



next()
}


module.exports=validateLogin