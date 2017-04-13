import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const AnnouncementItem = ({announcement}) => {
  return (
    <li>
      <div className='announcement-img-wrap'>
        <img src={announcement.preview_image} alt={announcement.title} />
      </div>
      <div className='announcement-prev-description'>
        <h2><Link to={'/announcement/' + announcement.id}>{announcement.title}</Link></h2>
        {announcement.about && <p>{announcement.about}</p>}
        <span>145m</span>
      </div>
    </li>
  )
}

AnnouncementItem.propTypes = {
  announcement: PropTypes.object.isRequired
}

export default AnnouncementItem
