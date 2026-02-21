import { Schema, model, Types } from "mongoose";

const studentSchema = new Schema(
    {
        fullName: { type: String, required: true, minlength: 3 },
        phone: { type: String, required: true },
        age: { type: Number, min: 17, required: true },
        group: { type: Types.ObjectId, ref: "Groups", required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Students", studentSchema);
