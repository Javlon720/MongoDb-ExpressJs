import { Router } from "express";
import { courseController } from "../controller/course.controller.js";
import { validateRequest } from "../middlewares/validation.middleware.js";
import { createCourseValidation, updateCourseValidation, idValidation } from "../validation/course.validation.js";

const router = Router();

router.route("/")
    .post(createCourseValidation, validateRequest, courseController.create)
    .get(courseController.findAll);

router.route("/:id")
    .get(idValidation, validateRequest, courseController.findOne)
    .put(updateCourseValidation, validateRequest, courseController.update)
    .delete(idValidation, validateRequest, courseController.delete);

export default router;
