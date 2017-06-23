import React from 'react'
import PropTypes from 'prop-types'
import { Announcement } from './announcement'

export const AnnouncementList = props => (
  <div>
    {props.announcements.length < 0 ? <h3>There are no announcements!</h3>:
      props.announcements
        .filter(announcement => {
          const current = Date.now()
          const begin = Date.parse(announcement.ValidFromDateTimeUtc)
          const end = Date.parse(announcement.ValidUntilDateTimeUtc)

          return current > begin && current < end
        })
        .map((announcement, key) => <Announcement announcement={announcement} key={key} /> )
    }
  </div>
)

AnnouncementList.propTypes = {
  announcements: PropTypes.arrayOf(PropTypes.shape({
    ValidFromDateTimeUtc: PropTypes.string,
    ValidUntilDateTimeUtc: PropTypes.string
  }))
}