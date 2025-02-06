import { Response, Request } from "express"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { COOKIE_TOKEN_NAME, generateToken } from "../utils/generateToken.js";

export const register = async (req: Request, res: Response) => {
    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            res.status(400).json({ success: false, message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
            name
        });

        await user.save();

        generateToken(res, user._id);

        res.status(201).json({ success: true, message: "User created", data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
 
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie(COOKIE_TOKEN_NAME);
        res.status(200).json({ success: true, message: "Logged out successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    } 
}