import { DEALERS_FETCHED, DEALERS_FETCHING } from '../actions/dealer'

export default function dealer (state = {
  isFetching: false,
  dealers: []
}, action) {
  switch (action.type) {
    case DEALERS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case DEALERS_FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        dealers: action.data
      })
    default:
      return state
  }
}