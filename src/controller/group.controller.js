import BaseController from "./base.controller.js";
import { groupService } from "../service/group.service.js";

class GroupController extends BaseController {
    constructor() {
        super(groupService);
    }

    getPopulateOptions() {
        return [
            { path: "course", select: "title price duration" },
            { path: "teacher", select: "fullName phone specialty" }
        ];
    }
}

export const groupController = new GroupController();
