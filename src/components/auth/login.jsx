import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { login } from '../../actions/auth'
import LoginForm from './loginForm'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.submit = data => this.props.login(data)
  }

  render () {
    return (
      <LoginForm onSubmit={this.submit}/>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps, {
  login
})(Login)