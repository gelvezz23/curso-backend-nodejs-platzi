import { ErrorRequestHandler } from "express";

export const logErrors: ErrorRequestHandler = (error, req, res, next) => {
  console.error(error);
  next(error);
};

export const handleErrors: ErrorRequestHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
};

export const boomHandleErrors: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  if (error.isBoom) {
    const { payload, statusCode } = error.output;
    res.status(statusCode).json({
      payload,
    });
  } else {
    next(error);
  }
};
