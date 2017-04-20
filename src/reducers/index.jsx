import { combineReducers } from 'redux'

import dealer from './dealer'
import image from './image'

export default combineReducers({
  dealer,
  image
})