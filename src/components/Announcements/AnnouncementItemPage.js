import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnnouncementItemPage extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(3);
        if (this.props.announcement.id != nextProps.announcement.id) {
            this.setState({announcement: Object.assign({}, nextProps.announcement)});
        }
    }

    render() {
        console.log(4);
        return (
            <h1>Item page</h1>
        );
    }
}

function getAnnouncementById(announcementList, id) {
    console.log('qqqqq');
    const currAnnouncement = announcementList.filter(announcement => announcement.id == id);
    if (currAnnouncement) {
        return currAnnouncement[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    console.log(1);
    let announcementId = ownProps.params.id;
    let announcement = {};
    if (announcementId && state.announcementsList.length > 0) {
        announcement = getAnnouncementById(state.announcementsList, announcementId);
    }
    console.log(2);

    return {
        announcement: announcement
    };
}

// function mapDispatchToProps(dispatch) {
//     return {};
// }

export default connect(mapStateToProps)(AnnouncementItemPage);