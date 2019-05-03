import SignUp from "../../components/authenication/signup/signup";
import { connect } from "react-redux";
import { signUp } from '../../api/authentication';

const mapStateToProps = state => {
    return {
        firstName: state.signUpForm.firstName,
        middleName: state.signUpForm.middleName,
        lastName: state.signUpForm.lastName,
        password: state.signUpForm.password,
        confirmPassword: state.signUpForm.confirmPassword,
        isSignedUp: state.signUpForm.isSignedUp,
        isValidate: state.signUpForm.isValidate,
        tncChecked: state.signUpForm.tncChecked,
        uniqueEmail: state.signUpForm.uniqueEmail,
        // signUpLoading: state.formLoading.signUpLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFirstName: value => dispatch({ type: "SET_SIGNUP_FIRSTNAME", val: value }),
        setMiddleName: value => dispatch({ type: "SET_SIGNUP_MIDDLENAME", val: value }),
        setLastName: value => dispatch({ type: "SET_SIGNUP_LASTNAME", val: value }),
        setPassword: value => dispatch({ type: "SET_SIGNUP_PASSWORD", val: value }),
        setConfirmPassword: value => dispatch({ type: "SET_SIGNUP_CONFIRM_PASSWORD", val: value }),
        submit: () => {
            dispatch(async (dispatch, getStates) => {
                dispatch({ type: "VALIDATE_SIGNUP_FIELDS" });
                dispatch({ type: "VALIDATE_SIGNUP_FORM" })
                const newStates = getStates().signUpForm
                if(newStates.isValidate){
                    const signInResponse = await signUp({
                        firstName: newStates.firstName.value,
                        middleName: newStates.lastName.value,
                        lastName: newStates.lastName.value,
                        password: newStates.password.value,
                        confirmPassword: newStates.confirmPassword.value
                    })
                }
            })
        },
        setTncChecked: input => dispatch({ type: "SET_SIGNUP_TNC_CHECKED", val: input }),
        toggleSignUpLoading: (val = true) => dispatch({ type: "TOGGLE_SIGN_UP_FORM_LOADING", val})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
