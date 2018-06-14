import * as types from "../action-types/index"
import store from '../store/index.js'

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
  const URL = "http://cities.jonkri.se/" + payload.id
  const putApi = {
    method: 'PUT',
    body: JSON.stringify({
      name: payload.city,
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


export const decrease = {
    type: 'DECREASE'
  }

export const increment = {
    type: 'INCREMENT'
}

export const setVoteId = (value) => {
    return {
      type: types.SET_VOTE_ID,
      value
    }
}

export const setCounter = (value) => {
    return {
      type: types.SET_COUNTER,
      value
    }
}

export const fetchCityWeather = result => {
  console.log('weatherResult: ' + result.name + ': ' + result.main.temp + ' °C')
  const weatherResult = {
    type: types.FETCH_CITY_WEATHER,
    city: result.name,
    temp: result.main.temp
  }

  return weatherResult
}
