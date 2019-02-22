import validator from "validator";


function validateEmail(email){
    // let emailRegex = /^([a-z])+([0-9])*(\.){0,1}([a-z])*\@([a-z])+(\.([a-z]){2,3}){1,3}$/;

    if(email.value.length === 0){
        return {
            ...email
            ,showError : true
            ,error : 'Email is Required'
        }
    }

    if(email.value.indexOf(' ') >= 0){
        return {
            ...email
            ,showError : true
            ,error : 'Email should not contain any space'
        }
    }

    if(email.value.length < 5){
        return {
            ...email
            ,showError : true
            ,error : 'Email should be of atleast 5 characters'
        }
    }

    if(!validator.isEmail(email.value)){
        return {
            ...email
            ,showError : true
            ,error : 'Enter a valid email ID'
        }
    }

    return {
        ...email
        ,showError : false
    }
}

export default validateEmail