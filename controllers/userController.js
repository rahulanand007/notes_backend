const User = require("../models/userModel")
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require("../utils/jwtToken");



//Register User
const registerUser = async (req,res,next)=>{
    try {   
    const{name,email,password} = req.body
    const user = await User.create({
        name,
        email,
        password,
    })

    sendToken(user,201,res)
        
    } catch (error) {
        console.log(error)
        return ErrorHandler(res,error.message)
    }
}


//Login User
const loginUser = async (req,res,next)=>{
    const {email,password} = req.body

    if(!email || !password){
        return ErrorHandler(res,"Please Enter Email and Password",400)
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return ErrorHandler(res,"Invalid Email or Password",401)
    }
     
    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return ErrorHandler(res,"Invalid Email or Password",401)
    }

   sendToken(user,200,res)
}



module.exports={
    registerUser,
    loginUser
}