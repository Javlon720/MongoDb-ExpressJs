import BaseService from "./base.service.js";
import PaymentModel from "../schema/payment.model.js";

class PaymentService extends BaseService {
    constructor() {
        super(PaymentModel);
    }
}

export const paymentService = new PaymentService();
