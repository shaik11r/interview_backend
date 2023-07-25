const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        enum:['beginner','intermediate','hard'],
        required:true,
    },
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    },
    source:{
        type:String,
        default:'',
    },
})
const Question=mongoose.model('Question',questionSchema);
module.exports=Question