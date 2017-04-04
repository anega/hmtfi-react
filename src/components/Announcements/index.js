import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AnnouncementItem from './AnnouncementListItem';

class AnnouncementsList extends Component {
    static propTypes = {
        announcementsList: PropTypes.array.isRequired
    };

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