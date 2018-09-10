import { LoginActionAPICall } from '../LoginActions/LoginActionAPICall';
//import { fetchListOfJobs } from '../FetchJdActions/FetchJdActionCreater';

export const LOGIN_ACTION_RECIVED = 'LOGIN_ACTION_RECIVED';
export const LOGIN_ACTION_REJECTED = 'LOGIN_ACTION_REJECTED';

export function loginActionCreater(userName, password) {
    return (dispatch) => {
        loginAction(dispatch, userName, password);
    }
}

export function loginAction(dispatch, userName, password) {
    LoginActionAPICall(userName, password)
        .then((response) => {
            if (response.status === 200) {
                dispatch(userToken(response))
                //  dispatch(fetchListOfJobs(response.payload.access_token));
            }
            else {
                dispatch(loginFailure(response.payload));
            }
        })
}

export function userToken(token) {
    return {
        type: LOGIN_ACTION_RECIVED,
        data: token
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_ACTION_REJECTED,
        data: error
    }
}


// mapDispatchToProps(dispatch) {
//     return {
//         createNewRow: () => dispatch(createNewRow()),
//     }
// }

