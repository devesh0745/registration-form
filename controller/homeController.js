const axios = require('axios');

const User=require('../models/user');

//Controller to get all the user and render form.
module.exports.allUsers=async function(req,res){
    try{
        const users=await User.find({});
       // console.log("all users:",users);
        return res.render('form',{
            users:users,
            title:"Registration Form",
        })
    }catch(err){
        console.log(err);
        res.redirect('back')
    }
}


