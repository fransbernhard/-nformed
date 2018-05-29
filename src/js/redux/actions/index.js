import * as types from "../action-types/index"

export const fetchAll = (URL) => {
  return (dispatch) => {
    dispatch(fetchRequest())
    return fetchPosts(URL).then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      } else {
        dispatch(fetchError())
      }
    })
  }
}

const fetchRequest = () => {
  return {
    type: types.FETCH_REQUEST
  }
}

const fetchError = () => {
  return {
    type: types.FETCH_ERROR
  }
}

const fetchPosts = (URL) => {
  return fetch(URL, { method: 'GET'})
    .then( response => Promise.all([response, response.json()]))
}

const fetchPostsSuccess = (payload) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}
