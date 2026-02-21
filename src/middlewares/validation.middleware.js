import { validationResult } from "express-validator";
import { STATUS_CODES } from "../constants/statusCodes.js";

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const extractedErrors = errors.array().map((err) => ({ [err.path]: err.msg }));
        return res.status(STATUS_CODES.BAD_REQUEST).json({
            success: false,
            message: "Validation Failed",
            data: extractedErrors
        });
    }
    next();
};
