import { combineReducers } from "redux";

import authReducer from "./authentication/authReducer";
import signInReducer from "./authentication/signInReducer";
import signUpReducer from "./authentication/signUpReducer";


const rootReducer = combineReducers ({
    signUpForm: signUpReducer,
    authStates: authReducer,
    signInForm: signInReducer
})

export default rootReducer
