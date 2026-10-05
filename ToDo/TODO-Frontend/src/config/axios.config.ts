import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "http://localhost:5069/api",
    //baseURL: "http://192.168.0.204:5069/api",
    timeout: 1000
})

export default axiosInstance;
