import SignIn from "../../components/authenication/signin/signin"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        email: state.signInForm.email,
        password: state.signInForm.password,
        isSignedIn: state.authStates.isSignedIn,
        isValidate: state.signInForm.isValidate,
        keepLoggedIn: state.signInForm.keepLoggedIn,
        signInLoading: state.formLoading.signInLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEmail: input => dispatch({ type: "SET_SIGNIN_EMAIL", val: input.target.value.toLowerCase() }),
        setPassword: input => dispatch({ type: "SET_SIGNIN_PASSWORD", val: input.target.value }),
        validateForm: async () => {
            
            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type: "VALIDATE_SIGNIN_FIELDS" });
                    resolve(newState);
                })
            })
            
            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let validateForm = dispatch({ type: "VALIDATE_SIGNIN_FORM" })
                    resolve(validateForm)
                })
            })
            
            dispatch({type : "SUBMIT_SIGNIN"})
        },
        setKeepLoggedIn: input => dispatch({ type: "SET_SIGNIN_KEEP_LOGGED", val: input.target.checked }),
        toggleSignInLoading: (val = true) => dispatch({ type: "TOGGLE_SIGN_IN_FORM_LOADING", val})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
