import App from "../components/app";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        isSignedIn: state.authStates.isSignedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get checkForToken() {
            return () => {
                let token = window.localStorage.getItem('token')
                if (token) {
                    dispatch({ type: 'LOGIN' })
                } else {
                    this.logout()
                }
            }
        },

        get logout() {
            return async () => {
                window.localStorage.removeItem('token')
                dispatch({ type: 'LOGOUT' })
            }
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
