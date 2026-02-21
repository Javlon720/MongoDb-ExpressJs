import { Schema, model, Types } from "mongoose";

const paymentSchema = new Schema(
    {
        student: { type: Types.ObjectId, ref: "Students", required: true },
        amount: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Payments", paymentSchema);
