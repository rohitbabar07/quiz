import { QUIZ_DATA, ADD_NEW, REMOVE_TECH} from '../../Constants/AppConstants';

export function updateLowLevel(tobeUpdated) {
    console.log(tobeUpdated);
    return (dispatch) => {
        dispatch(update(tobeUpdated));
    }
}

export function addNewTech(addrow) {
    return(dispatch) => {
        dispatch(addnew(addrow));
    }
}

export function removeTech(removerow) {
    return(dispatch) => {
        dispatch(removeRow(removerow));
    }
}


export function addnew(addrow) {
    return {
        type: ADD_NEW,
        data: addrow,
    }
}

export function removeRow(removerow) {
    return {
        type: REMOVE_TECH,
        data: removerow,
    }
}

export function update(tobeUpdated) {
    return {
        type: QUIZ_DATA,
        data: tobeUpdated,
    }
}