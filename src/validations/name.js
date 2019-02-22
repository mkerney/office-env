function validateName(name){
    let nameRegex = /^[a-zA-Z ]*$/;

    if(name.value.length === 0){
        return {
            ...name
            ,showError : true
            ,error : 'Name is Required'
        }
    }

    if(name.value.indexOf(' ') === 0){
        return {
            ...name
            ,showError : true
            ,error: 'There should be no space before the name'
        }
    }

    if(name.value[name.value.length - 1] === ' '){
        return {
            ...name
            ,showError : true
            ,error : 'There should be no space after the name'
        }
    }

    if(name.value.length < 2){
        return {
            ...name
            ,showError : true
            ,error : 'Minimum name length should be 2'
        }
    }

    if(name.value.length > 50){
        return {
            ...name
            ,showError : true
            ,error : 'Maximum name length should be 50'
        }
    }

    if(!nameRegex.test(name.value)){
        return {
            ...name
            ,showError : true
            ,error : 'Name should contain only alphabets'
        }
    }

    return {
        ...name
        ,showError : false
    }
}

export default validateName