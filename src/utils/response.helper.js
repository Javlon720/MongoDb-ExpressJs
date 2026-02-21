export const formatResponse = (res, statusCode, data = null, message = "Success") => {
    return res.status(statusCode).json({
        success: String(statusCode).startsWith("2"),
        message,
        data,
    });
};
