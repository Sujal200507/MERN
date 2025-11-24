const express = require("express")
const dotenv = require("dotenv")
const dbSetup = require("./db/setUp")
const User = require("./schema/userSchema")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



dotenv.config({})

dbSetup()

const app = express()

app.use(express.json())
app.set(express.urlencoded({extended:true}))

app.use(cors({origin:"http://localhost:5173"}))

app.get("/",(req,res)=>{
 res.send("Working")
})

app.post("/signup",async(req,res)=>{
    
    let {name,password,email} = req.body

    let salt = bcrypt.genSalt(10)
    let haspassword = bcrypt.hash(password,salt)
    
   let newuser = new User({
    name,email,password:haspassword
   })
   await newuser.save()

  let token = jwt.sign({email},process.env.JWT_KEY)

  res.cookie("token",token)

   res.json({message:"user created"})
})

app.post("/signin",(req,res)=>{

    let {email,password} = req.body

    let user = User.findOne({email})
    if(!user){
        throw new Error("user not registred")
    }

    
})

app.listen(process.env.PORT,()=>{
    console.log("Port is listning on 3000");
})