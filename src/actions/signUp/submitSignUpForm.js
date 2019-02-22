import { basicSignUp } from "../../api/authentication";
import store from "../../store";

async function submitSignUpForm(state) {
    if (state.isValidate) {
        try {
            let signUpResponse = await basicSignUp({
                name: state.name.value.split(' ').map(name => {
                    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
                }).join(' '),
                email: state.email.value,
                password: state.password.value,
                currentForm: "SIGN_UP",

            });

            if (signUpResponse.data.success) {
                store.dispatch({ type: "RESET_SIGNUP_FORM" });
                store.dispatch({ type: "SUCCESS", val : 'Thanks for signing up!. Please click the link in your email to verify your account.' })
            }

        } catch (error) {
            console.log(error);
        }
    }

}


export default submitSignUpForm
