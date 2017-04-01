import React, { Component } from 'react';
import API from '../../services/api';
import AnnouncementItem from './AnnouncementItem';

class AnnouncementsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            announcementsList: []
        };
    }

    componentWillMount() {
        API.getAnnouncementsList()
            .then(data => {
                if (data.length) {
                    this.setState({
                        announcementsList: data
                    });
                }
            });
    }

    render() {
        return (
            <div className="content">
                <ul className="announcement-list">
                    {this.state.announcementsList.map(announcement =>
                        <AnnouncementItem key={announcement.id} announcement={announcement}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default AnnouncementsList;