import { combineReducers } from 'redux'

import { reducer as form } from 'redux-form';


import dealer from './dealer'
import image from './image'
import info from './info'
import event from './event'
import auth from './auth'

export default combineReducers({
  dealer,
  image,
  info,
  event,
  auth,
  form
})