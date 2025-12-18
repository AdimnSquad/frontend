import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api-geely.and-dev.my.id/api',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export default apiClient;