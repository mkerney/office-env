import validatePassword from "./password";

function validateConfirmPassword(password, confirmPassword){

    validatePassword(confirmPassword);

    if(confirmPassword.value.length === 0) {
        return {
            ...confirmPassword
            , showError : true
            , error : 'Repeat Password is Required'
        }
    }

    if(password.value !== confirmPassword.value){
        return {
            ...confirmPassword
            ,showError : true
            ,error : 'Passwords does not match'
        }
    }

    return {
        ...confirmPassword
        , showError: false
    }

}

export default validateConfirmPassword
