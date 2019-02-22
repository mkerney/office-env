function validatePassword(password){
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#^-_!%*?&])[A-Za-z\d$@#^-_!%*?&]/;

    if(password.value.length === 0){
        return {
            ...password
            ,showError : true
            ,error : 'Password is Required'
        }
    }

    if(password.value.length < 6){
        return {
            ...password
            ,showError : true
            ,error : 'Minimum 6 characters Password required'
        }
    }

    if(!passwordRegex.test(password.value)){
        return {
            ...password
            ,showError : true
            ,error : 'Required: 1 Lowercase, 1 Uppercase, 1 special character, 1 number'
        }
    }


    return {
        ...password
        ,showError : false
    }
}

export default validatePassword