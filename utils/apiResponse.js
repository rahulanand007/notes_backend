const apiResponse =(res,message,statusCode,data=null)=>{
    statusCode= statusCode || 200

    res.status(statusCode).json({
        status:true,
        statusCode,
        message,
        data
    })
}

module.exports = {
    apiResponse
}