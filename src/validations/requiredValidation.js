function validateRequired(field){

    if(field.value.length === 0){
        return {
            ...field
            ,showError : true
            ,error : 'Password is required'
        }
    }

    return {
        ...field
        ,showError : false
    }
}

export default validateRequired
