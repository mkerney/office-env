import initialState from "../../states/authentication/auth";

const authReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'LOGIN' : return {
            ...state,
            isSignedIn : true,
            id: actions.val
        }

        case 'SET_CURRENT_USER_ID' : 
        return {
            ...state,
            id: actions.val
        }

        case 'LOGOUT' : 
        return {
            ...state,
            isSignedIn : false
        }

        default: 
            return {
                ...state
            }
    }

}

export default authReducer