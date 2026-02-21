import { body, param } from "express-validator";

export const createCourseValidation = [
    body("title").trim().isString().isLength({ min: 3 }).withMessage("Title must be at least 3 characters long"),
    body("price").isNumeric().withMessage("Price must be a valid number"),
    body("duration").isInt({ min: 1, max: 12 }).withMessage("Duration must be between 1 and 12 months"),
];

export const updateCourseValidation = [
    param("id").isMongoId().withMessage("Invalid ID format"),
    body("title").optional().trim().isString().isLength({ min: 3 }),
    body("price").optional().isNumeric(),
    body("duration").optional().isInt({ min: 1, max: 12 }),
];

export const idValidation = [
    param("id").isMongoId().withMessage("Invalid ID format")
];
