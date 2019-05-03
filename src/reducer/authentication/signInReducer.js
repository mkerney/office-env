import submitForm from "../../validations/submitForm";
import initialState from "../../states/authentication/signIn";
import validateEmail from "../../validations/email";
import validateRequired from "../../validations/requiredValidation";


const signInReducer = (state = initialState, actions) => {
    switch(actions.type){

        case "SET_SIGNIN_EMAIL" :
        return {
            ...state,
            email: {
                ...state.email,
                value: actions.val
            }
        };

        case 'RESET_SIGNIN_FORM':
        return {
            ...initialState
        }

        case 'SET_EMAIL_SERVER_ERROR':
            return {
                ...state,
                email: {
                    ...state.email,
                    showError: true,
                    error: actions.payload.value
                }
            }

        case 'SET_PASSWORD_SERVER_ERROR':
            return {
                ...state,
                password: {
                    ...state.password,
                    showError: true,
                    error: actions.payload.value
                }
            }

        
        case "SET_SIGNIN_PASSWORD" : 
        return {
            ...state,
            password: {
                ...state.password,
                value: actions.val
            }
        };

        case "SET_SIGNIN_KEEP_LOGGED" :
        return {
            ...state,
            keepLoggedIn : actions.val
        };

        case 'VALIDATE_SIGNIN_FIELDS':
        return {
            ...state,
            email: {
                ...validateEmail(state.email)
            },
            password : {
                ...validateRequired(state.password)
            },
        };


        case 'VALIDATE_SIGNIN_FORM':
        return {
            ...state
            , isValidate : submitForm(state)
        };

        case 'SUBMIT_SIGNIN':
        return state;

        case 'RESET_VALIDATION_SIGN_IN_FORM':
        return {
            ...state,
            isValidate: false
        }

        default:
            return {
                ...state
            }

    }

};

export default signInReducer
