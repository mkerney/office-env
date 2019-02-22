import { signIn } from "../../api/authentication";
import store from "../../store";
import { Cookies } from "react-cookie";

const cookie = new Cookies

async function submitSignInForm(state) {
    if (state.isValidate) {
        try {
            let signInResponse = await signIn({
                email: state.email.value,
                password: state.password.value,
                keepLoggedIn: state.keepLoggedIn,
                currentForm: 'SIGN_IN'
            })

            if (signInResponse.data.success) {
                cookie.set('token', signInResponse.headers.token, {
                    expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * Number(signInResponse.headers.tokenvaliditydays)))
                    , path: '/'
                })
                store.dispatch({ type: "LOGIN", val: signInResponse.data.id })
                store.dispatch({ type: "RESET_SIGNIN_FORM" })
            }

        } catch (error) {
            console.log(error);
        }
    }

}


export default submitSignInForm