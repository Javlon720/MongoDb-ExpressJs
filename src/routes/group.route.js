import { Router } from "express";
import { groupController } from "../controller/group.controller.js";
import { validateRequest } from "../middlewares/validation.middleware.js";
import { createGroupValidation, updateGroupValidation, idValidation } from "../validation/group.validation.js";

const router = Router();

router.route("/")
    .post(createGroupValidation, validateRequest, groupController.create)
    .get(groupController.findAll);

router.route("/:id")
    .get(idValidation, validateRequest, groupController.findOne)
    .put(updateGroupValidation, validateRequest, groupController.update)
    .delete(idValidation, validateRequest, groupController.delete);

export default router;
