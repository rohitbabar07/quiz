import { FETCHING_TECHNOLOGY_SUCCESS, FAILED_TEHNOLOGY_FETCHING} from '../Constants/AppConstants';
const initialState = {
    response: [],
    error: false,
}
export default function Technologies(state = initialState, action) {
    switch (action.type) {
        case FETCHING_TECHNOLOGY_SUCCESS:
            return {
                ...state,
                response: action.data,
                error: false,
            }
        case FAILED_TEHNOLOGY_FETCHING:
            return {
                ...state,
                response: action.data,
                error: true,
            }
        default:
            return state
    }
}