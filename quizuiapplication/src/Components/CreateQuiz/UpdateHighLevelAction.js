import { QUIZ_DATA_HIGH, ADD_NEW_HIGH, REMOVE_TECH_HIGH } from '../../Constants/AppConstants';

export function updateHighLevel(tobeUpdated) {
    return (dispatch) => {
        dispatch(update(tobeUpdated));
    }
}

export function addNewHighTech(addrow) {
    return (dispatch) => {
        dispatch(addnew(addrow));
    }
}

export function removeHighTech(removerow) {
    return (dispatch) => {
        dispatch(removeRow(removerow));
    }
}


export function addnew(addrow) {
    return {
        type: ADD_NEW_HIGH,
        data: addrow,
    }
}

export function removeRow(removerow) {
    return {
        type: REMOVE_TECH_HIGH,
        data: removerow,
    }
}

export function update(tobeUpdated) {
    return {
        type: QUIZ_DATA_HIGH,
        data: tobeUpdated,
    }
}