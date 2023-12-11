const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };

  if (err.name === 'ValidationError') {
    const msg = err.errors?.type?.message
    customError.msg = msg
    customError.statusCode = 400
  }

  if (err.code && err.code === 11000) {
    customError.msg = `${Object.keys(err.keyValue)} is already registered`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
