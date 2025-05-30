const express=require('express')
const router=express.Router()
const {signup,signin,logout}=require('../controller/userController')

router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/logout').post(logout)

module.exports=router;