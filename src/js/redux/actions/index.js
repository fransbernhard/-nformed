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
