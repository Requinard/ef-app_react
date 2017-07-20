import React from 'react'
import PropTypes from 'prop-types'
import { fetch } from '../../actions/event'
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui'

import { EventItem } from './eventItem'

class EventItemWrapped extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      event: undefined
    }
  }

  componentDidMount () {
    this.props.fetch()
      .then(() => this.setState({
          event: this.props.events.find(event => event.Id === this.props.eventId)
        })
      )

  }

  render () {
    return (
      <div>
        {this.state.event === undefined ? <CircularProgress /> : <EventItem event={this.state.event}/>}
      </div>
    )
  }
}

EventItemWrapped.propTypes = {
  events: PropTypes.array,
  fetch: PropTypes.func,
  eventId: PropTypes.string.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    eventId: ownProps.eventId,
    events: state.event.events
  }
}

export default connect(mapStateToProps, {
  fetch
})(EventItemWrapped)
