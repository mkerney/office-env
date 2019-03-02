import TestData from "../../components/dailyTestData/dailyTestData"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        ...state.testDataForm
    }
}

const mapDispatchToProps = dispatch => {
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestData)
