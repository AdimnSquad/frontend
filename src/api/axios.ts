import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://202.10.35.18:8000/api',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export default apiClient;