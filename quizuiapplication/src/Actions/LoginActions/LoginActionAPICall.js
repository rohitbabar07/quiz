import axios from 'axios';
import HttpStatus from 'http-status-codes';

const ROOT_URL = '/auth0/token?scope=admin&';

export const LoginActionAPICall = (userName, password) => axios.post(
    `${ROOT_URL}username=${userName}&password=${password}`)
    .then(data => {
        if (data.status === HttpStatus.OK) {
            return {
                status: data.status,
                payload: data.data
            };
        }
    })
    .catch(error => {
        return {
            status: error.response.status,
            payload: error.response
        };
    });