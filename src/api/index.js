import axios from "axios";
import store from "../store";
import { Cookies } from "react-cookie";

const cookie = new Cookies()

const axiosInstance = axios.create({
    baseURL : process.env.SERVER_URL
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

    if(config.data){
        currentForm = config.data.currentForm;
    }

    return config
})

axiosInstance.interceptors.response.use((response) => {
    if(response.data.error){
        store.dispatch({ type: "CLEAR_LOADING_FORM_STATES"})
        store.dispatch({ type: `RESET_VALIDATION_${currentForm}_FORM`})
        return store.dispatch({ type: "ERROR", val: response.data.error })
    }
    else{
        if(currentForm){
            store.dispatch({ type: "CLEAR_LOADING_FORM_STATES"})
            store.dispatch({ type: `RESET_VALIDATION_${currentForm}_FORM`})
            currentForm = ''
        }
        return response
    }
},
(error) => {
    if(error){
        store.dispatch({ type: "ERROR", val: 'Something went wrong, Please try again' })
        store.dispatch({ type: "CLEAR_LOADING_FORM_STATES"})
        store.dispatch({ type: `RESET_VALIDATION_${currentForm}_FORM`})
        currentForm = ''
    }
    else {
        return Promise.reject(error)
    }
})

export default axiosInstance