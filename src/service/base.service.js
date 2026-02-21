import ApiError from "../errors/ApiError.js";
import { STATUS_CODES } from "../constants/statusCodes.js";

class BaseService {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async findAll(filter = {}, populateOptions = null) {
        let query = this.model.find(filter);
        if (populateOptions) {
            query = query.populate(populateOptions);
        }
        return await query;
    }

    async findById(id, populateOptions = null) {
        let query = this.model.findById(id);
        if (populateOptions) {
            query = query.populate(populateOptions);
        }
        const doc = await query;
        if (!doc) throw new ApiError(STATUS_CODES.NOT_FOUND, "Document not found");
        return doc;
    }

    async update(id, data) {
        const doc = await this.model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        if (!doc) throw new ApiError(STATUS_CODES.NOT_FOUND, "Document not found");
        return doc;
    }

    async delete(id) {
        const doc = await this.model.findByIdAndDelete(id);
        if (!doc) throw new ApiError(STATUS_CODES.NOT_FOUND, "Document not found");
        return doc;
    }
}

export default BaseService;
