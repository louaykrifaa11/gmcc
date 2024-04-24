const User=require("../models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { userMiddleware } = require("../middleware/userMiddleware")
const GetDone=(req,res)=>{
    res.send("Routing")
}



const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const existEmail=await User.findOne({email:email})
        if(existEmail){
            res.status(200).json({msg:"email already exist"})
        }
        else{
            const HashPW=await bcrypt.hash(password,10)
            console.log(HashPW)
            const myuser=await User.create({email,password:HashPW})
            const token=await jwt.sign({id:myuser._id},process.env.JWT_KEY,{expiresIn:"7D"})
            res.status(201).json({msg:"register done",token})
        }

    } catch (error) {
        res.status(500).json({msg:"something went wrong",error})
    }

}

const login=async(req,res)=>{

    try {
        const {email,password}=req.body
        const existUser=await User.findOne({email:email})
        if(!existUser){
            res.status(200).json({msg:"make sure to register"})
        }
        else{
            const VerifyPassword=await bcrypt.compare(password,existUser.password)
            if(!VerifyPassword){
                res.status(400).json({msg:"Password wrong"})
            }
            else{
            const token=await jwt.sign({id:existUser._id},process.env.JWT_KEY,{expiresIn:"7D"})
            res.status(201).json({msg:"login done",token})
        }

    } 
    } catch (error) {
        res.status(500).json({msg:"something went wrong",error})
    }


    }
    const getUserData=async(req,res)=>{

        try {
            console.log(req.body.userId)
            const userDate=await User.findOne({_id:req.body.userId})
            console.log(userDate)
            res.status(200).json({msg:"get all user data",userDate})
        } catch (error) {
            res.status(500).json({msg:"something went wrong",error}) 
        }
    
    }



module.exports={GetDone,register,login,getUserData}