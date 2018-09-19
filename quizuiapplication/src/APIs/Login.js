import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { LOGIN_PATH } from '../Constants/AppConstants';

//API to generate auth token from LRSC
export const generateToken = (bodyJson) =>
    axios.post(
        `${LOGIN_PATH}username=${bodyJson.username}&password=${bodyJson.password}`,
        bodyJson
    ).then(data => {
            if(data.status === HttpStatus.OK){
                return {
                    status: data.status,
                    payload: data.data
                };
            }
        }).catch(err => {
            console.log("Error in authorization", err.response.status);
            return {
                status: err.response.status,
                payload: null
            };
    });