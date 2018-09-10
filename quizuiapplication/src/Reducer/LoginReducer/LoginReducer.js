import { LOGIN_ACTION_RECIVED, LOGIN_ACTION_REJECTED } from '../../Actions/LoginActions/LoginActionCreater';

let loginObjet = {
    error: "",
    success: "",
    token: ""
}

export default function (state = loginObjet, action) {
    switch (action.type) {
        case LOGIN_ACTION_RECIVED:
            // sessionStorage.setItem('auth_token', action.payload.data.access_token);
            return {
                ...state,
                token: action.data.payload.access_token
            };
        case LOGIN_ACTION_REJECTED:
            return {
                ...state,
                error: action.data.data.error_description,
            }
    }
    return state;
}

