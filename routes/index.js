const express=require('express');
const router=express.Router();
//console.log('router running');

const userController=require('../controller/userController');
const homeController=require('../controller/homeController');

//router.get('/',homeController.home);
router.get('/',homeController.allUsers)
router.post('/register',userController.createUser);
router.get('/user/:id',userController.userDetails)

module.exports=router;
