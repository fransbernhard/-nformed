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

const fetchPosts = URL => {
  return fetch(URL, { method: 'GET'})
    .then( response => Promise.all([response, response.json()]))
}

const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

// ADD CITY
export const addCity = payload => {
  return (dispatch) => {
    dispatch(fetchRequest())
    return addCityFetch("http://cities.jonkri.se/", payload).then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      } else {
        dispatch(fetchError())
      }
    })
  }
}

const addCityFetch = (URL, payload) => {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      name: payload.name,
      population: payload.population
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then( response => Promise.all([response, response.json()]))
}

// DELETE CITY
export const deleteCity = payload => {
  return (dispatch) => {
    dispatch(fetchRequest())
    return deleteCityFetch("http://cities.jonkri.se/" + payload)
      .then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      } else {
        dispatch(fetchError())
      }
    })
  }
}

const deleteCityFetch = (URL) => {
  return fetch(URL, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then( response => Promise.all([response, response.json()]))
}
