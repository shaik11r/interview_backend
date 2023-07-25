const jwt=require('jsonwebtoken');
const User=require('../models/userModel');

const validateSignupRequest=async(req,res,next)=>{
    if(!req.body.username){
        return res.status(400).send({
            message:'Name of the user is not present'
        })
    }
    if(!req.body.email){
        return res.status(400).send({
            message:"Email of the user is not present in the request"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message:"Password of the user is not present in the request"
        })
    }
    next();
}
const validateSigninRequest=async(req,res,next)=>{
    if(!req.body.email){
        return res.status(400).send({
            message:'No Email is provided'
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message:"No password is provided",
        })
    }
    next();
}
const isAuthenticated=async(req,res,next)=>{
    try{
        const token =req.headers['x-access-token'];
        if(!token){
            return res.status(403).send({
                message:'No token provided'
            })
        }
        const response=jwt.verify(token,process.env.AUTH_KEY);
        if(!response){
            return res.status(401).send({
                message:'Token not verified'
            })
        }
        const user=await User.findById(response.id);
        console.log(user);
        req.user=user.id;
        next();
    }
    catch(error){
        if(error.name=='JsonWebTokenError'){
            return res.status(403).send({
                message:error.message
            })
        }
        if(error.code==404){
            return res.status(404).send({
                message:'user doesnt exist'
            })
        }
        return res.status(500).send({
            message:"Internal Server error"
        })
    }
}
module.exports={
    validateSignupRequest,
    isAuthenticated,
    validateSigninRequest,
}