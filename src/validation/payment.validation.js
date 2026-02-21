import { body, param } from "express-validator";

export const createPaymentValidation = [
    body("student").isMongoId(),
    body("amount").isNumeric(),
    body("date").isISO8601().toDate(),
];

export const updatePaymentValidation = [
    param("id").isMongoId(),
    body("student").optional().isMongoId(),
    body("amount").optional().isNumeric(),
    body("date").optional().isISO8601().toDate(),
];

export const idValidation = [
    param("id").isMongoId().withMessage("Invalid ID format")
];
