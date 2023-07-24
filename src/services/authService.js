const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.signup=async(req,res)=>{
try{
    const userObject={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    const response=await User.create(userObject);
    console.log(response);
    return res.status(201).send({
        data:response,
        message:"Successfully registered a user"
    })
}
catch(error){
    return res.status(500).send({
        message:"something went wrong"
    })
}   
}

exports.signin=async(req,res)=>{
    try{
        const user=await User.findOne({
            email:req.body.email
        });
        if(!user){
            return res.status(404).send({
                message:'not user found '
            })
        }
        const isValidPassword=bcrypt.compare(req.body.password,user.password);
        if(!isValidPassword){
            res.status(401).send({
                message:'Invalid Password for the given email'
            })
        }
        const token=jwt.sign(
            {
                id:User.id,email:User.email
            },
            process.env.AUTH_KEY,
            {expiresIn:'1d'}
            );
            
    }
    catch(error){

    }
}