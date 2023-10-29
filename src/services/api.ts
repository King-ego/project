import axios from "axios";
const token = localStorage.getItem("token-api")

const api = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        "Accepts": "application/json",
        "Authorization": `Barer ${token}`
    }
})

export default api;