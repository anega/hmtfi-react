import axios from 'axios';
import { API_HOST } from '../constants';

axios.defaults.baseURL = API_HOST;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getAnnouncementsList() {
    return axios.get(`${API_HOST}/announcements`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}