import { LOGIN_SUCCESS, LOGIN_FAILED,LOGIN_REQUEST,LOGOUT_REQUEST , FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_STATUS} from '../Constants/AppConstants';

const initialState = {
    response: [],
    hasUserLogIn: false,
    error: false,
    isFetching: false,
    loginRequest: false,
    dataFetched: false
}

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                hasUserLogIn: true,
                response: action.data,
                error: false,
                isFetching: true,
                loginRequest: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                hasUserLogIn: false,
                response: action.data,
                error: true,
                loginRequest: false
            }
        case LOGIN_REQUEST:
            return {
                loginRequest: true
            }
         case FETCHING_STATUS: 
            return {
                ...state,
                isFetching: false
            }   
           
            case LOGOUT_REQUEST: 
            return {
                hasUserLogIn: false
            }  
        default:
            return state
    }
}