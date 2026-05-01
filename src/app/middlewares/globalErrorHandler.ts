import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let message = "An unexpected error occurred";
  let statusCode = 500;

  // Handle Prisma errors
  if (err.name === "PrismaClientKnownRequestError") {
    const prismaError = err as any;
    if (prismaError.code === "P2025") {
      message = "Record not found";
      statusCode = 404;
    } else if (prismaError.code === "P2002") {
      message = "Unique constraint failed";
      statusCode = 400;
    }
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: err.stack,
  });
};

export default globalErrorHandler;
