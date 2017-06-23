import React from 'react'
import PropTypes from 'prop-types'
import { Announcement } from './announcement'

export const AnnouncementList = props => (
  <div>
    {props.announcements.length < 0 ? <h3>There are no announcements!</h3>:
      props.announcements.map((announcement, key) => <Announcement announcement={announcement} key={key} /> )
    }
  </div>
)

AnnouncementList.propTypes = {
  announcements: PropTypes.array
}