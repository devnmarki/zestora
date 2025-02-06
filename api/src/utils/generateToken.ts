import { Response } from "express";
import jwt from "jsonwebtoken"; 
import { Types } from "mongoose";

export const COOKIE_TOKEN_NAME = "token";

export const generateToken = (res: Response, userId: Types.ObjectId): string => {
    const token: string = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie(COOKIE_TOKEN_NAME, token, {
        httpOnly: true,
        secure: process.env.ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return token;
}