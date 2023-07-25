const mongoose = require("mongoose");
const handsonSchema = new mongoose.Schema({
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
        enum:['easy','medium','hard'],
        required:true,
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0,
    },
    source:{
        type:String,
        default:''
    }
},{timestamps:true});
const handson=mongoose.model('Handson',handsonSchema);
module.exports=handson;
