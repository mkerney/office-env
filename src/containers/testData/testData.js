import TestData from "../../components/dailyTestData/dailyTestData"
import { connect } from "react-redux"
import { testDataCreate } from '../../api/testData';
import { logoutUser } from '../../api/authentication';

const mapStateToProps = state => {
    return {
        ...state.testDataForm,
        isSignedIn: state.authStates.isSignedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setEnv: (value) => {
            dispatch({
                type: 'SET_ENV',
                payload: {
                    value
                }
            })
        },

        setMedicaid: (value) => {
            dispatch({
                type: 'SET_MEDICAID',
                payload: {
                    value
                }
            })
        },

        setProgramType: (value) => {
            dispatch({
                type: 'SET_PROGRAM_TYPE',
                payload: {
                    value
                }
            })
        },

        setTransactionType: (value) => {
            dispatch({
                type: 'SET_TRANSACTION_TYPE',
                payload: {
                    value
                }
            })
        },

        setComment: (value) => {
            dispatch({
                type: 'SET_COMMENT',
                payload: {
                    value
                }
            })
        },

        submit: () => {
            dispatch(async (dispatch, getStates) => {
                dispatch({
                    type: 'TEST_DATA_VALIDATION'
                })
                const validatedStates = getStates().testDataForm

                if (!validatedStates.env.showError) {
                    const response = await testDataCreate({
                        env: validatedStates.env.value,
                        medicaid: validatedStates.medicaid,
                        programType: validatedStates.programType,
                        transactionType: validatedStates.transactionType,
                        comment: validatedStates.comment,
                    })

                    if (response.data.success) {
                        console.log('success');
                    }
                }
            })
        },

        logout: async () => {
            const response = await logoutUser()
            if (response.data.success) {
                dispatch({ type: 'LOGOUT' })
                window.localStorage.removeItem('token')
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestData)
