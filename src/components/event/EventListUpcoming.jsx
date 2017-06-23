import React from 'react'
import { fetch } from '../../actions/event'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { EventList } from './eventList'

class EventListUpcoming extends React.Component {
  componentDidMount(){
    this.props.fetch()
  }

  render(){
    return(
      <div>
        <h3>Upcoming events</h3>
        <EventList events={this.props.events.filter(event => {
          const current = Date.now()
          const startTime = Date.parse(event.StartDateTimeUtc)

          return Math.round((startTime - current) / 60000) < 30
        })} />
      </div>
    )
  }
}

EventListUpcoming.propTypes = {
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
})(EventListUpcoming)