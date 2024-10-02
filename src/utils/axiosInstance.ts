import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://matrixgymclub-api.up.railway.app/api'
})