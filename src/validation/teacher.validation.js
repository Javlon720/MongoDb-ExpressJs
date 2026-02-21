import { body, param } from "express-validator";

export const createTeacherValidation = [
    body("fullName").trim().isString().isLength({ min: 3 }),
    body("phone").trim().isString().notEmpty(),
    body("specialty").isIn(["japan language", "physics teacher", "trainer", "IT engineer"]),
];

export const updateTeacherValidation = [
    param("id").isMongoId(),
    body("fullName").optional().trim().isString().isLength({ min: 3 }),
    body("phone").optional().trim().isString(),
    body("specialty").optional().isIn(["japan language", "physics teacher", "trainer", "IT engineer"]),
];

export const idValidation = [
    param("id").isMongoId().withMessage("Invalid ID format")
];
