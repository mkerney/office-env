import { combineReducers } from "redux";

import authReducer from "./authentication/authReducer";
import signInReducer from "./authentication/signInReducer";
import signUpReducer from "./authentication/signUpReducer";
import testDataReducer from "./testData/testData";


const rootReducer = combineReducers ({
    signUpForm: signUpReducer,
    authStates: authReducer,
    signInForm: signInReducer,
    testDataForm: testDataReducer
})

export default rootReducer
