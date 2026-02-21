import { Router } from "express";
import { studentController } from "../controller/student.controller.js";
import { validateRequest } from "../middlewares/validation.middleware.js";
import { createStudentValidation, updateStudentValidation, idValidation } from "../validation/student.validation.js";

const router = Router();

router.route("/")
    .post(createStudentValidation, validateRequest, studentController.create)
    .get(studentController.findAll);

router.route("/:id")
    .get(idValidation, validateRequest, studentController.findOne)
    .put(updateStudentValidation, validateRequest, studentController.update)
    .delete(idValidation, validateRequest, studentController.delete);

export default router;
