import axios from 'axios';
import HttpStatus from 'http-status-codes';

const page = 'page=0';
const size = 'size=50';

const FETCH_JD_ROOT_URL = `/api/job/v1/jobs/?${page}&${size}`;

export const fetchListOfJds = (token) => axios.get(
    `${FETCH_JD_ROOT_URL}`, { headers: { "Authorization": `Bearer ${token}` } })
    .then(data => {
        if (data.status === HttpStatus.OK) {
            return {
                status: data.status,
                payload: data
            };
        }
    })
    .catch(error => {
        return {
            status: error.response.status,
            payload: error.response
        };
    });

