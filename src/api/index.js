import axios from "axios";
require('dotenv').config()


const axiosInstance = axios.create({
    baseURL : 'http://localhost:3001/api'
    ,withCredentials : true
})


axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    if(token){
        config.headers = {
            token
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