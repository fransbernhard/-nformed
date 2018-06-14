import { FETCH_CITY_WEATHER } from "../action-types/index"
import store from "../store/index"

const weather = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER:
      const weatherInfo = {
        city: action.city,
        temp: action.temp
      }
      return weatherInfo
    default:
      return state
    }
}

export default weather
