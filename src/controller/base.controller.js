import { asyncHandler } from "../utils/asyncHandler.js";
import { formatResponse } from "../utils/response.helper.js";
import { STATUS_CODES } from "../constants/statusCodes.js";

class BaseController {
    constructor(service) {
        this.service = service;
    }

    create = asyncHandler(async (req, res) => {
        const doc = await this.service.create(req.body);
        return formatResponse(res, STATUS_CODES.CREATED, doc, "Created successfully");
    });

    findAll = asyncHandler(async (req, res) => {
        const populateOptions = this.getPopulateOptions ? this.getPopulateOptions() : null;
        const docs = await this.service.findAll({}, populateOptions);
        return formatResponse(res, STATUS_CODES.OK, docs, "Fetched successfully");
    });

    findOne = asyncHandler(async (req, res) => {
        const populateOptions = this.getPopulateOptions ? this.getPopulateOptions() : null;
        const doc = await this.service.findById(req.params.id, populateOptions);
        return formatResponse(res, STATUS_CODES.OK, doc, "Fetched successfully");
    });

    update = asyncHandler(async (req, res) => {
        const doc = await this.service.update(req.params.id, req.body);
        return formatResponse(res, STATUS_CODES.OK, doc, "Updated successfully");
    });

    delete = asyncHandler(async (req, res) => {
        await this.service.delete(req.params.id);
        return formatResponse(res, STATUS_CODES.OK, null, "Deleted successfully");
    });
}

export default BaseController;
