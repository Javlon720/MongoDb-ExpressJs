import BaseService from "./base.service.js";
import TeacherModel from "../schema/teacher.model.js";

class TeacherService extends BaseService {
    constructor() {
        super(TeacherModel);
    }
}

export const teacherService = new TeacherService();
