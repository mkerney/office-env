import axiosInstance from ".";

const signUpApiPath = '/sign-up';

let loginApiPath = '/sign-in'


export function signUp (data){
    return axiosInstance.post(signUpApiPath, data);
}

export function userExist (idQuery){
    return axiosInstance.get(`${signUpApiPath}/exist${idQuery}`);
}

export function signIn (data){
    return axiosInstance.post(loginApiPath, data)
}

export function logoutUser() {
    return axiosInstance.post('/logout')
}

export function uniqueEmailCheck(data) {
    return axiosInstance.post(`${signUpApiPath}/emailCheck`, data)
}