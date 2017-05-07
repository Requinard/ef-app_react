import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const contentStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
}

const contentInner = {
  width: '960px',
  flexDirection: 'column'
}

class Overview extends React.Component {
  render () {
    return (
      <div>
        <AppBar title="Eurofurence"
                onLeftIconButtonTouchTap={() => hashHistory.push('/')}
                iconElementRight={<FlatButton onTouchTap={() => hashHistory.push('/login/')}>{this.props.username}</FlatButton>}/>
        <div style={contentStyle}>
          <div style={contentInner}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Overview.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

function mapStateToProps (state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username
  }
}

export default connect(mapStateToProps,{})(Overview)