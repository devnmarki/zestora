export const apiInstance = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});