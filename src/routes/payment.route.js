import { Router } from "express";
import { paymentController } from "../controller/payment.controller.js";
import { validateRequest } from "../middlewares/validation.middleware.js";
import { createPaymentValidation, updatePaymentValidation, idValidation } from "../validation/payment.validation.js";

const router = Router();

router.route("/")
    .post(createPaymentValidation, validateRequest, paymentController.create)
    .get(paymentController.findAll);

router.route("/:id")
    .get(idValidation, validateRequest, paymentController.findOne)
    .put(updatePaymentValidation, validateRequest, paymentController.update)
    .delete(idValidation, validateRequest, paymentController.delete);

export default router;
