import  {INFO_FETCHED, INFO_GROUPS_FETCHED} from '../actions/info'

export default function info(state = {
  isFetching: false,
  info: [],
  infoGroups: []
}, action){
  switch (action.type){
    case INFO_FETCHED:
      return Object.assign({}, state, {
        info: action.data
      })
    case INFO_GROUPS_FETCHED:
      return Object.assign({}, state, {
        infoGroups: action.data
      })
    default:
      return state
  }
}