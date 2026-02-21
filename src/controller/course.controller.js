import BaseController from "./base.controller.js";
import { courseService } from "../service/course.service.js";

class CourseController extends BaseController {
    constructor() {
        super(courseService);
    }
}

export const courseController = new CourseController();
