import { Router } from "express";
import { teacherController } from "../controller/teacher.controller.js";
import { validateRequest } from "../middlewares/validation.middleware.js";
import { createTeacherValidation, updateTeacherValidation, idValidation } from "../validation/teacher.validation.js";

const router = Router();

router.route("/")
    .post(createTeacherValidation, validateRequest, teacherController.create)
    .get(teacherController.findAll);

router.route("/:id")
    .get(idValidation, validateRequest, teacherController.findOne)
    .put(updateTeacherValidation, validateRequest, teacherController.update)
    .delete(idValidation, validateRequest, teacherController.delete);

export default router;
