//should be renamed to validate form
function submitForm(stateObj){
    for(let field in stateObj){
        if(stateObj[field]){
            if(stateObj[field].showError === true){
                return false
            }
        }
    }
    return true
}

export default submitForm
