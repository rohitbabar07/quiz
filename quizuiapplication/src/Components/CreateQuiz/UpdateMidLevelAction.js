import { QUIZ_DATA_MID, ADD_NEW_MID, REMOVE_TECH_MID} from '../../Constants/AppConstants';

export function updateMidLevel(tobeUpdated) {
    return (dispatch) => {
        dispatch(update(tobeUpdated));
    }
}

export function addNewMidTech(addrow) {
    return(dispatch) => {
        dispatch(addnew(addrow));
    }
}

export function removeMidTech(removerow) {
    return(dispatch) => {
        dispatch(removeRow(removerow));
    }
}


export function addnew(addrow) {
    return {
        type: ADD_NEW_MID,
        data: addrow,
    }
}

export function removeRow(removerow) {
    return {
        type: REMOVE_TECH_MID,
        data: removerow,
    }
}

export function update(tobeUpdated) {
    return {
        type: QUIZ_DATA_MID,
        data: tobeUpdated,
    }
}