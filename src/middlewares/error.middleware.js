import { STATUS_CODES } from "../constants/statusCodes.js";

export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
        data: null,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};
