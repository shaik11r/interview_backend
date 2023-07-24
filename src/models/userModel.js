const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    }
},{timestamps:true});
userSchema.pre('save',async function(next){
    const hash=await bcrypt.hash(this.password,10);
    this.password=hash
    next();
})
const User=mongoose.model('User',userSchema);

module.exports=User;