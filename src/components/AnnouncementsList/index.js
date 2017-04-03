import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../services/api';
import * as announcementActions from '../../actions/announcementActions';
import AnnouncementItem from './AnnouncementItem';

class AnnouncementsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            announcementsList: []
        };
    }

    render() {
        return (
            <div className="content">
                <ul className="announcement-list">
                    {this.props.announcementsList.map(announcement =>
                        <AnnouncementItem key={announcement.id} announcement={announcement}/>
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        announcementsList: state.announcementsList
    };
}

export default connect(mapStateToProps)(AnnouncementsList);