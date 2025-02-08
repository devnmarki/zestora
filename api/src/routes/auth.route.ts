import express from "express";
import { getLoggedInUser, login, logout, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", verifyToken, getLoggedInUser);

export default router;