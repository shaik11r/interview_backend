const mongoose=require('mongoose')

const url="mongodb+srv://codeonlybro:<password>@cluster0.amrmjli.mongodb.net/?retryWrites=true&w=majority"

const connect=async()=>{
    try{
        await mongoose.connect(url);
        console.log('connecting...')
    }
    catch(err){
        console.log(err);
        throw new err;
    }
}
module.exports={
    connect
}