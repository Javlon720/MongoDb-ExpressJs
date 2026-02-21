import { body, param } from "express-validator";

export const createGroupValidation = [
    body("name").trim().isString().isLength({ min: 2 }),
    body("course").isMongoId(),
    body("teacher").isMongoId(),
    body("startDate").isISO8601().toDate(),
    body("isActive").optional().isBoolean(),
];

export const updateGroupValidation = [
    param("id").isMongoId(),
    body("name").optional().trim().isString().isLength({ min: 2 }),
    body("course").optional().isMongoId(),
    body("teacher").optional().isMongoId(),
    body("startDate").optional().isISO8601().toDate(),
    body("isActive").optional().isBoolean(),
];

export const idValidation = [
    param("id").isMongoId().withMessage("Invalid ID format")
];
