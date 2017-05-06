export const INFO_GROUPS_FETCHED = 'INFO_GROUPS_FETCHED'
export const INFO_FETCHED = 'INFO_FETCHED'

import request from 'superagent-es6-promise'

export function fetchInfoGroups () {
  return (dispatch) => {
    return request
      .get(API_URL + 'KnowledgeGroups')
      .then(result => {
        dispatch({type: INFO_GROUPS_FETCHED, data: result.body})
      })
  }
}

export function fetchInfo () {
  return (dispatch) => {
    return request
      .get(API_URL + 'KnowledgeEntries')
      .then(result => dispatch({type: INFO_FETCHED, data: result.body}))
  }
}