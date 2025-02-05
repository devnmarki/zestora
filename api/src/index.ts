import express from "express";
import { PORT } from "./constants.js";
import { connectDB } from "./connectDB.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Server running on http://locahost:${PORT}/`);
    connectDB();
});