import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startFirebase, startMessaging } from '../actions/firebase'

class FirebaseManager extends React.Component {
  componentDidMount(){
    this.props.startFirebase()
      .then(() => this.props.startMessaging())
  }
  render(){
    return (
      <div />
    )
  }
}

FirebaseManager.propTypes = {
  startFirebase: PropTypes.func,
  startMessaging: PropTypes.func,
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps, {
  startFirebase,
  startMessaging
})(FirebaseManager)