import {FETCHING_JOBDESCRIPTION_SUCCESS } from '../Constants/AppConstants';
const initialState = {
    response: [],
    hasUserLogIn: false,
    error: false,
    isFetching: false,
    dataFetched: false
}
export default function UserJobs(state = initialState, action) {
    switch (action.type) {
        case FETCHING_JOBDESCRIPTION_SUCCESS:
            return {
                ...state,
                response: action.data,
                error: false,
            }
        default:
            return state
    }
}