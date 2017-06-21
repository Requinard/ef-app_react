import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { green500, green700 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { hashHistory, Router } from 'react-router'

import './index.css'
import './manifest.json'
import routes from './routes'
import reducers from './reducers/index'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

// Add element to add react to
document.write('<div id="app" />')

// Set up react theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
    primary2Color: green500
  }
})

// Initialize redux
const logger = createLogger()
const enhancer = compose(
  persistState(['auth']),
)
const store = createStore(reducers, enhancer, applyMiddleware(thunk, logger))

// handle tap events
injectTapEventPlugin()

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={hashHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
