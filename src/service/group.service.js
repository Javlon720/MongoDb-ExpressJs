import BaseService from "./base.service.js";
import GroupModel from "../schema/group.model.js";

class GroupService extends BaseService {
    constructor() {
        super(GroupModel);
    }
}

export const groupService = new GroupService();
