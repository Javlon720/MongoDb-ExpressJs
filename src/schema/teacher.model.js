import { Schema, model } from "mongoose";

const teacherSchema = new Schema(
    {
        fullName: { type: String, required: true, minlength: 3 },
        phone: { type: String, required: true },
        specialty: {
            type: String,
            required: true,
            enum: ["japan language", "physics teacher", "trainer", "IT engineer"],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Teachers", teacherSchema);
