import { FETCHING_JOBDESCRIPTION_SUCCESS, ON_JD_CHANGE, RESET_STATE_OF_JDNAME } from '../Constants/AppConstants';
const initialState = {
    response: [],
    hasUserLogIn: false,
    error: false,
    isFetching: false,
    dataFetched: false,
    isJdSelected: false,
    selectedJdName: ''
}
export default function UserJobs(state = initialState, action) {
    switch (action.type) {
        case FETCHING_JOBDESCRIPTION_SUCCESS:
            return {
                ...state,
                response: action.data,
                error: false,
            }
        case ON_JD_CHANGE:
            return {
                ...state,
                selectedJdName: action.data,
                isJdSelected: true
            }
        case RESET_STATE_OF_JDNAME:
            return {
                ...state,
                selectedJdName: '',
                isJdSelected: false
            }
        default:
            return state
    }
}