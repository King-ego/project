import axios from "axios";
const token = localStorage.getItem("token-api")

const api = axios.create({
    baseURL: "https://d290-38-50-156-135.ngrok-free.app/",
    headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        "Accepts": "application/json",
        "Authorization": `Barer ${token}`
    }
})

export default api;