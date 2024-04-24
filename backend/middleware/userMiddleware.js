const { get } = require('../routes/userRoutes')

const userMiddleware=async(req,res,next)=>{
const jwt=require('jsonwebtoken')
try {
    const token=req.headers.token
    if(!token){
        res.status(400).json({msg:"you are not authorized!"})
    }
    else{
        const VerifyToken=await jwt.verify(token,process.env.JWT_KEY)
        if(!VerifyToken){
            res.status(400).json({msg:"you are not authorized!"})

        }
        else{
            req.body.userId=VerifyToken.id
            next()
        }
    }


} catch (error) {
        res.statuts(500).json({msg:"something went wrong",error}) 
}

}


module.exports=userMiddleware


