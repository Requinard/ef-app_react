export const IMAGES_FETCHING = 'IMAGES_FETCHING'
export const IMAGES_FETCHED = 'IMAGES_FETCHED'
export const IMAGES_ALREADY_PRESENT = 'IMAGES_ALREADY_PRESENT'
import request from 'superagent-es6-promise'

export function fetchImages () {
  return (dispatch, getState) => {
    if(getState().image.images.length === 0) {
      dispatch({type: IMAGES_FETCHING})

      return request
        .get('https://app.eurofurence.org/api/Image')
        .then(result => {
          dispatch({type: IMAGES_FETCHED, data: result.body})
        })
        .catch(error => console.log(error))
    }

    dispatch({type: IMAGES_ALREADY_PRESENT})

    return Promise.resolve()
  }
}