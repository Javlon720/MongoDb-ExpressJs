import BaseController from "./base.controller.js";
import { studentService } from "../service/student.service.js";

class StudentController extends BaseController {
    constructor() {
        super(studentService);
    }

    getPopulateOptions() {
        return {
            path: "group",
            select: "name startDate isActive course teacher",
            populate: [
                { path: "course", select: "title price duration" },
                { path: "teacher", select: "fullName phone specialty" }
            ]
        };
    }
}

export const studentController = new StudentController();
