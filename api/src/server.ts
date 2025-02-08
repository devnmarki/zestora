import express from "express";
import { PORT } from "./constants.js";
import { connectDB } from "./connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://locahost:${PORT}/`);
    connectDB();
});