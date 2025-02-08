import { DATABASE_URI } from "./constants.js";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DATABASE_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Failed to connect database! ", error.message);
        process.exit(1);
    }   
}