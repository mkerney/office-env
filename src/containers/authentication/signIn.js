import SignIn from "../../components/authenication/login/login";
import { connect } from "react-redux";
import { signIn } from '../../api/authentication'

const mapStateToProps = state => {
    return {
        email: state.signInForm.email,
        password: state.signInForm.password,
        isSignedIn: state.authStates.isSignedIn,
        isValidate: state.signInForm.isValidate,
        keepLoggedIn: state.signInForm.keepLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEmail: value => dispatch({ type: "SET_SIGNIN_EMAIL", val: value }),
        setPassword: value => dispatch({ type: "SET_SIGNIN_PASSWORD", val: value }),
        submit: () => {
            dispatch(async (dispatch, getStates) => {
                try {
                    dispatch({ type: "VALIDATE_SIGNIN_FIELDS" });
                    dispatch({ type: "VALIDATE_SIGNIN_FORM" })
                    const newStates = getStates().signInForm
                    if (newStates.isValidate) {
                        const response = await signIn({
                            username: newStates.email.value,
                            password: newStates.password.value
                        })
                        if (response.data.error && response.data.error.source) {
                            dispatch({
                                type: `SET_${response.data.error.source.toUpperCase()}_SERVER_ERROR`,
                                payload: {
                                    value: response.data.error.message
                                }
                            })
                        } else {
                            dispatch({ type: 'LOGIN' })
                            localStorage.setItem('token', response.data.token)
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        },
        toggleSignInLoading: (val = true) => dispatch({ type: "TOGGLE_SIGN_IN_FORM_LOADING", val })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
