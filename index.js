const express=require('express');
const { default: mongoose } = require('mongoose');
const {connect}=require('./src/config/dbConfig');
const app=express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hi from the server');
})

app.listen(process.env.PORT,async()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
    try{
        await connect();
        console.log('sucessfully connected to mongodb')
    }
    catch(err){

        console.log('unable to connect to mongodb',err)
    }
})