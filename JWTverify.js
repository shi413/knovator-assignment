const jwt = require("jsonwebtoken")
require('dotenv').config()
let verifyToken = async(req,res,next)=>{
    try {
    let token = req.headers.token
    if(!token){return res.status(400).send({success:true,message:'Token Not Found'})}
    var decoded = jwt.verify(token, process.env.JWTKEY);
    if(!decoded){return res.status(400).send({success:false,message:'Login Please'})}
    req.userId = decoded.user._id
    next();
    } catch (error) {
    res.status(500).send({success:false,message:"Crached Token"})  
    }
}
module.exports = {verifyToken}