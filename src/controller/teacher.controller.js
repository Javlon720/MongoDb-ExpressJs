import BaseController from "./base.controller.js";
import { teacherService } from "../service/teacher.service.js";

class TeacherController extends BaseController {
    constructor() {
        super(teacherService);
    }
}

export const teacherController = new TeacherController();
