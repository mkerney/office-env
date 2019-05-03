import initialState from "../../states/authentication/signUp";
import validateEmail from "../../validations/email";
import validateName from "../../validations/name";
import validatePassword from "../../validations/password";
import validateConfirmPassword from "../../validations/confirmPassword";
import validateTnC from "../../validations/TnC";
import submitForm from "../../validations/submitForm";


const signUpReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case "RESET_SIGNUP_FORM" : return {
            ...initialState
        }

        case 'SET_SIGNUP_FIRSTNAME': return {
            ...state,
            firstName: {
                ...state.firstName,
                value: actions.val
            }
        }

        case 'SET_SIGNUP_EMAIL': return {
            ...state,
            email: {
                ...state.email,
                value: actions.val
            }
        }

        case 'SET_SIGNUP_LASTNAME': return {
            ...state,
            lastName: {
                ...state.lastName,
                value: actions.val
            }
        }

        case 'SET_SIGNUP_PASSWORD': return {
            ...state,
            password: {
                ...state.password,
                value: actions.val
            }
        }

        case 'SET_SIGNUP_CONFIRM_PASSWORD': return {
            ...state,
            confirmPassword: {
                ...state.confirmPassword,
                value: actions.val
            }
        }

        case 'SET_SIGNUP_TNC_CHECKED': return {
            ...state,
            tncChecked: {
                ...state.tncChecked,
                value: actions.val
            }
        }

        case 'VALIDATE_SIGNUP_FIELDS':


        return {
            ...state,
            email: {
                ...validateEmail(state.email)
            },
            firstName: {
                ...validateName(state.firstName)
            },
            lastName : {
                ...validateName(state.lastName)
            },
            password : {
                ...validatePassword(state.password)
            },
            confirmPassword : {
                ...validateConfirmPassword(state.password, state.confirmPassword)
            },
            tncChecked : {
                ...validateTnC(state.tncChecked)
            }
        }


        case 'VALIDATE_SIGNUP_FORM':

        return {
            ...state
            //should be renamed to validate form since it validates the entire form
            , isValidate : submitForm(state)
        }


        case 'SUBMIT_SIGNUP' :
        return {
            ...state
        }

        case 'DISABLE_VALIDATE_SIGNUP' :
        return {
            ...state
            , isValidate: false
            , uniqueEmail: false
        }

        case 'SUCCESS_SIGNUP': return {
            ...initialState,
            isSignedUp: true
        }

        case 'UNIQUE_EMAIL_CHECK':
        if (state.isValidate) {
            return state; 
        } else {
            return state;
        }

        case 'SET_UNIQUE_EMAIL_STATUS':
        return {
            ...state,
            uniqueEmail: true
        }

        case 'RESET_VALIDATION_SIGN_UP_FORM':
        return {
            ...state,
            isValidate: false,
        }

        default:
            return {
                ...state
            }
    }
}

export default signUpReducer
