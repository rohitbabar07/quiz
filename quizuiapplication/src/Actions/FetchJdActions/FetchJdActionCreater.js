import { fetchListOfJds } from './FetchJdActionAPICall';

export const FETCH_JDs_RECEIVED = 'FETCH_JDs_RECEIVED';
export const FETCH_JDs_REJECTED = 'FETCH_JDs_REJECTED';

export function fetchListOfJobs(token) {
    return (dispatch) => {
        fetchLisOfJdAction(dispatch, token);
    }
}

export function fetchLisOfJdAction(dispatch, token) {
    fetchListOfJds(token)
        .then((response) => {
            if (response.status === 200) {
                dispatch(userJd(response))
            }
            else {
                dispatch(actionFailure(response.payload));
            }
        })
}

export function userJd(response) {
    return {
        type: FETCH_JDs_RECEIVED,
        data: response.payload
    }
}

export function actionFailure(error) {
    return {
        type: FETCH_JDs_REJECTED,
        data: error
    }
}