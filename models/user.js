//User Schema.
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dobDay:{
        type:Number,
        required:true
    },
    dobMonth:{
        type:Number,
        required:true
    },
    dobYear:{
        type:Number,
        required:true
    },
  
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;