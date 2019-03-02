const signUpForm = {
    firstName: {
        value: '',
        showError: false,
        error: ''
    },
    middleName: '',
    lastName: {
        value: '',
        showError: false,
        error: ''
    },
    password: {
        value: '',
        showError: false,
        error: ''
    },
    confirmPassword: {
        value: '',
        showError: false,
        error: ''
    },
    tncChecked: {
        value: false,
        showError: false,
        error: ''
    },
    isSignedUp: false,
    isValidate : false,
    uniqueEmail : false,
}

export default signUpForm