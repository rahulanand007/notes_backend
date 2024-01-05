const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const isAuthenticatedUser = async (req,res,next)=>{
    try {
        const {token} = req.cookies
    
    if(!token){
        return ErrorHandler(res,"Please Login to access this resource", 401)
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET)
    let user = await User.findById(decodedData.id)
    if(!user){
        return ErrorHandler(res,"Invalid token or user doesn't exist", 400)
    }
    req.user =user

    next();
    } catch (error) {
        return ErrorHandler(res,error.message)
    }
}

module.exports ={
    isAuthenticatedUser
}
