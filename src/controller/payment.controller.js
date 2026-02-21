import BaseController from "./base.controller.js";
import { paymentService } from "../service/payment.service.js";

class PaymentController extends BaseController {
    constructor() {
        super(paymentService);
    }

    getPopulateOptions() {
        return {
            path: "student",
            select: "fullName phone age group",
            populate: {
                path: "group",
                select: "name startDate isActive"
            }
        };
    }
}

export const paymentController = new PaymentController();
