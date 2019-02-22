import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducer/index"
import { createStore, applyMiddleware } from "redux";



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store