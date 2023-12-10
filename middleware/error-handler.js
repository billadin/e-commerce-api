const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err.statusCode, err.message)
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong',
      }

    return res.status(customError.statusCode).json({ msg: customError.msg })
}


module.exports = errorHandlerMiddleware;