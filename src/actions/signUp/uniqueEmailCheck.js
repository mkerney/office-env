import { uniqueEmailCheck } from "../../api/authentication";
import store from "../../store";

async function uniqueEmailCheckHandler(email) {
    let uniqueEmailResponse = await uniqueEmailCheck({
        email: email,
        currentForm: "SIGN_UP"
    });

    if (uniqueEmailResponse.data.success) {
        store.dispatch({ type: "SET_UNIQUE_EMAIL_STATUS" })
    }
}


export default uniqueEmailCheckHandler