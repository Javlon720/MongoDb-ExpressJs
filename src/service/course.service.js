import BaseService from "./base.service.js";
import CourseModel from "../schema/course.model.js";

class CourseService extends BaseService {
    constructor() {
        super(CourseModel);
    }
}

export const courseService = new CourseService();
