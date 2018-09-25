import { getTechnologiesData } from '../../APIs/GetTechnologies';
import HttpStatus from 'http-status-codes';
import history from '../../history';
import { FETCH_TECHNOLOGY_REQUEST, FETCHING_TECHNOLOGY_SUCCESS, FETCHING_STATUS_FALSE, FAILED_TEHNOLOGY_FETCHING, FETCHING_STATUS_TRUE} from '../../Constants/AppConstants';

export function fetchTechnology(token) {
    return (dispatch) => {
        dispatch(fetchingTechRequest());
        getTechnologies(dispatch, token);
    }
}

export function getTechnologies(dispatch, token) {
    getTechnologiesData(token)
        .then((response) => {
            if (response.status === 200) {
                dispatch(sendTechData(response.payload, dispatch))
            }
            else {
                dispatch(fetchingTechFailed(response.status));
            }
        })
}

export function sendTechData(data, dispatch) {
    dispatch(setFlag());
    history.push('/createQuiz');
    return {
        type: FETCHING_TECHNOLOGY_SUCCESS,
        data: data,
    }
}

export function fetchingTechFailed(data) {
    return {
        type: FAILED_TEHNOLOGY_FETCHING,
        data: data,
    }
}
export function fetchingTechRequest() {
    return {
        type: FETCHING_STATUS_TRUE
    }
}

export function setFlag(data) {
    return {
        type: FETCHING_STATUS_FALSE,
    }
}