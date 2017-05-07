import React from 'react'
import { Field, propTypes, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { RaisedButton, Subheader } from 'material-ui'
import './loginForm.css'

export const LoginForm = props => (
  <div className="login-outer">
    <form onSubmit={props.handleSubmit} className="login-inner">
      <Subheader><h1>Eurofurence Login</h1></Subheader>
      <Subheader>Use your Eurofurence registration details to log in!</Subheader>
      <div>
        <Field
          name="RegNo"
          component={TextField}
          type="number"
          fullWidth
          floatingLabelText="Registration number"
          required
        />
      </div>
      <div>
        <Field
          name="Username"
          component={TextField}
          type="text"
          fullWidth
          floatingLabelText="Username"
          required
        />
      </div>
      <div>
        <Field
          name="Password"
          component={TextField}
          type="password"
          floatingLabelText="Password"
          fullWidth
          errorText={props.failed ? 'Have you entered the correct password?' : ''}
          required
        />
      </div>
      <RaisedButton
        label="Login"
        type="submit"
        primary
        fullWidth
      />

    </form>
  </div>
)

LoginForm.propTypes = propTypes

export default reduxForm({
  form: 'login'
})(LoginForm)