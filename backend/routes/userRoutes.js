const express=require('express')
const router=express.Router()
const userMiddleware=require('../middleware/userMiddleware')
const {GetDone,register,login,getUserData} =require('../controllers/userControllers')



router.get("/",GetDone)
router.post('/register',register)
router.post('/login',login)
router.get('/userdata',userMiddleware,getUserData)




module.exports=router