import {EVENT_ENTRIES_LOADED, CONFERENCE_DAYS_LOADED,CONFERENCE_ROOMS_LOADED, CONFERENCE_TRACKS_LOADED} from '../actions/event'

export default function event(state = {
  events: [],
  rooms: [],
  days: [],
  tracks: []
}, action){
  switch (action.type){
    case EVENT_ENTRIES_LOADED:
      return Object.assign({}, state, {
        events: action.data
      })
    case CONFERENCE_DAYS_LOADED:
      return Object.assign({}, state, {
        days: action.data
      })
    case CONFERENCE_TRACKS_LOADED:
      return Object.assign({}, state, {
        tracks: action.data
      })
    case CONFERENCE_ROOMS_LOADED:
      return Object.assign({}, state, {
        rooms: action.data
      })
    default:
      return state
  }
}