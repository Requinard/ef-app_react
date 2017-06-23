import React from 'react'
import PropTypes from 'prop-types'
import { EventTabs } from './eventTab'
import { connect } from 'react-redux'
import { fetch } from '../../actions/event'

class EventTabsWrapper extends React.Component{
  componentDidMount(){
    this.props.fetch()
  }

  render(){
    return (
      <EventTabs events={this.props.events} days={this.props.days} />
    )
  }
}

EventTabsWrapper.propTypes = {
  events: PropTypes.array,
  days: PropTypes.array,
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
})(EventTabsWrapper)