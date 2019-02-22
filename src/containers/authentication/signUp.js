import SignUp from "../../components/authenication/signup/signupBasicPro/signup"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        name: state.signUpForm.name,
        email: state.signUpForm.email,
        password: state.signUpForm.password,
        isSignedUp: state.signUpForm.isSignedUp,
        isValidate: state.signUpForm.isValidate,
        tncChecked: state.signUpForm.tncChecked,
        uniqueEmail: state.signUpForm.uniqueEmail,
        signUpLoading: state.formLoading.signUpLoading,
        confirmPassword: state.signUpForm.confirmPassword,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName: input => dispatch({ type: "SET_SIGNUP_NAME", val: input.target.value }),
        setEmail: input => dispatch({ type: "SET_SIGNUP_EMAIL", val: input.target.value.toLowerCase() }),
        resetStore: () => dispatch({ type: "RESET_SIGNUP_FORM" }),
        setPassword: input => dispatch({ type: "SET_SIGNUP_PASSWORD", val: input.target.value }),
        validateForm: async (isPro) => {

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type: "VALIDATE_SIGNUP_FIELDS" });
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let validateForm = dispatch({ type: "VALIDATE_SIGNUP_FORM" })
                    resolve(validateForm)
                })
            })

            if (isPro) {
                dispatch({ type: 'UNIQUE_EMAIL_CHECK' })
            }

            if (!isPro) {
                dispatch({ type: 'SUBMIT_SIGNUP' })
            }

        },
        setTncChecked: input => dispatch({ type: "SET_SIGNUP_TNC_CHECKED", val: input.target.checked }),
        setConfirmPassword: input => dispatch({ type: "SET_SIGNUP_CONFIRM_PASSWORD", val: input.target.value }),
        toggleSignUpLoading: (val = true) => dispatch({ type: "TOGGLE_SIGN_UP_FORM_LOADING", val})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
