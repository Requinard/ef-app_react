import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch } from '../../actions/event'
import { Tab, Tabs } from 'material-ui'
import { EventItem } from './eventItem'

class EventList extends React.Component {
  componentDidMount () {
    this.props.fetch()
  }

  render () {
    return (
      <Tabs>
        {this.props.days.sort((a, b) => a.Date > b.Date)
          .map((day, dayKey) =>
            <Tab label={day.Date} key={dayKey}>
              {this.props.events.filter(event => event.ConferenceDayId === day.Id)
                .sort((a, b) => a.StartTime < b.StartTime)
                .map((event, eventKey) =>
                  <EventItem
                    event={event}
                    key={eventKey}/>
                )}
            </Tab>
          )}
      </Tabs>
    )
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    ConferenceDayId: PropTypes.string
  })),
  days: PropTypes.arrayOf(PropTupes.shape({
    Id: PropTypes.string
  })),
  fetch: PropTypes.func
}

function mapStateToProps (state) {
  return {
    events: state.event.events,
    days: state.event.days
  }
}

export default connect(mapStateToProps, {
  fetch
})(EventList)