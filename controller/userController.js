const User=require('../models/user');

//Controller to create User
module.exports.createUser=async function(req,res){
    try{
       // console.log('user controller running');
       // console.log(req.body.email)
        const user=await User.findOne({email:req.body.email})
        const day=req.body.dobDay;
        const month=req.body.dobMonth;
        const year=req.body.dobYear;
        const dob = new Date(year, month - 1, day);
        //Calculate age
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        
        //checking validation on input fields.
        if(parseInt(req.body.firstName)>=0 || parseInt(req.body.lastName)>=0){
            console.log("invalid name")
            return res.redirect('back');
        }
        else{
        if(!user){
            console.log("creating user")
            const user=await User.create(req.body)
            
            console.log('User Created');
           return res.render('details',{
            info:user
        })
        }else{
            console.log('Already Registered');
            return res.redirect('back')
        }
    }
    }   
    catch(err){
        console.log('Error in Registration',err);
        return res.redirect('back');
    }
}

//Controller to get user details.
module.exports.userDetails=async function(req,res){
    try{
        const user=await User.findById(req.params.id);
        console.log("user:",user);
        return res.render('details',{
            info:user
        })
    }catch(err){
        console.log("error",err);
        res.redirect('back');
    }
}