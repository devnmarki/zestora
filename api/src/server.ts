import express from "express";
import { PORT } from "./constants.js";
import { connectDB } from "./connectDB.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://locahost:${PORT}/`);
    connectDB();
});