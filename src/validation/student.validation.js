import { body, param } from "express-validator";

export const createStudentValidation = [
    body("fullName").trim().isString().isLength({ min: 3 }),
    body("phone").trim().isString().notEmpty(),
    body("age").isInt({ min: 17 }),
    body("group").isMongoId(),
];

export const updateStudentValidation = [
    param("id").isMongoId(),
    body("fullName").optional().trim().isString().isLength({ min: 3 }),
    body("phone").optional().trim().isString(),
    body("age").optional().isInt({ min: 17 }),
    body("group").optional().isMongoId(),
];

export const idValidation = [
    param("id").isMongoId().withMessage("Invalid ID format")
];
