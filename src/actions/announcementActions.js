import * as types from './actionTypes';
import AnnouncementsApi from '../services/api';

export function loadAnnouncementsListSuccess(announcementsList) {
    return {
        type: types.LOAD_ANNOUNCEMENTS_SUCCESS,
        announcementsList
    };
}

export function loadAnnouncementsList() {
    return dispatch => {
        return AnnouncementsApi.getAnnouncementsList()
            .then(announcementsList => {
                dispatch(loadAnnouncementsListSuccess(announcementsList));
            })
            .catch(err => {
                console.log(err);
            });
    };
}