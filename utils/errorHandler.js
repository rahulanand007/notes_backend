const ErrorHandler =(res,message,statusCode)=>{

    statusCode = statusCode || 500;

    res.status(statusCode).json({
        success:false,
        statusCode,
        message:message || "Internal Server Error"
    })
    
}

module.exports = ErrorHandler