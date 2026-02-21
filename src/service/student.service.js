import BaseService from "./base.service.js";
import StudentModel from "../schema/student.model.js";

class StudentService extends BaseService {
    constructor() {
        super(StudentModel);
    }
}

export const studentService = new StudentService();
