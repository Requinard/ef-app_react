import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs } from 'material-ui'
import Timestamp from 'react-timestamp'
import { EventList } from './eventList'

export const EventTabs = props => (
  <Tabs>
    {props.days.sort((a, b) => a.Date > b.Date)
      .map((day, dayKey) =>
        <Tab label={<Timestamp time={day.Date} format="date"/>} key={dayKey}>
          <EventList events={props.events.filter(event => event.ConferenceDayId === day.Id)} />
        </Tab>
      )}
  </Tabs>
)

EventTabs.propTypes = {
  events: PropTypes.array,
  days: PropTypes.array,
}