import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { FETCH_JD_ROOT_URL } from '../Constants/AppConstants';


const page = 'page=0';
const size = 'size=50';

export const getUserJobs = (token) =>
    axios.get(
        `${FETCH_JD_ROOT_URL}?${page}&${size}`,
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    ).then(data => {
        if (data.status === HttpStatus.OK) {
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