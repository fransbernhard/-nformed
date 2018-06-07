import * as types from "../action-types/index"

export const fetchAll = () => {
  return { type: types.FETCH_POSTS }
}

export const deleteCity = (id) => {
  const URL = "http://cities.jonkri.se/" + id
  return {
    type: types.DELETE_POST,
    payload: URL
  }
}

// PUT CITY
export const putCity = payload => {
  console.log('actions: ' + payload.id)
  const URL = "http://cities.jonkri.se/" + payload.id
  const putApi = {
    method: 'PUT',
    body: JSON.stringify({
      name: payload.name,
      population: payload.population
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const newObj = {
    url: URL,
    putObject: putApi
  }

  return {
    type: types.PUT_POST,
    payload: newObj
  }
}

// ADD CITY
export const addCity = payload => {
  const postApi = {
    method: 'POST',
    body: JSON.stringify({
      name: payload.name,
      population: payload.population
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return {
    type: types.ADD_POST,
    payload: postApi
  }
}
