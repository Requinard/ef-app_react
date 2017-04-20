import { IMAGES_FETCHING, IMAGES_FETCHED} from '../actions/image'

export default function image(state ={
  isFetching: false,
  images: []
}, action){
  switch (action.type)  {
    case IMAGES_FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case IMAGES_FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        images: action.data
      })
    default:
      return state
  }
}