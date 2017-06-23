import React from 'react'
import PropTypes from 'prop-types'

import { EventItem } from './eventItem'
export const EventList = props => (
  <div>
    {props.events.length === 0 ? <h3>No events here</h3> : props.events
      .sort((a, b) => a.StartTime < b.StartTime)
      .map((event, eventKey) =>
        <EventItem
          event={event}
          key={eventKey}/>
      )}
  </div>
)

EventList.propTypes = {
  events: PropTypes.array
}