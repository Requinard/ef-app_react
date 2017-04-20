import request from 'superagent-es6-promise'

export const EVENT_ENTRIES_LOADED = 'EVENT_ENTRIES_LOADED'
export const CONFERENCE_DAYS_LOADED = 'CONFERENCE_DAYS_LOADED'
export const CONFERENCE_TRACKS_LOADED = 'CONFERENCE_TRACKS_LOADED'
export const CONFERENCE_ROOMS_LOADED = 'CONFERENCE_ROOMS_LOADED'

/**
 * Fetch all in the correct order
 */
export function fetch () {
  return (dispatch) => {
    return dispatch(getConferenceRoom())
      .then(() => dispatch(getConferenceTrack()))
      .then(() => dispatch(getConferenceDay()))
      .then(() => dispatch(getEventEntries()))
  }
}

export function getEventEntries () {
  return (dispatch) => {
    return request
      .get(API_URL + 'EventEntry')
      .then(result => dispatch({type: EVENT_ENTRIES_LOADED, data: result.body}))
  }
}

export function getConferenceDay () {
  return (dispatch) => {
    return request
      .get(API_URL + 'EventConferenceDay')
      .then(result => {
        dispatch({type: CONFERENCE_DAYS_LOADED, data: result.body})
      })
  }
}

export function getConferenceTrack () {
  return (dispatch) => {
    return request.get(API_URL + 'EventConferenceTrack')
      .then(result => dispatch({type: CONFERENCE_TRACKS_LOADED, data: result.body}))
  }
}

export function getConferenceRoom () {
  return (dispatch) => {
    return request.get(API_URL + 'EventConferenceRoom')
      .then(result => dispatch({type: CONFERENCE_ROOMS_LOADED, data: result.body}))
  }
}