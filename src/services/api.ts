import axios from "axios";

const api = axios.create({
    baseURL: "https://42ee-38-50-156-135.ngrok-free.app/"
})

export default api;