import { STATUS_CODES } from "../constants/statusCodes.js";
import ApiError from "../errors/ApiError.js";

export const notFoundMiddleware = (req, res, next) => {
    next(new ApiError(STATUS_CODES.NOT_FOUND, `Route ${req.originalUrl} not found on this server.`));
};
