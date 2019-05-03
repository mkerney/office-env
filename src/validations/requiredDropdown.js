function validateRequired(field){

    if(field.value.length === 0 || field.value === 'Select'){
        return {
            ...field
            ,showError : true
            ,error : 'Required'
        }
    }

    return {
        ...field
        ,showError : false
    }
}

export default validateRequired
