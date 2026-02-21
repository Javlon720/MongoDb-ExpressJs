import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("MongoDB Connected successfully");
    } catch (error) {
        console.error("Error on message", error.message);
        process.exit(1);
    }
};