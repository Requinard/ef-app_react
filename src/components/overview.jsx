import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import { Navigation } from './navigation'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FirebaseManager from './firebase'

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

  constructor(props) {
      super(props);

      this.state = {
        open: false,
      };

      this.open = () => this.setState({ open: true });
      this.close = () => this.setState({ open: false });
    }

  render () {
    return (
      <div>
        <AppBar title="Eurofurence"
                onLeftIconButtonTouchTap={() => this.state.open ? this.close() : this.open() }
                iconElementRight={<FlatButton onTouchTap={() => hashHistory.push('/login/')}>{this.props.username || 'Login'}</FlatButton>} />
        
        <Navigation open={this.state.open} onRequestClose={this.close} username={this.props.username} isLoggedIn={this.props.isLoggedIn} />

        <div style={contentStyle}>
          <div style={contentInner}>
            {this.props.children}
          </div>
        </div>
        <FirebaseManager />
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