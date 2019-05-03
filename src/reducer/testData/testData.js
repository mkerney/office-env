import initialState from "../../states/testData/testData";
import requiredDropdown from '../../validations/requiredDropdown'

const testDataReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET_ENV':
            return {
                ...state,
                env: {
                    ...state.env,
                    value: actions.payload.value
                }
            }

        case 'SET_MEDICAID':
            return {
                ...state,
                medicaid: actions.payload.value
            }

        case 'SET_PROGRAM_TYPE':
            return {
                ...state,
                programType: actions.payload.value
            }

        case 'SET_TRANSACTION_TYPE':
            return {
                ...state,
                transactionType: actions.payload.value
            }

        case 'SET_COMMENT':
            return {
                ...state,
                comment: actions.payload.value
            }

        case 'TEST_DATA_VALIDATION':
            return {
                ...state,
                env: {
                    ...requiredDropdown(state.env)
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default testDataReducer