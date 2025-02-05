import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const DATABASE_URI = process.env.DATABASE_URI;