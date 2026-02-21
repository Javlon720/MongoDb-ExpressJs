import { Schema, model, Types } from "mongoose";

const groupSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 2 },
        course: { type: Types.ObjectId, ref: "Courses", required: true },
        teacher: { type: Types.ObjectId, ref: "Teachers", required: true },
        startDate: { type: Date, required: true },
        isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Groups", groupSchema);
