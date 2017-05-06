import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from '../actions/auth'
export default function auth (state = {
  isFetching: false,
  isLoggedIn: false,
  isFailed: false,
  jwt: ''
}, action) {
  switch (action) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false,
        isLoggedIn: false,
        jwt: ''
      })
    case  LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.data.token)
      return Object.assign({}, state, {
        isFetchng: false,
        isLoggedIn: true,
        isFailed: false,
        jwt: action.data.token
      })
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFailed: true
      })
    default:
      return state
  }
}