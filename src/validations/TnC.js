function TnCValidate(field){

    if(!field.value){
        return {
            ...field
            ,showError : true
            ,error : 'TnC is required'
        }
    }

    return {
        ...field
        ,showError : false
    }
}

export default TnCValidate
