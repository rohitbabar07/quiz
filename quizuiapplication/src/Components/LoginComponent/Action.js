import { generateToken } from '../../APIs/Login';
import HttpStatus from 'http-status-codes';
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_REQUEST } from '../../Constants/AppConstants';
import  {  fetchUserJd } from './GetJobs';


export function fetchToken(bodyjson) {
    return (dispatch) => {
        dispatch(loginRequest());
        getLoginDetails(dispatch, bodyjson);
    }
}

export function getLoginDetails(dispatch, bodyjson) {
    generateToken(bodyjson)
        .then((response) => {
            if (response.status === 200) {
                dispatch(sendToken(response.payload))
                dispatch(fetchUserJd(response.payload.access_token));
            }
            else {
                dispatch(redirectUser(response.status));
            }
        })
}

export function sendToken(data) {
    return {
        type: LOGIN_SUCCESS,
        data: data,
    }
}

export function redirectUser(data) {
    return {
        type: LOGIN_FAILED,
        data: data,
    }
}
export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}