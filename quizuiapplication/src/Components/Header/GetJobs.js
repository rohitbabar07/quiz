import {
    FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_JOBDESCRIPTION_FAILED, FETCHING_STATUS, ON_JD_CHANGE,
    RESET_STATE_OF_JDNAME } from '../../Constants/AppConstants';
import { getUserJobs } from '../../APIs/GetUserJd';
import history from '../../history';

export function fetchUserJd(token) {
    return (dispatch) => {
        getUserJd(dispatch, token);
    }
};


export function getUserJd(dispatch, token) {
    getUserJobs(token)
        .then((response) => {
            if (response.status === 200)
                dispatch(sendUserJd(response.payload, dispatch))
            else
                dispatch(fetchFailure(response.status));
        })
}

export function fetchFailure(data) {
    return {
        type: FETCHING_JOBDESCRIPTION_FAILED,
        data: data,
    }
}

export function sendUserJd(data, dispatch) {
    dispatch(setFlag());
    history.push('/jobs');
    return {
        type: FETCHING_JOBDESCRIPTION_SUCCESS,
        data: data,
    }
}

export function setFlag(data) {
    return {
        type: FETCHING_STATUS,
    }
}

export function jdNameChange(jdName) {
    return {
        type: ON_JD_CHANGE,
        data: jdName
    }
}

export function resetStateOfJdName() {
    return {
        type: RESET_STATE_OF_JDNAME
    }
}