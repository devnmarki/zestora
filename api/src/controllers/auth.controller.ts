import { Response, Request, RequestHandler } from "express"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { COOKIE_TOKEN_NAME, generateToken } from "../utils/generateToken.js";

export const register = async (req: Request, res: Response): Promise<any> => {
    const { email, password, name } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ success: false, error: "Email address is required" });
        } else if (!name) {
            return res.status(400).json({ success: false, error: "Your name is required" });
        } else if (!password) {
            return res.status(400).json({ success: false, error: "Password is required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
            name
        });

        await user.save();

        await generateToken(res, user._id);

        res.status(201).json({ success: true, message: "User created", data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
 
}

export const logout = async (req: Request, res: Response) => {
    
}