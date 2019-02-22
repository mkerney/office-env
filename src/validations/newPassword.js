import validatePassword from "./password";

function validateNewPassword(newPassword, oldPassword){




    if(newPassword.value.length === 0) {
        return {
            ...newPassword
            , showError : true
            , error : 'New Password is Required'
        }
    }

    if(newPassword.value === oldPassword.value){
        return {
            ...newPassword
            ,showError : true
            ,error : 'Old and new passwords cannot be same'
        }
    }

    return validatePassword(newPassword);

}

export default validateNewPassword
