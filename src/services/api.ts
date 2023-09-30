import axios from "axios";

const api = axios.create({
    baseURL: "http://http://0.tcp.sa.ngrok.io:10312/"
})

export default api;