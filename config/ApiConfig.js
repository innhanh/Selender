import axios from "axios";

export const baseUrl = "http://locallhost:3000/api";
export const axiosClient = axios.create({
    baseURL: baseUrl
})