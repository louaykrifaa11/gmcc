const express=require("express")
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config({path:"./config/.env"})
const connectDB=require("./config/connectDB")
port=process.env.PORT || 5000
app.use(express.json())
app.use(cors())

connectDB()




app.use('/api',require('./routes/userRoutes'))
app.listen(port,(err)=>{
    err? console.log("error:",err):console.log("server is running")
})