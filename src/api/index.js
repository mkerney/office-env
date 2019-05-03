import axios from "axios";
import store from "../store";
import { Cookies } from "react-cookie";
require('dotenv').config()

const cookie = new Cookies()

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3002/api'
    ,withCredentials : true
})

let currentForm;

axiosInstance.interceptors.request.use(config => {
    const token = cookie.get('token');

    if(token){
        config.headers = {
            AuthToken: `token=${token}`
        }
    }

    return config
})

axiosInstance.interceptors.response.use((response) => {
    return response
},
(error) => {
    console.log(error)
    return error
})

export default axiosInstance