const CustomErrorHandler = require("../Utils/CustomErrorHandler");
const handleCastErrorDB = (err) => {
  const msg = `Invalid ${err.path}`;
  return new CustomErrorHandler(msg, 400);
};

const handleDuplicateErrorDB = (err) => {
  const value = err.errmsg.match(/(["'])([\\?.])*?\1/)[0];
  const msg = `${value} is duplicate`;
  return new CustomErrorHandler(msg, 400);
};

const devErr = (res, err) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err,
    stackTrace: err.stack,
  });
};

const proErr = (res, err) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: "Please something went wrong",
    });
  }
};

const errorController = (error, req, res, next) => {
  error.status = error.status || "fail";
  error.statusCode = error.statusCode || 500;
  if (process.env.NODE_ENV === "development") {
    devErr(res, err);
  } else if (process.env.NODE_ENV === "production") {
    let err = { ...err0r };
    if (err.name === "CastError") {
      error = handleCastErrorDB(error);
    }
    if (err.name === "DuplicateError") {
      error = handleDuplicateErrorDB(error);
    }

    proErr(res, err);
  }
  next();
};

module.exports = errorController;
