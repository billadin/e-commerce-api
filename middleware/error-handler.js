const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' })
}


module.exports = errorHandlerMiddleware;