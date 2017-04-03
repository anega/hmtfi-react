import * as types from './actionTypes';
import AnnouncementsApi from '../services/api';

export function loadAnnouncementsList(announcementsList) {
    return {
        type: types.LOAD_ANNOUNCEMENTS,
        announcementsList
    };
}

export function loadAnnouncements() {
    return dispatch => {
        return AnnouncementsApi.getAnnouncementsList()
            .then(announcementsList => {
                dispatch(loadAnnouncementsList(announcementsList));
            })
            .catch(err => {
                console.log(err);
            });
    };
}