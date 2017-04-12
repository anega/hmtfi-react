import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AnnouncementItemPage extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        announcement: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.announcement.id !== nextProps.announcement.id) {
            this.setState({announcement: Object.assign({}, nextProps.announcement)});
        }
    }

    render() {
        return (
            <div className="content">
                <div className="gallery">
                    <img src={this.props.announcement.preview_image} alt=""/>
                    <div className="gallery-list">
                        <ul>
                            {this.props.announcement.images && this.props.announcement.images.map((image, index) => {
                                return <li key={index}><img src={image} alt=""/></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="announcement-info">
                    <button className="connect-user">Connect</button>
                    <h2 className="item-title">{this.props.announcement.title}</h2>
                    <div className="announcement-full-description">{this.props.announcement.about}</div>
                </div>
                <div className="announcement-map">
                    <img src="./src/assets/images/test-map.jpg" alt=""/>
                    <img className="map-pin" src="./src/assets/images/map-pin.png" alt=""/>
                </div>
            </div>
        );
    }
}

function getAnnouncementById(announcementList, id) {
    const currAnnouncement = announcementList.filter(announcement => announcement.id === id);
    if (currAnnouncement) {
        return currAnnouncement[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    let announcementId = +ownProps.params.id;
    let announcement = {};
    if (announcementId && state.announcementsList.length > 0) {
        announcement = getAnnouncementById(state.announcementsList, announcementId);
    }

    return {
        announcement: announcement
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementItemPage);