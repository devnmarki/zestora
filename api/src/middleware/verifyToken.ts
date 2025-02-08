import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

interface Token extends jwt.JwtPayload {
    userId?: string;
}

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as Token;

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}