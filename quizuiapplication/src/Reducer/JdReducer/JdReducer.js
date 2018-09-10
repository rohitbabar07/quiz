import { FETCH_JDs_RECEIVED, FETCH_JDs_REJECTED } from '../../Actions/FetchJdActions/FetchJdActionCreater';

let jdObjet = {
    error: "",
    contents: [],
    loading: false
}

export default function (state = jdObjet, action) {

    switch (action.type) {
        case FETCH_JDs_RECEIVED:
            return {
                ...state,
                contents: action.data.data.content
            };
        case FETCH_JDs_REJECTED:
            return {
                ...state,
                error: "Timeout Exception,500",
            }
    }
    return state;
}