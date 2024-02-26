const { userModel } = require("../Model/userModel");
const validator = require('validator')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const Registration = async(req,res)=>{
    let {email} =req.body;
    if(!validator.isEmail(email)){res.status(409).send({success:true,message:'Email Validation Failed'})}
    let user = await userModel.findOne({email:req.body.email}) 
    if(user){
        return res.status(409).send({success:false,message:'Email Already Exist'})
    }
    let newuser = await userModel.create(req.body)
    res.status(201).send({success:true,message:'Registration Successfully',data:newuser})
}

const Login = async(req,res)=>{
    let {email,password} =req.body;
    try {
    let user = await userModel.findOne({email:email})
    if(!user){return res.status(404).send({success:false,message:'User Not Register'})}
    if(user.password != password){return res.status(409).send({success:false,message:'Wrong Password'})}
    var token = jwt.sign({user:user},process.env.JWTKEY,{expiresIn:"30D"})
    res.setHeader("token",token)
    res.status(200).send({success:true,message:'Login Successfully',data:user,token:token})
    } catch (error) {
    res.status(500).send({ success: false, message: 'Server Crashed', error: error.message });
    }
}


module.exports = {Registration,Login}