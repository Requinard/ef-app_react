import request from 'superagent-es6-promise'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function login (data) {
  return (dispatch) => {
    dispatch({type: LOGIN_PENDING})

    return request.post(API_URL + '/Tokens/RegSys')
      .send(data)
      .then(result => dispatch({type: LOGIN_SUCCESS, data: result.body}))
      .catch(error => dispatch({type: LOGIN_FAILED, error}))
  }
}