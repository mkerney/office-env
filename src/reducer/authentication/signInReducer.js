import submitForm from "../../validations/submitForm";
import initialState from "../../states/authentication/signIn";
import validateEmail from "../../validations/email";
import validateRequired from "../../validations/requiredValidation";
import submitSignInForm from "../../actions/signIn/submitSignInForm";
import validatePassword from "../../validations/password";


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
        submitSignInForm(state);
        return state;

        case 'RESET_VALIDATION_SIGN_IN_FORM':
        return {
            ...state,
            isValidate: false
        }

    }

    return state;
};

export default signInReducer