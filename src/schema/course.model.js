import { Schema, model } from "mongoose";

const courseSchema = new Schema(
    {
        title: { type: String, required: true, minlength: 3 },
        price: { type: Number, required: true },
        duration: { type: Number, required: true, max: 12, min: 1 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Courses", courseSchema);
