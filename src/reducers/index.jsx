import { combineReducers } from 'redux'

import dealer from './dealer'
import image from './image'
import info from './info'
import event from './event'

export default combineReducers({
  dealer,
  image,
  info,
  event
})