import React from 'react'
import { fetch } from '../../actions/event'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { EventList } from './eventList'

class EventListCurrent extends React.Component {
  componentDidMount(){
    this.props.fetch()
  }

  render(){
    return(
      <div>
        <h3>Current events</h3>
        <EventList events={this.props.events.filter(event => {
          const current = Date.now()
          const startTime = Date.parse(event.StartDateTimeUtc)
          const endTime = Date.parse(event.EndDateTimeUtc)

          return current > startTime && current < endTime
        })} />
      </div>
    )
  }
}

EventListCurrent.propTypes = {
  events: PropTypes.array,
  fetch: PropTypes.func
}

function mapStateToProps (state) {
  return {
    events: state.event.events
  }
}

export default connect(mapStateToProps,{
  fetch
})(EventListCurrent)