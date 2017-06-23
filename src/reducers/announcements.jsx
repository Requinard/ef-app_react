import { ANNOUNCEMENTS_FAILED, ANNOUNCEMENTS_LOADED, ANNOUNCEMENTS_LOADING } from '../actions/announcements'

export default function announcement(state = {
  isFetching: false,
  announcements: []
},action) {
  switch (action.type){
    case ANNOUNCEMENTS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })
    case ANNOUNCEMENTS_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ANNOUNCEMENTS_LOADED:
      return Object.assign({}, state, {
        isFetching: false,
        announcements: action.data
      })
    default:
      return state
  }
}