import { apiInstance } from "../lib/api";

type UserData = {
    email: string;
    password: string;
    name: string;
}

export const registerUser = async (user: UserData) => {
    const newUser: UserData = {
        email: user.email,
        password: user.password,
        name: user.name
    };
    
    try {
        const response = await apiInstance.post("/auth/signup", newUser);

        return response.data;
    } catch (e) {
        console.error(e);
    }
}