import request from 'superagent-es6-promise'

export const ANNOUNCEMENTS_LOADING = 'ANNOUNCEMENTS_LOADING'
export const ANNOUNCEMENTS_LOADED = 'ANNOUNCEMENTS_LOADED'
export const ANNOUNCEMENTS_FAILED = 'ANNOUNCEMENTS_FAILED'

export function fetchAnnouncements () {
  return (dispatch) => {
    dispatch({type: ANNOUNCEMENTS_LOADING})

    return request.get(API_URL + '/Announcements')
      .then(result => dispatch({type: ANNOUNCEMENTS_LOADED, data: result.body}))
      .catch(error => dispatch({type: ANNOUNCEMENTS_FAILED, error: error}))
  }
}