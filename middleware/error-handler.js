const errorHandlerMiddleware = async (err, req, res, next) => {
console.log('from error handler',err.statusCode)
}


module.exports = errorHandlerMiddleware;