import { FETCH_POSTS, DELETE_POST, FETCH_POST_SUCCESS, ADD_POST, PUT_POST } from "../action-types/index"
import store from "../store/index"

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      fetch('http://cities.jonkri.se/')
        .then( res => {
          if(res.status === 200){
            return res.json()
          } else {
            console.log("ERROR IN FETCHALL")
          }
        }).then( json => {
          store.dispatch({
            type: FETCH_POST_SUCCESS,
            payload: json
          })
        })
      return state
    case FETCH_POST_SUCCESS:
      return action.payload
    case DELETE_POST:
      fetch(action.payload, { method: 'DELETE' })
        .then(() => {
          store.dispatch({
            type: FETCH_POSTS
          })
        })
      return state
    case ADD_POST:
      fetch('http://cities.jonkri.se/', action.payload)
        .then(() => {
          store.dispatch({
            type: FETCH_POSTS
          })
        })
      return state
    case PUT_POST:
      fetch('http://cities.jonkri.se/' + action.payload.url, action.payload.putObject)
        .then(() => {
          store.dispatch({
            type: FETCH_POSTS
          })
        })
      return state
    default:
      return state
  }
}

export default posts
