import { Response, Request } from "express"

export const signup = async (req: Request, res: Response) => {
    res.send("<h1>Signup</h1>");
}

export const login = async (req: Request, res: Response) => {
    res.send("<h1>Login</h1>");
}

export const logout = async (req: Request, res: Response) => {
    res.send("<h1>Logout</h1>")
}