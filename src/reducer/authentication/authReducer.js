import initialState from "../../states/authentication/auth";

const authReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'LOGIN' : return {
            ...state
            , isSignedIn : true
            , id: actions.val
        }

        case 'FACEBOOK_LOGIN' : return {
            ...state
            , isSignedIn : true
            , facebookId : actions.val
        }

        case 'SET_CURRENT_USER_ID' : 
        return {
            ...state
            , id: actions.val
        }

        case 'SET_FACEBOOK_LOGIN_AUTH' : 
        return {
            ...state
            , isFacebookLogin: actions.val
        }

        case 'SET_PRO_CURRENTUSER_AUTH':
        return {
            ...state
            , isPro : actions.val
        }

        case 'LOGOUT' : 
        return {
            ...state
            , isSignedIn : false
        }
    }

    return state
}

export default authReducer