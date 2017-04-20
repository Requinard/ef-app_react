export const DEALERS_FETCHING = 'DEALERS_FETCHING'
export const DEALERS_FETCHED = 'DEALERS_FETCHED'
export const DEALERS_ALREADY_PRESENT = 'DEALERS_ALREADY_PRESENT'
import request from 'superagent-es6-promise'

export function fetchDealers () {
  return (dispatch, getState) => {
    if(getState().dealer.dealers.length ===0 ) {
      dispatch({type: DEALERS_FETCHING})

      return request
        .get('https://app.eurofurence.org/api/Dealer')
        .then(result => {
          dispatch({type: DEALERS_FETCHED, data: result.body})
        })
        .catch(error => console.log(error))
    }

    dispatch({type: DEALERS_ALREADY_PRESENT})

    return Promise.resolve()
  }
}