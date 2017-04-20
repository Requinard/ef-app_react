import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { green500, green700 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Router, hashHistory } from 'react-router'

import routes from './routes'


document.write('<div id="app" />')

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
    primary2Color: green500
  }
})
render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory} routes={routes} />
  </MuiThemeProvider>,
  document.getElementById('app')
)
