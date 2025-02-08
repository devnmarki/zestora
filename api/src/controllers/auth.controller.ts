import { Response, Request, RequestHandler } from "express"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { COOKIE_TOKEN_NAME, generateToken } from "../utils/generateToken.js";
import validator from "validator";

const ERROR_MESSAGES = {
    email_error: "Email address is required.",
    name_error: "Your name is required.",
    password_error: "Password is required.",
    login_error: "Invalid email or password."
}

export const register = async (req: Request, res: Response): Promise<any> => {
    const { email, password, name } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ success: false, error: ERROR_MESSAGES.email_error });
        } else if (!name) {
            return res.status(400).json({ success: false, error: ERROR_MESSAGES.name_error });
        } else if (!password) {
            return res.status(400).json({ success: false, error: ERROR_MESSAGES.password_error });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists." });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, error: "Password must contains 8 letters" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, error: "Invalid email" });
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
        res.status(400).json({ success: false, message: error.message });
    }
}

export const login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: "Both email and password are required." });
    }
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, error: ERROR_MESSAGES.login_error });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, error: ERROR_MESSAGES.login_error });
        }

        generateToken(res, user._id);

        await user.save();

        res.status(200).json({ success: true, message: "Logged in in successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie(COOKIE_TOKEN_NAME);
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getLoggedInUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}