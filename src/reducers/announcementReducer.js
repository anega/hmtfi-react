import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function announcementReducer(state = initialState.announcementsList, action) {
    switch (action.type) {
        case types.LOAD_ANNOUNCEMENTS:
            return action.announcementsList;
            break;

        default:
            return state;
    }
}